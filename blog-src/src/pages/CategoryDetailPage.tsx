import { Link, useParams } from 'react-router-dom'
import { getCategory } from '../data/blog'
import { safeDecode, usePageTitle } from '../lib/hooks'

export default function CategoryDetailPage() {
  const { name } = useParams()
  // 分类名是中文，URL 里是百分号编码；React Router 一般已解码，这里再兜一层
  const categoryName = safeDecode(name)
  const category = getCategory(categoryName)

  usePageTitle(`分类：${categoryName || '未知'} - Kaneki Blog`)

  return (
    <div className="animate-fade-in">
      <div className="clay-card p-8 mb-8 text-center">
        <h1 className="text-3xl font-bold t1 mb-2">分类：{category?.name ?? categoryName}</h1>
        <p className="t3">{category?.count ?? 0} 篇文章</p>
        <Link to="/categories" className="inline-flex items-center gap-1 text-primary-500 hover:text-primary-600 mt-3 text-sm">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          返回全部分类
        </Link>
      </div>

      {category ? (
        <div className="space-y-3">
          {category.articles.map((article, index) => (
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
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <p className="t3">未找到分类「{categoryName}」</p>
          <Link to="/categories" className="text-primary-500 hover:text-primary-600 mt-2 inline-block">
            查看全部分类
          </Link>
        </div>
      )}
    </div>
  )
}
