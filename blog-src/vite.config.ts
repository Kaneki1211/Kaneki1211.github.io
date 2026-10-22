import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { articles, archives, categories, tags } from './src/data/blog'

/**
 * GitHub Pages 没有服务端路由。构建时把路由清单写进产物，
 * 由 scripts/postbuild.mjs 为每条路由复制一份 HTML 壳，
 * 这样直达 / 刷新 / 分享链接都不会 404 或白屏。
 */
function routeManifest(): Plugin {
  return {
    name: 'blog-route-manifest',
    apply: 'build',
    generateBundle() {
      const routes = [
        { path: '/', title: '我的博客 - 首页' },
        { path: '/archives', title: '归档 - 我的博客' },
        { path: '/categories', title: '分类 - 我的博客' },
        { path: '/tags', title: '标签 - 我的博客' },
        { path: '/games', title: '游戏与工具 - 我的博客' },
        ...articles.map((a) => ({ path: `/posts/${a.slug}`, title: `${a.title} - 我的博客` })),
        ...archives.flatMap((y) => [
          { path: `/archives/${y.year}`, title: `归档：${y.year}年 - 我的博客` },
          ...y.months.map((m) => ({
            path: `/archives/${m.key}`,
            title: `归档：${y.year}年${m.month}月 - 我的博客`,
          })),
        ]),
        ...categories.map((c) => ({
          path: `/categories/${encodeURIComponent(c.name)}`,
          title: `分类：${c.name} - 我的博客`,
        })),
        ...tags.map((t) => ({
          path: `/tags/${encodeURIComponent(t.name)}`,
          title: `标签：${t.name} - 我的博客`,
        })),
      ]
      this.emitFile({
        type: 'asset',
        fileName: 'route-manifest.json',
        source: JSON.stringify(routes, null, 2),
      })
    },
  }
}

export default defineConfig(({ command }) => ({
  // 用户站点（kanekii211.github.io）部署在根路径；若改子路径部署，只需改这里 + Router basename
  base: '/',
  plugins: [react(), routeManifest()],
  server: { port: 9527, host: '0.0.0.0' },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    chunkSizeWarningLimit: 900,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('three')) return 'three'
          if (id.includes('react-router')) return 'router'
          if (id.includes('node_modules')) return 'vendor'
        },
      },
    },
  },
  esbuild: command === 'build' ? { drop: ['console', 'debugger'] } : {},
}))
