import { Link, useSearchParams } from 'react-router-dom'
import { useEffect, useMemo } from 'react'
import ArticleCard from '../components/ArticleCard'
import { articles, siteStats } from '../data/blog'
import { usePageTitle } from '../lib/hooks'

const PER_PAGE = 6

export default function HomePage() {
  usePageTitle('我的博客 - 首页')

  const [searchParams, setSearchParams] = useSearchParams()
  // 源项目是假分页（totalPages 写死 3、点击只滚回顶部），这里改成真正按 URL 分页
  const totalPages = Math.max(1, Math.ceil(articles.length / PER_PAGE))
  const rawPage = Number(searchParams.get('page') ?? '1')
  const currentPage = Number.isFinite(rawPage) ? Math.min(Math.max(1, Math.trunc(rawPage)), totalPages) : 1

  const list = useMemo(
    () => articles.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE),
    [currentPage],
  )

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [currentPage])

  return (
    <div>
      {/* 顶部欢迎区 */}
      <section className="mb-10 animate-fade-in">
        <div className="clay-card p-8 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary-50/70 via-warm-50/60 to-accent-50/70 dark:from-primary-900/20 dark:via-warm-900/20 dark:to-accent-900/20" />
          <div className="relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold t1 mb-3">
              欢迎来到{' '}
              <span className="bg-gradient-to-r from-primary-500 via-accent-500 to-warm-500 bg-clip-text text-transparent">
                我的小空间
              </span>
            </h1>
            <p className="t3 max-w-xl mx-auto">记录生活中的点点滴滴，分享学习中的心得体会</p>
            <p className="text-xs t4 mt-3">
              共 {siteStats.articles} 篇文章 · {siteStats.words} 字
            </p>
          </div>
        </div>
      </section>

      {/* 文章列表 */}
      <section className="space-y-6">
        {list.map((article, index) => (
          <ArticleCard key={article.slug} article={article} delay={index * 0.06} />
        ))}
      </section>

      {/* 分页 */}
      {totalPages > 1 && (
        <nav className="mt-10 flex justify-center items-center gap-2" aria-label="分页">
          <button
            type="button"
            disabled={currentPage === 1}
            onClick={() => setSearchParams({ page: String(currentPage - 1) })}
            className="clay-btn px-3 py-2 text-sm t2 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            上一页
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              type="button"
              onClick={() => setSearchParams({ page: String(page) })}
              aria-current={currentPage === page ? 'page' : undefined}
              className={
                currentPage === page
                  ? 'clay-btn px-4 py-2 font-medium bg-gradient-to-r from-primary-400 to-accent-400 text-white'
                  : 'clay-btn px-4 py-2 font-medium t2 hover:text-primary-500'
              }
            >
              {page}
            </button>
          ))}

          <button
            type="button"
            disabled={currentPage === totalPages}
            onClick={() => setSearchParams({ page: String(currentPage + 1) })}
            className="clay-btn px-3 py-2 text-sm t2 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            下一页
          </button>
        </nav>
      )}

      <p className="mt-6 text-center text-xs t4">
        第 {currentPage} / {totalPages} 页 · 想看全部？
        <Link to="/archives" className="text-primary-500 hover:text-primary-600 ml-1">
          按归档浏览
        </Link>
      </p>
    </div>
  )
}
