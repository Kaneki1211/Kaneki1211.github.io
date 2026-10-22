#!/usr/bin/env node
/**
 * 本地模拟 GitHub Pages 的静态托管行为，用来验证路由与刷新：
 * - /posts/x  → 301 补斜杠，再找 posts/x/index.html
 * - 找不到文件 → 返回 404 状态 + 根目录 404.html（Pages 的兜底规则）
 * - URL 里的百分号编码先解码再找文件（Pages 的行为）
 */
import http from 'node:http'
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..')
const port = Number(process.env.PORT ?? 8899)

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.jpg': 'image/jpeg',
  '.png': 'image/png',
  '.ico': 'image/x-icon',
  '.csv': 'text/csv; charset=utf-8',
  '.woff2': 'font/woff2',
}

const send = (res, file, status = 200) => {
  res.writeHead(status, { 'content-type': MIME[path.extname(file).toLowerCase()] ?? 'application/octet-stream' })
  fs.createReadStream(file).pipe(res)
}

http
  .createServer((req, res) => {
    const url = new URL(req.url ?? '/', `http://localhost:${port}`)
    let pathname
    try {
      pathname = decodeURIComponent(url.pathname)
    } catch {
      pathname = url.pathname
    }

    const target = path.join(root, pathname)

    // 目录不带斜杠：和 Pages 一样先 301
    if (!pathname.endsWith('/') && fs.existsSync(target) && fs.statSync(target).isDirectory()) {
      res.writeHead(301, { location: `${url.pathname}/` })
      res.end()
      return
    }

    const candidates = pathname.endsWith('/') ? [path.join(target, 'index.html')] : [target, `${target}.html`]
    for (const candidate of candidates) {
      if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
        send(res, candidate)
        return
      }
    }

    const fallback = path.join(root, '404.html')
    if (fs.existsSync(fallback)) send(res, fallback, 404)
    else {
      res.writeHead(404, { 'content-type': 'text/plain; charset=utf-8' })
      res.end('404')
    }
  })
  .listen(port, '127.0.0.1', () => {
    console.log(`Pages 预览：http://127.0.0.1:${port}/  （根目录 ${root}）`)
  })
