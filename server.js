"use strict";
/**
 * 吃了吗您 · 本地数据服务（零依赖，只用 Node 内置模块）
 *
 * 用途：让 eat.html 在本地直接读写同目录下的两份 CSV：
 *   - 菜品池.csv
 *   - 吃饭记录.csv
 * 并且顺带把这个静态站点跑起来（省得再开别的 http 服务）。
 *
 * 用法：
 *   node server.js
 *   然后浏览器打开 http://127.0.0.1:8787/eat.html
 *
 * 可选环境变量：PORT（默认 8787）、HOST（默认 127.0.0.1，改成 0.0.0.0 可让局域网访问）
 *
 * 设计要点：
 *   1. CSV 解析/序列化保持原文件格式（UTF-8 BOM、原换行符、字段引号），保证往返 IDENTICAL；
 *   2. 服务端直接做类型化：数字列 → number，布尔列 → boolean，多值列（适合餐次）→ string[]；
 *   3. record_id = 表名-行号-内容哈希，删除前校验哈希，宁可「删不掉」也绝不误删别的行；
 *   4. 每个文件一把 promise 锁，锁包住 read → modify → write 整个临界区，避免并发丢写；
 *   5. 吃饭记录 POST 走 upsert（日期+餐次+已吃），兜住前端「先删后插」的重复提交。
 */

const http = require("node:http");
const fs = require("node:fs");
const fsp = fs.promises;
const path = require("node:path");
const crypto = require("node:crypto");

const ROOT = __dirname;
const PORT = Number(process.env.PORT) || 8787;
const HOST = process.env.HOST || "127.0.0.1";
const MAX_BODY = 32 * 1024;

/* ============================== 表结构 ============================== */

const MEALS = ["早餐", "中餐", "晚餐", "宵夜"];

const TABLES = {
  pool: {
    file: "菜品池.csv",
    cols: ["菜名", "适合餐次", "口味", "大卡", "预估价格", "稀有度", "一句话简介", "来源"],
    num: ["大卡", "预估价格"],
    bool: [],
    multi: ["适合餐次"],
  },
  recs: {
    file: "吃饭记录.csv",
    cols: ["日期", "餐次", "菜名", "口味", "大卡", "价格", "稀有度", "状态", "是否透支"],
    num: ["大卡", "价格"],
    bool: ["是否透支"],
    multi: [],
  },
};

/* ============================== CSV 层 ============================== */

/** 解析 CSV 文本 → 二维数组（含表头行）。完整处理引号、"" 转义、字段内逗号/换行、CRLF/LF。 */
function parseCsv(text) {
  if (typeof text !== "string") text = "";
  if (text.charCodeAt(0) === 0xfeff) text = text.slice(1); // 必须剥 BOM，否则第一列表头带 \uFEFF

  const rows = [];
  let row = [];
  let field = "";
  let quoted = false;

  const endRow = () => {
    row.push(field);
    rows.push(row);
    row = [];
    field = "";
  };

  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (quoted) {
      if (c === '"') {
        if (text[i + 1] === '"') {
          field += '"';
          i++;
        } else {
          quoted = false;
        }
      } else {
        field += c;
      }
      continue;
    }
    if (c === '"') {
      quoted = true;
    } else if (c === ",") {
      row.push(field);
      field = "";
    } else if (c === "\r") {
      if (text[i + 1] === "\n") i++;
      endRow();
    } else if (c === "\n") {
      endRow();
    } else {
      field += c;
    }
  }
  if (field !== "" || row.length) endRow();

  // 丢掉尾随空行
  return rows.filter((r) => !(r.length === 1 && r[0] === ""));
}

