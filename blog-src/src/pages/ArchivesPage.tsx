import { Link } from 'react-router-dom'
import { archives, siteStats } from '../data/blog'
import { usePageTitle } from '../lib/hooks'

export default function ArchivesPage() {
  usePageTitle('归档 - Kaneki Blog')

  return (
    <div className="animate-fade-in">
      <div className="clay-card p-8 mb-8 text-center">
        <h1 className="text-3xl font-bold t1 mb-2">归档</h1>
        <p className="t3">
          共 {siteStats.articles} 篇文章 · 跨 {archives.length} 个年份
        </p>
      </div>

      <div className="space-y-8">
        {archives.map((year) => (
          <section key={year.year}>
            <h2 className="text-2xl font-bold text-primary-500 mb-4 flex items-center gap-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <Link to={`/archives/${year.year}`} className="hover:opacity-80 transition-opacity">
                {year.year}
              </Link>
              <span className="text-sm t4 font-normal">{year.count} 篇</span>
            </h2>

            {year.months.map((month) => (
              <div key={month.key} className="mb-6">
                <h3 className="text-lg font-semibold t1 mb-3 pl-4 border-l-2 border-primary-300">
                  <Link to={`/archives/${month.key}`} className="hover:text-primary-500 transition-colors">
                    {month.month}月
                  </Link>
                  <span className="text-sm t4 font-normal ml-2">{month.articles.length} 篇</span>
                </h3>

                <div className="space-y-1 pl-6">
                  {month.articles.map((article) => (
                    <Link
                      key={article.slug}
                      to={`/posts/${article.slug}`}
                      className="flex items-baseline gap-4 py-1.5 group"
                    >
                      <span className="text-sm t4 shrink-0 tabular-nums">{article.date.slice(5)}</span>
                      <span className="t2 group-hover:text-primary-500 transition-colors">{article.title}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </section>
        ))}
      </div>
    </div>
  )
}
