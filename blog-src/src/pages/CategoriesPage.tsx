import { Link } from 'react-router-dom'
import { categories } from '../data/blog'
import { encodeSlug, usePageTitle } from '../lib/hooks'

export default function CategoriesPage() {
  usePageTitle('分类 - 我的博客')

  return (
    <div className="animate-fade-in">
      <div className="clay-card p-8 mb-8 text-center">
        <h1 className="text-3xl font-bold t1 mb-2">分类</h1>
        <p className="t3">共 {categories.length} 个分类</p>
      </div>

      <div className="space-y-6">
        {categories.map((cat) => (
          <section key={cat.name} className="clay-card p-6">
            <div className="flex items-center gap-3 mb-4">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${cat.tint}`}>
                <svg className={`w-5 h-5 ${cat.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                  />
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-bold t1">
                  <Link to={`/categories/${encodeSlug(cat.name)}`} className="hover:text-primary-500 transition-colors">
                    {cat.name}
                  </Link>
                </h2>
                <span className="text-sm t4">{cat.count} 篇文章</span>
              </div>
            </div>

            <div className="space-y-1 pl-4 border-l-2 line-soft">
              {cat.articles.map((article) => (
                <Link key={article.slug} to={`/posts/${article.slug}`} className="flex items-baseline gap-3 py-1.5 group">
                  <span className="text-xs t4 tabular-nums shrink-0">{article.date}</span>
                  <span className="t2 group-hover:text-primary-500 transition-colors">{article.title}</span>
                </Link>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
