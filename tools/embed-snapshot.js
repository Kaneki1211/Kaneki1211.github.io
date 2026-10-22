"use strict";
/**
 * 把 菜品池.csv / 吃饭记录.csv 内嵌成 eat.html 里的静态快照。
 *
 * 为什么需要：eat.html 在 GitHub Pages / 双击 file:// 打开时读不到 /api，
 * 需要一份「页面自带」的初始数据（之后所有改动只存在浏览器 localStorage）。
 *
 * 用法：CSV 有改动后执行
 *   node tools/embed-snapshot.js
 * 然后提交 eat.html 即可。
 */

const fs = require("node:fs");
const path = require("node:path");

const ROOT = path.resolve(__dirname, "..");
const TARGET = path.join(ROOT, "eat.html");
const FILES = [
  { id: "snap-pool", file: "菜品池.csv" },
  { id: "snap-recs", file: "吃饭记录.csv" },
];

const BEGIN = "<!-- snapshot:begin (由 tools/embed-snapshot.js 生成，勿手改) -->";
const END = "<!-- snapshot:end -->";

const block =
  BEGIN +
  "\n" +
  FILES.map((f) => {
    const text = fs.readFileSync(path.join(ROOT, f.file), "utf8").replace(/^\uFEFF/, "");
    return '<script type="text/csv" id="' + f.id + '">\n' + text + "</script>";
  }).join("\n") +
  "\n" +
  END;

let html = fs.readFileSync(TARGET, "utf8");
const start = html.indexOf(BEGIN);
const end = html.indexOf(END);

if (start >= 0 && end > start) {
  html = html.slice(0, start) + block + html.slice(end + END.length);
} else {
  // 首次插入：放在主逻辑脚本之前，保证脚本执行时快照节点已存在
  const anchor = '<script data-page-node-id="YHQOipb465jH1IRvYEnRn7"';
  const at = html.indexOf(anchor);
  if (at < 0) {
    console.error("[embed-snapshot] 找不到插入锚点，请手动插入");
    process.exit(1);
  }
  html = html.slice(0, at) + block + "\n\n" + html.slice(at);
}

fs.writeFileSync(TARGET, html, "utf8");
console.log("[embed-snapshot] 已写入 " + FILES.map((f) => f.file).join(" / ") + " 的快照到 eat.html");
