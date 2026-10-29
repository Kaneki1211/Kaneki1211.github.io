# Kaneki Blog

个人站点：React + Vite 的博客主体，外加一堆独立的小页面（塔防游戏、干饭盲盒、天气页等）。

- 线上地址：<https://kaneki1211.github.io/>
- 源码分支：`main`
- 发布分支：`gh-pages`（**由 Actions 自动生成，不要手改**）

## 目录结构

```
blog-src/           博客源码（React + Vite + Tailwind）
  src/              页面、组件、文章数据
  scripts/          postbuild.mjs：把 dist 铺到仓库根目录
  dist/             构建产物（git 忽略，由 postbuild 拷到根目录）
assets/             ← 构建产物：JS / CSS
posts/ archives/    ← 构建产物：每条路由一个 HTML 壳
categories/ tags/
index.html 404.html ← 构建产物
eat.html time.html  ← 手写的独立页面，构建不会动它们
tower-defense.html
aether-weather.html
server.js           干饭盲盒的本地数据服务（只在本地跑，不参与部署）
```

## 本地开发

```bash
cd blog-src
npm install
npm run dev      # http://localhost:9527
```

想在本地产出和线上一样的静态文件：

```bash
cd blog-src
npm run build    # tsc 类型检查 → vite build → postbuild 铺到仓库根目录
```

## 部署

推送到 `main` 就会自动部署，不需要手动打包：

```bash
git add -A
git commit -m "update"
git push origin main
```

流程见 `.github/workflows/deploy.yml`：

1. `actions/checkout` 拉代码 → `setup-node` 装 Node 20
2. `npm ci` 装依赖（缓存按 `blog-src/package-lock.json` 走）
3. `npm run build` 产出静态文件，`postbuild.mjs` 把它们铺到仓库根
4. 把结果提交并强推到 `gh-pages`，Pages 随即重新发布

`gh-pages` 是产物分支，每次部署都会被整体覆盖。要改内容请改 `main` 上的源码，别直接动 `gh-pages`。

也可以去 Actions 页面点一次 "Run workflow" 手动发布。
