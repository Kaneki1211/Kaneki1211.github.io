import { Link, useParams } from 'react-router-dom'
import { getArchive } from '../data/blog'
import { usePageTitle } from '../lib/hooks'

/**
 * 归档详情（/archives/2026 或 /archives/2026-05）。
 * 源项目这里有个必现 bug：取值写成了 archiveData["year"]（字符串字面量），
 * 永远返回 undefined → 页面恒显示「该时间段暂无文章」。这里已改为按参数取。
 */
export default function ArchiveDetailPage() {
  const { key = '' } = useParams()
  const result = getArchive(key)

  usePageTitle(result ? `归档：${result.title} - 我的博客` : '归档不存在 - 我的博客')

  if (!result) {
    return (
      <div className="clay-card p-12 text-center animate-fade-in">
        <p className="text-lg t1 font-bold mb-2">归档格式不对</p>
        <p className="text-sm t3 mb-4">试试 /archives/2026 或 /archives/2026-05 这样的地址。</p>
        <Link to="/archives" className="text-primary-500 hover:text-primary-600 text-sm">
          返回全部归档 →
        </Link>
      </div>
    )
  }

  return (
    <div className="animate-fade-in">
      <div className="clay-card p-8 mb-8 text-center">
        <h1 className="text-3xl font-bold t1 mb-2">归档：{result.title}</h1>
        <p className="t3">{result.articles.length} 篇文章</p>
        <Link to="/archives" className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 mt-3 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回全部归档
        </Link>
      </div>

      {result.articles.length > 0 ? (
        <div className="space-y-3">
          {result.articles.map((article, index) => (
            <Link
              key={article.slug}
              to={`/posts/${article.slug}`}
              className="clay-card is-interactive p-5 flex items-center gap-4 group animate-slide-up"
              style={{ animationDelay: `${index * 0.04}s` }}
            >
              <span className="text-sm t4 shrink-0 tabular-nums">{article.date}</span>
              <span className="t2 group-hover:text-primary-500 transition-colors font-medium">{article.title}</span>
            </Link>
          ))}
        </div>
      ) : (
        <div className="clay-card p-12 text-center">
          <p className="t3">该时间段暂无文章</p>
          <Link to="/archives" className="text-primary-500 hover:text-primary-600 mt-2 inline-block">
            查看全部归档
          </Link>
        </div>
      )}
    </div>
  )
}
