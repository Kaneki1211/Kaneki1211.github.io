#!/usr/bin/env node
/**
 * 把 blog-src/dist 的构建产物铺到仓库根目录（GitHub Pages 用户站点的发布根）。
 *
 * 做三件事：
 * 1. 清理上一轮产物（只清理白名单目录，绝不碰 eat.html / 素材 / csv 等文件）
 * 2. 拷 assets、favicon
 * 3. 为 route-manifest 里的每条路由生成 <route>/index.html 壳，外加根 index.html 与 404.html
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const src = path.resolve(__dirname, '..')
const dist = path.join(src, 'dist')
const root = path.resolve(src, '..')

// 安全阀：确认这是仓库根，而不是别的地方
if (!fs.existsSync(path.join(root, '.git')) || !fs.existsSync(path.join(root, 'README.md'))) {
  console.error(`[postbuild] 目标目录不是预期的仓库根，已中止：${root}`)
  process.exit(1)
}

if (!fs.existsSync(path.join(dist, 'index.html'))) {
  console.error('[postbuild] 未找到 dist/index.html，请先执行 vite build')
  process.exit(1)
}

const shell = fs.readFileSync(path.join(dist, 'index.html'), 'utf8')
const routes = JSON.parse(fs.readFileSync(path.join(dist, 'route-manifest.json'), 'utf8'))

// 只清理本脚本自己的产物
const OWNED_DIRS = ['assets', 'posts', 'archives', 'categories', 'tags', 'games']
const OWNED_FILES = ['index.html', '404.html', '.nojekyll', 'favicon.svg']

/**
 * 有些环境把 fs.rmSync 重定向到回收站（安全删除 shim），带 %/中文的目录会失败。
 * 失败时退回逐文件 unlink + rmdir，保证构建不被卡住。
 */
function removeDir(dir) {
  if (!fs.existsSync(dir) || !fs.statSync(dir).isDirectory()) return
  try {
    fs.rmSync(dir, { recursive: true, force: true })
    return
  } catch {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const child = path.join(dir, entry.name)
      if (entry.isDirectory()) removeDir(child)
      else fs.unlinkSync(child)
    }
    fs.rmdirSync(dir)
  }
}

for (const dir of OWNED_DIRS) removeDir(path.join(root, dir))

fs.cpSync(path.join(dist, 'assets'), path.join(root, 'assets'), { recursive: true })

// public/ 下的静态资源（favicon、图片）一并铺到根目录
for (const entry of fs.readdirSync(dist)) {
  if (entry === 'assets' || entry === 'index.html' || entry === 'route-manifest.json') continue
  const from = path.join(dist, entry)
  const to = path.join(root, entry)
  if (fs.statSync(from).isDirectory()) {
    fs.rmSync(to, { recursive: true, force: true })
    fs.cpSync(from, to, { recursive: true })
  } else {
    fs.copyFileSync(from, to)
  }
}

// 每条路由一个 HTML 壳，标题在构建期就写死，避免首屏出现默认标题闪烁
let written = 0
const writeShell = (relDir, title) => {
  const dir = relDir === '' ? root : path.join(root, relDir)
  fs.mkdirSync(dir, { recursive: true })
  const html = title ? shell.replace(/<title>[\s\S]*?<\/title>/, `<title>${title}</title>`) : shell
  fs.writeFileSync(path.join(dir, 'index.html'), html)
  written += 1
}

for (const route of routes) {
  const rel = route.path.replace(/^\/+/, '')
  writeShell(rel, route.title)

  // 中文分类/标签：不同静态托管对百分号编码的匹配方式不一致
  // （有的先解码再找文件，有的按原始路径匹配），两种目录都生成，谁命中都能拿到壳
  if (rel.includes('%')) {
    const decoded = decodeURIComponent(rel)
    if (decoded !== rel) writeShell(decoded, route.title)
  }
}

// 未知路径：Pages 会返回 404 状态但内容是 SPA 壳，Router 渲染 404 页
fs.writeFileSync(path.join(root, '404.html'), shell.replace(/<title>[\s\S]*?<\/title>/, '<title>页面不存在 - 我的博客</title>'))

// 关键：不关掉 Jekyll 的话，下划线开头的文件/目录会被直接忽略
fs.writeFileSync(path.join(root, '.nojekyll'), '')

const assetCount = fs.readdirSync(path.join(root, 'assets')).length
console.log(`[postbuild] 产物已就绪：${written} 条路由壳 + 404.html + .nojekyll`)
console.log(`[postbuild] assets: ${assetCount} 个文件 -> ${path.join(root, 'assets')}`)
