import { Link, useParams } from 'react-router-dom'
import { articlesByTag, getTag } from '../data/blog'
import { safeDecode, usePageTitle } from '../lib/hooks'

export default function TagDetailPage() {
  const { name } = useParams()
  const tagName = safeDecode(name)
  const tag = getTag(tagName)
  const matched = articlesByTag(tagName)

  usePageTitle(`标签：${tagName || '未知'} - Kaneki Blog`)

  return (
    <div className="animate-fade-in">
      <div className="clay-card p-8 mb-8 text-center">
        <h1 className="text-3xl font-bold t1 mb-2">标签：{tagName}</h1>
        <p className="t3">{matched.length} 篇文章</p>
        <Link to="/tags" className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 mt-3 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回全部标签
        </Link>
      </div>

      {matched.length > 0 ? (
        <div className="space-y-3">
          {matched.map((article, index) => (
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
          <svg className="w-16 h-16 t4 mx-auto mb-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
            />
          </svg>
          <p className="t3">
            未找到标签「{tagName}」{tag ? '' : '相关的文章'}
          </p>
          <Link to="/tags" className="text-primary-500 hover:text-primary-600 mt-2 inline-block">
            查看全部标签
          </Link>
        </div>
      )}
    </div>
  )
}