/** 单个单元格序列化：含逗号/引号/换行或首尾空白的字段加引号。 */
function csvCell(v) {
  const s = v == null ? "" : String(v);
  return /[",\r\n]/.test(s) || /^\s|\s$/.test(s) ? '"' + s.replace(/"/g, '""') + '"' : s;
}

/** 二维数组 → CSV 文本。默认 UTF-8 BOM + LF；读写真实文件时按 readTable 探测出的 meta 传入。 */
function serialize(header, rows, opts) {
  opts = opts || {};
  const bom = opts.bom !== false;
  const eol = opts.eol || "\n";
  const lines = [header].concat(rows || []).map((r) => r.map(csvCell).join(","));
  return (bom ? "\uFEFF" : "") + lines.join(eol) + eol;
}

/* ============================== 类型化 ============================== */

function toNumber(raw) {
  const n = Number(String(raw == null ? "" : raw).replace(/[¥￥$,，\s]/g, ""));
  return Number.isFinite(n) ? n : 0;
}

function coerceIn(kind, col, raw) {
  const t = TABLES[kind];
  if (t.num.indexOf(col) >= 0) return toNumber(raw);
  if (t.bool.indexOf(col) >= 0) return /^(true|1|是|yes|y)$/i.test(String(raw == null ? "" : raw).trim());
  if (t.multi.indexOf(col) >= 0) {
    return String(raw == null ? "" : raw)
      .split(/[,，、]/)
      .map((s) => s.trim())
      .filter(Boolean);
  }
  return String(raw == null ? "" : raw).trim();
}

function coerceOut(kind, col, v) {
  const t = TABLES[kind];
  if (t.num.indexOf(col) >= 0) {
    const n = Number(v);
    return Number.isFinite(n) ? String(n) : "";
  }
  if (t.bool.indexOf(col) >= 0) return v === true || v === "true" || v === 1 || v === "1" ? "true" : "false";
  if (t.multi.indexOf(col) >= 0) {
    const arr = Array.isArray(v) ? v : String(v == null ? "" : v).split(/[,，、]/);
    return arr.map((s) => String(s).trim()).filter(Boolean).join(",");
  }
  return v == null ? "" : String(v).trim();
}

/* ============================== 行 id ============================== */

function hashCells(cells) {
  return crypto.createHash("sha1").update(cells.join("\u0001")).digest("hex").slice(0, 10);
}
function idFor(kind, idx, cells) {
  return kind + "-" + (idx + 1) + "-" + hashCells(cells);
}
function parseId(id) {
  const m = /^(pool|recs)-(\d{1,6})-([0-9a-f]{6,16})$/.exec(String(id || ""));
  return m ? { kind: m[1], idx: Number(m[2]) - 1, hash: m[3] } : null;
}

/* ============================== 读写 ============================== */

const locks = new Map();

/** 同一张表串行执行；上一次失败不阻塞下一次。 */
function withLock(kind, fn) {
  const prev = locks.get(kind) || Promise.resolve();
  const run = prev.then(fn, fn);
  locks.set(kind, run.then(() => {}, () => {}));
  return run;
}

const delay = (ms) => new Promise((r) => setTimeout(r, ms));

async function readTable(kind) {
  const t = TABLES[kind];
  const file = path.join(ROOT, t.file);
  let text;
  try {
    text = await fsp.readFile(file, "utf8");
  } catch (e) {
    if (e.code !== "ENOENT") throw e;
    return { file, exists: false, header: t.cols.slice(), rows: [], meta: { bom: true, eol: "\n" } };
  }
  const meta = {
    bom: text.charCodeAt(0) === 0xfeff,
    eol: text.indexOf("\r\n") >= 0 ? "\r\n" : "\n",
  };
  const all = parseCsv(text);
  let header = all.length ? all[0].map((s) => s.trim()) : [];
  if (!header.length || !header[0]) header = t.cols.slice();
  return { file, exists: true, header, rows: all.slice(1), meta };
}

async function writeTable(file, data) {
  // 先留一份上一步快照，误删/写坏时可手工恢复
  try {
    const prev = await fsp.readFile(file, "utf8");
    await fsp.writeFile(file + ".bak", prev, "utf8");
  } catch (e) {
    /* 首次创建，没有旧内容 */
  }

  const tmp = file + ".tmp-" + process.pid + "-" + Date.now() + Math.random().toString(16).slice(2, 6);
  await fsp.writeFile(tmp, data, "utf8");
  for (let i = 0; i < 6; i++) {
    try {
      await fsp.rename(tmp, file);
      return;
    } catch (e) {
      if (i === 5) {
        await fsp.unlink(tmp).catch(() => {});
        const err = new Error("写入失败，请关闭 Excel/WPS 后重试");
        err.status = 500;
        throw err;
      }
      await delay(80);
    }
  }
}

function padCells(cells, len) {
  const out = (cells || []).slice(0, len);
  while (out.length < len) out.push("");
  return out;
}

function rowToObject(kind, header, cells, idx) {
  const full = padCells(cells, header.length);
  const obj = { record_id: idFor(kind, idx, full) };
  header.forEach((col, i) => {
    obj[col] = coerceIn(kind, col, full[i]);
  });
  return obj;
}

/* ============================== API 处理 ============================== */

async function listRows(kind) {
  const t = await readTable(kind);
  return {
    rows: t.rows.map((cells, i) => rowToObject(kind, t.header, cells, i)),
    total: t.rows.length,
    exists: t.exists,
    file: t.file,
  };
}

function validate(kind, cells, header) {
  const pick = (col) => {
    const i = header.indexOf(col);
    return i < 0 ? "" : cells[i];
  };
  if (kind === "pool") {
    if (!pick("菜名")) return "菜名不能为空";
    return null;
  }
  const d = pick("日期");
  if (!/^\d{4}-\d{2}-\d{2}/.test(d)) return "日期格式应为 YYYY-MM-DD";
  const m = pick("餐次");
  if (MEALS.indexOf(m) < 0) return "餐次只能是：" + MEALS.join("/");
  if (!pick("菜名")) return "菜名不能为空";
  return null;
}

async function addRow(kind, fields) {
  return withLock(kind, async () => {
    const t = await readTable(kind);
    const header = t.header;
    const cells = header.map((col) => coerceOut(kind, col, fields[col]));
    const bad = validate(kind, cells, header);
    if (bad) {
      const err = new Error(bad);
      err.status = 400;
      throw err;
    }

    let idx;
    if (kind === "recs") {
      // upsert：同日期 + 同餐次 + 已吃 → 原地替换（保持行序、不会重复计费）
      const iD = header.indexOf("日期");
      const iM = header.indexOf("餐次");
      const iS = header.indexOf("状态");
      if (cells[iS] === "已吃") {
        idx = t.rows.findIndex((r) => {
          const rr = padCells(r, header.length);
          return rr[iD] === cells[iD] && rr[iM] === cells[iM] && rr[iS] === "已吃";
        });
        if (idx >= 0) t.rows[idx] = cells;
      }
      if (idx == null || idx < 0) {
        t.rows.push(cells);
        idx = t.rows.length - 1;
      }
    } else {
      t.rows.push(cells);
      idx = t.rows.length - 1;
    }

    await writeTable(t.file, serialize(header, t.rows, t.meta));
    return { ok: true, record_id: idFor(kind, idx, cells), total: t.rows.length };
  });
}

async function deleteRow(kind, id) {
  const parsed = parseId(id);
  if (!parsed || parsed.kind !== kind) return { deleted: 0 };
  return withLock(kind, async () => {
    const t = await readTable(kind);
    const cur = t.rows[parsed.idx];
    if (!cur) return { deleted: 0 };
    // 哈希不符 = 这行已经被别的操作改过，绝不按位置盲删
    if (hashCells(padCells(cur, t.header.length)) !== parsed.hash) return { deleted: 0 };
    t.rows.splice(parsed.idx, 1);
    await writeTable(t.file, serialize(t.header, t.rows, t.meta));
    return { deleted: 1, total: t.rows.length };
  });
}

/* ============================== HTTP ============================== */

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".htm": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".csv": "text/csv; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".map": "application/json; charset=utf-8",
};

