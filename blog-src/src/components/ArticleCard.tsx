import { Link } from 'react-router-dom'
import { readTime, type Article } from '../data/blog'
import { encodeSlug } from '../lib/hooks'

export default function ArticleCard({ article, delay = 0 }: { article: Article; delay?: number }) {
  const postPath = `/posts/${article.slug}`
  const categoryPath = `/categories/${encodeSlug(article.category)}`

  return (
    <article className="clay-card is-interactive overflow-hidden group animate-slide-up" style={{ animationDelay: `${delay}s` }}>
      {article.cover && (
        <div className="relative overflow-hidden h-52">
          <img
            src={article.cover}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute top-4 left-4">
            <Link
              to={categoryPath}
              className="clay-tag text-primary-600 hover:text-primary-700"
              onClick={(e) => e.stopPropagation()}
            >
              {article.category}
            </Link>
          </div>
        </div>
      )}

      <div className="p-6">
        {!article.cover && (
          <div className="mb-3">
            <Link to={categoryPath} className="clay-tag text-primary-600 hover:text-primary-700">
              {article.category}
            </Link>
          </div>
        )}

        <Link to={postPath} className="block">
          <h2 className="text-xl font-bold t1 group-hover:text-primary-500 transition-colors line-clamp-2 mb-3">
            {article.title}
          </h2>
        </Link>

        <p className="t3 text-sm leading-relaxed line-clamp-3 mb-4">{article.excerpt}</p>

        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-3 text-xs t4">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              {article.date}
            </span>
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              {readTime(article)}
            </span>
          </div>

          <Link
            to={postPath}
            className="text-primary-500 text-sm font-medium hover:text-primary-600 transition-colors flex items-center gap-1 shrink-0"
          >
            阅读全文
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </article>
  )
}
