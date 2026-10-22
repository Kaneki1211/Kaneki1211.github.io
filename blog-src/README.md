# 博客（React + Vite，部署到 GitHub Pages 根路径）

从 `E:\Test\ui-ux-demo\nuxt-blog`（Nuxt 3）迁移而来。构建产物直接铺到仓库根目录，
所以 `https://kanekii211.github.io/` 打开就是博客，`eat.html` 等老页面路径不变。

## 目录约定

```
blog-src/                 # 源码（不参与托管）
  src/data/blog.ts        # 全站唯一数据源：文章 / 分类 / 标签 / 归档 / 游戏入口
  src/components/         # 布局、导航、侧边栏、卡片、评论、3D 背景
  src/pages/              # 10 个路由页面
  src/context/ui.tsx      # 主题 + 移动端抽屉（替代 color-mode / useState）
  scripts/postbuild.mjs   # 把 dist 铺到仓库根 + 为每条路由生成 HTML 壳
  scripts/serve-pages.mjs # 本地模拟 GitHub Pages（含 404.html 兜底）
index.html                # 构建产物：SPA 壳
assets/                   # 构建产物：带 hash 的 js/css
posts/ archives/ categories/ tags/ games/   # 每条路由的 index.html 壳
404.html                  # 未知路径兜底（同一个壳，由 Router 渲染 404 页）
.nojekyll                 # 必须，否则 Pages 会用 Jekyll 吞掉下划线开头的目录
```

## 命令

```bash
cd blog-src
npm install
npm run dev      # http://localhost:9527
npm run build    # 构建并把产物铺到仓库根
npm run serve    # http://127.0.0.1:8899 模拟 Pages（含 404 兜底与目录 301）
```

改完内容只动 `src/data/blog.ts` 一处即可，分类计数、标签云、归档、搜索、前后篇、
相关推荐全部由它派生。

## 部署

`npm run build` 之后提交仓库根的产物（`index.html`、`assets/`、路由目录、`404.html`、
`.nojekyll`），push 到 `gh-pages` 分支即可。仓库根不支持直接发布 `main` 分支的话，
把 gh-pages 分支设为 Pages 源。