function json(res, code, obj) {
  const body = JSON.stringify(obj);
  res.writeHead(code, {
    "Content-Type": "application/json; charset=utf-8",
    "Content-Length": Buffer.byteLength(body),
    "Cache-Control": "no-store",
  });
  res.end(body);
}

function text(res, code, msg) {
  res.writeHead(code, { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store" });
  res.end(msg);
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let size = 0;
    const chunks = [];
    req.on("data", (c) => {
      size += c.length;
      if (size > MAX_BODY) {
        const err = new Error("请求体过大");
        err.status = 413;
        reject(err);
        req.destroy();
        return;
      }
      chunks.push(c);
    });
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

function sameOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true; // curl / 同源 GET 不带 Origin
  try {
    return new URL(origin).host === req.headers.host;
  } catch (e) {
    return false;
  }
}

async function handleApi(req, res, seg) {
  const what = seg[0];

  if (what === "health" && req.method === "GET") {
    return json(res, 200, {
      ok: true,
      mode: "local",
      dir: ROOT,
      files: {
        pool: fs.existsSync(path.join(ROOT, TABLES.pool.file)),
        recs: fs.existsSync(path.join(ROOT, TABLES.recs.file)),
      },
      node: process.version,
    });
  }

  const kind = what === "pool" ? "pool" : what === "recs" ? "recs" : null;
  if (!kind) return json(res, 404, { error: "unknown api" });

  if (!sameOrigin(req)) return json(res, 403, { error: "forbidden origin" });

  if (req.method === "GET") {
    const data = await listRows(kind);
    return json(res, 200, { rows: data.rows, total: data.total, exists: data.exists });
  }

  if (req.method === "POST") {
    const ct = String(req.headers["content-type"] || "");
    if (ct.indexOf("application/json") < 0) return json(res, 415, { error: "Content-Type 必须是 application/json" });
    const raw = await readBody(req);
    let body;
    try {
      body = JSON.parse(raw || "{}");
    } catch (e) {
      return json(res, 400, { error: "JSON 解析失败" });
    }
    const fields = (body && body.fields) || body || {};
    const out = await addRow(kind, fields);
    return json(res, 200, out);
  }

  if (req.method === "DELETE") {
    const id = seg[1] || "";
    if (!id) return json(res, 400, { error: "缺少 record_id" });
    const out = await deleteRow(kind, decodeURIComponent(id));
    return json(res, 200, out);
  }

  return json(res, 405, { error: "method not allowed" });
}

async function serveStatic(req, res, pathname) {
  let rel;
  try {
    rel = decodeURIComponent(pathname);
  } catch (e) {
    return text(res, 400, "bad path");
  }
  if (rel === "/") {
    res.writeHead(302, { Location: "/eat.html", "Cache-Control": "no-store" });
    return res.end();
  }

  const abs = path.resolve(ROOT, "." + rel);
  if (abs !== ROOT && !abs.startsWith(ROOT + path.sep)) return text(res, 403, "forbidden");

  let stat;
  try {
    stat = await fsp.stat(abs);
  } catch (e) {
    return text(res, 404, "not found: " + rel);
  }
  if (!stat.isFile()) return text(res, 404, "not found: " + rel);

  const type = MIME[path.extname(abs).toLowerCase()] || "application/octet-stream";
  res.writeHead(200, {
    "Content-Type": type,
    "Content-Length": stat.size,
    "Cache-Control": "no-store",
  });
  if (req.method === "HEAD") return res.end();
  fs.createReadStream(abs).pipe(res);
}

const server = http.createServer(async (req, res) => {
  let pathname = "/";
  try {
    pathname = new URL(req.url, "http://" + (req.headers.host || "localhost")).pathname;
  } catch (e) {
    return text(res, 400, "bad url");
  }

  try {
    if (pathname === "/api" || pathname.startsWith("/api/")) {
      const seg = pathname.slice(5).split("/").filter(Boolean).map(decodeURIComponent);
      return await handleApi(req, res, seg);
    }
    return await serveStatic(req, res, pathname);
  } catch (err) {
    const code = err && err.status ? err.status : 500;
    console.error("[api]", req.method, pathname, "-", err && err.message);
    if (!res.headersSent) json(res, code, { error: (err && err.message) || "internal error" });
    else res.end();
  }
});

if (require.main === module) {
  server.listen(PORT, HOST, () => {
    console.log("");
    console.log("  吃了吗您 · 本地数据服务已启动");
    console.log("  页面：http://" + HOST + ":" + PORT + "/eat.html");
    console.log("  数据：" + path.join(ROOT, TABLES.pool.file) + " / " + TABLES.recs.file);
    console.log("  停止：Ctrl + C");
    console.log("");
  });
  server.on("error", (e) => {
    if (e.code === "EADDRINUSE") {
      console.error("[server] 端口 " + PORT + " 已被占用，换个端口：PORT=8788 node server.js");
      process.exit(1);
    }
    throw e;
  });
}

module.exports = {
  parseCsv,
  serialize,
  csvCell,
  coerceIn,
  coerceOut,
  hashCells,
  idFor,
  parseId,
  readTable,
  TABLES,
  server,
};
