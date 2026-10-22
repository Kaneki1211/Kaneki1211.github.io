import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
  archiveShortcuts,
  archives,
  articles,
  categories,
  games,
  siteStats,
  tags,
} from '../data/blog'
import { useDrawer } from '../context/ui'
import { encodeSlug, usePersistentState } from '../lib/hooks'

const AVATAR = `${import.meta.env.BASE_URL}images/kaneki.jpg`

/* ------------------------------------------------------------------ 作者卡片 */
export function AuthorCard() {
  return (
    <div className="clay-card is-interactive p-6 text-center">
      <div className="relative inline-block mb-4">
        <div className="w-24 h-24 rounded-full overflow-hidden mx-auto ring-4 ring-primary-100 animate-float">
          <img src={AVATAR} alt="博主头像" className="w-full h-full object-cover" width={96} height={96} />
        </div>
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-400 rounded-full ring-2 ring-white animate-pulse-soft" />
      </div>

      <h3 className="text-lg font-bold t1 mb-1">Kaneki</h3>
      <p className="text-sm t3 mb-4">一个普通集帅 | 碎碎念大师</p>

      <div className="flex justify-center gap-3">
        <a
          href="https://github.com/Kaneki1211"
          target="_blank"
          rel="noreferrer"
          className="clay-btn p-2 t3 hover:text-primary-500"
          aria-label="GitHub"
        >
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23a11.5 11.5 0 013.003-.404c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222 0 1.606-.014 2.898-.014 3.293 0 .322.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
          </svg>
        </a>
        <a href="https://kanekii211.github.io/" target="_blank" rel="noreferrer" className="clay-btn p-2 t3 hover:text-primary-500" aria-label="站点主页">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0zM3.6 9h16.8M3.6 15h16.8M12 3a15 15 0 010 18 15 15 0 010-18z" />
          </svg>
        </a>
        <a href="https://github.com/Kaneki1211" target="_blank" rel="noreferrer" className="clay-btn p-2 t3 hover:text-primary-500" aria-label="关注">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
          </svg>
        </a>
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ 统计入口 */
export function NavLinks() {
  const items = [
    { to: '/archives', value: siteStats.articles, label: '文章', color: 'text-primary-500' },
    { to: '/tags', value: siteStats.tags, label: '标签', color: 'text-accent-500' },
    { to: '/categories', value: siteStats.categories, label: '分类', color: 'text-warm-500' },
  ]

  return (
    <div className="clay-card p-4">
      <div className="grid grid-cols-3 gap-3">
        {items.map((item) => (
          <Link key={item.to} to={item.to} className="text-center group cursor-pointer">
            <div className={`text-2xl font-bold ${item.color} group-hover:opacity-80 transition-opacity`}>{item.value}</div>
            <div className="text-xs t3">{item.label}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ 公告 */
export function Announcement() {
  return (
    <div className="clay-card p-5">
      <div className="flex items-center gap-2 mb-3">
        <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
          />
        </svg>
        <h4 className="font-bold t1">公告</h4>
      </div>
      <p className="text-sm t2 leading-relaxed">煮啵正在努力的上学中…想催煮啵发文章的打 1 …</p>
    </div>
  )
}

/* ------------------------------------------------------------------ 点赞（本地持久化） */
export function LikeWidget() {
  const [count, setCount] = usePersistentState<number>('blog-likes', 15)
  const [bump, setBump] = useState(false)

  return (
    <div className="clay-card p-5 text-center">
      <h4 className="font-bold t1 mb-3">Do You Like Me</h4>
      <button
        type="button"
        onClick={() => {
          setCount(count + 1)
          setBump(true)
          window.setTimeout(() => setBump(false), 600)
        }}
        className="clay-btn px-6 py-2 bg-gradient-to-r from-accent-400 to-primary-400 text-white font-bold"
        aria-label="点赞"
      >
        <span className="flex items-center gap-2">
          <svg className={`w-5 h-5 ${bump ? 'animate-bounce' : ''}`} fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              clipRule="evenodd"
            />
          </svg>
          {count}
        </span>
      </button>
    </div>
  )
}

/**
 * 移动端抽屉里的「游戏与工具」入口卡片。
 * 点回本站的正规路由 /games（列表页），而不是直接跳 .html，避免把 SPA 导航打断。
 */
export function GamesAndTools() {
  const { closeDrawer } = useDrawer()

  return (
    <Link to="/games" onClick={closeDrawer} className="clay-card is-interactive p-4 flex items-center gap-3 group">
      <span className="w-10 h-10 rounded-xl bg-primary-100/80 dark:bg-primary-900/40 flex items-center justify-center shrink-0">
        <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 11h4m-2-2v4m7-1h.01M18 10h.01M7 6h10a4 4 0 014 4v4a4 4 0 01-4 4c-1.2 0-2-.8-2.6-1.6l-.7-1a2 2 0 00-3.4 0l-.7 1C9 17.2 8.2 18 7 18a4 4 0 01-4-4v-4a4 4 0 014-4z"
          />
        </svg>
      </span>

      <span className="min-w-0 flex-1">
        <span className="block font-bold t1 text-sm group-hover:text-primary-500 transition-colors">游戏与工具</span>
        <span className="block text-xs t4 mt-0.5 truncate">
          {games.length} 个页面，进去看看
        </span>
      </span>

      <svg
        className="w-4 h-4 t4 shrink-0 group-hover:translate-x-0.5 group-hover:text-primary-500 transition-all"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
      </svg>
    </Link>
  )
}


/* ------------------------------------------------------------------ 最新文章 */
export function LatestArticles() {
  return (
    <div className="clay-card p-5">
      <h4 className="font-bold t1 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        最新文章
      </h4>
      <div className="space-y-3">
        {articles.slice(0, 5).map((article) => (
          <Link key={article.slug} to={`/posts/${article.slug}`} className="block group cursor-pointer">
            <div className="text-sm font-medium t2 group-hover:text-primary-500 transition-colors line-clamp-2">
              {article.title}
            </div>
            <div className="text-xs t4 mt-1">{article.date}</div>
          </Link>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ 分类 */
export function CategoryList() {
  return (
    <div className="clay-card p-5">
      <h4 className="font-bold t1 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-warm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
          />
        </svg>
        分类
      </h4>
      <div className="space-y-1">
        {categories.map((cat) => (
          <Link
            key={cat.name}
            to={`/categories/${encodeSlug(cat.name)}`}
            className="flex items-center justify-between py-1.5 px-2 rounded-xl hover:bg-primary-50/60 dark:hover:bg-white/5 transition-colors group"
          >
            <span className="text-sm t2 group-hover:text-primary-500 transition-colors">{cat.name}</span>
            <span className="clay-tag text-primary-500">{cat.count}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

/* ------------------------------------------------------------------ 标签云 */
export function TagCloud() {
  return (
    <div className="clay-card p-5">
      <h4 className="font-bold t1 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-accent-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
        </svg>
        标签
      </h4>
      <div className="flex flex-wrap gap-2">
        {tags.slice(0, 22).map((tag) => (
          <Link
            key={tag.name}
            to={`/tags/${encodeSlug(tag.name)}`}
            className="clay-tag hover:text-primary-600"
            style={{ fontSize: `${tag.size}px` }}
          >
            {tag.name}
          </Link>
        ))}
      </div>
      <Link to="/tags" className="mt-3 inline-block text-xs text-primary-500 hover:text-primary-600">
        查看全部 {tags.length} 个标签 →
      </Link>
    </div>
  )
}

/* ------------------------------------------------------------------ 归档 */
export function ArchivesWidget() {
  return (
    <div className="clay-card p-5">
      <h4 className="font-bold t1 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
          />
        </svg>
        归档
      </h4>
      <div className="space-y-1">
        {archiveShortcuts.map((item) => (
          <Link
            key={item.key}
            to={`/archives/${item.key}`}
            className="flex items-center justify-between py-1.5 px-2 rounded-xl hover:bg-primary-50/60 dark:hover:bg-white/5 transition-colors group"
          >
            <span className="text-sm t2 group-hover:text-primary-500 transition-colors">
              {item.month}月 {item.year}
            </span>
            <span className="text-xs t4">{item.articles.length}</span>
          </Link>
        ))}
      </div>
      <Link to="/archives" className="mt-3 inline-block text-xs text-primary-500 hover:text-primary-600">
        查看全部 {archives.length} 个年份 →
      </Link>
    </div>
  )
}

/* ------------------------------------------------------------------ 站点信息 */
export function SiteInfo() {
  const rows = [
    { label: '文章数目', value: String(siteStats.articles) },
    { label: '本站总字数', value: siteStats.words },
    { label: '分类 / 标签', value: `${siteStats.categories} / ${siteStats.tags}` },
    { label: '最后更新', value: siteStats.lastUpdated, highlight: true },
  ]

  return (
    <div className="clay-card p-5">
      <h4 className="font-bold t1 mb-4 flex items-center gap-2">
        <svg className="w-5 h-5 text-warm-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        网站信息
      </h4>
      <div className="space-y-2 text-sm">
        {rows.map((row) => (
          <div key={row.label} className="flex justify-between gap-3">
            <span className="t3">{row.label}</span>
            <span className={row.highlight ? 'text-primary-500 font-medium' : 't1 font-medium'}>{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
