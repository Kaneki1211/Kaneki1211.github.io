import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import CommentSection from '../components/CommentSection'
import { getArticle, getRelated, getSiblings, readTime, siteStats, wordCount } from '../data/blog'
import { encodeSlug } from '../lib/hooks'
import { usePageTitle } from '../lib/hooks'

export default function PostPage() {
  const { slug = '' } = useParams()
  const article = getArticle(slug)
  const { prev, next } = getSiblings(slug)
  const related = getRelated(slug, 4)

  const [currentUrl, setCurrentUrl] = useState('')

  usePageTitle(article ? `${article.title} - Kaneki Blog` : '文章不存在 - Kaneki Blog')

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [slug])

  if (!article) {
    return (
      <div className="clay-card p-12 text-center animate-fade-in">
        <p className="text-lg t1 font-bold mb-2">这篇文章不在了</p>
        <p className="text-sm t3 mb-4">链接可能是旧的，或者文章被合并到了别处。</p>
        <Link to="/archives" className="text-primary-500 hover:text-primary-600 text-sm">
          去归档里找找 →
        </Link>
      </div>
    )
  }

  return (
    <article className="animate-fade-in">
      {/* 头部 */}
      <header className="clay-card overflow-hidden mb-8">
        {article.cover && (
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img src={article.cover} alt={article.title} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
          </div>
        )}

        <div className="p-6 md:p-8">
          <h1 className="text-2xl md:text-3xl font-bold t1 mb-4 leading-snug">{article.title}</h1>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm t3">
            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              发表于 {article.date}
              {article.time ? ` ${article.time}` : ''}
            </span>

            {article.updateDate && (
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                更新于 {article.updateDate}
              </span>
            )}

            <Link
              to={`/categories/${encodeSlug(article.category)}`}
              className="flex items-center gap-1 text-primary-500 hover:text-primary-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
              {article.category}
            </Link>

            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              总字数 {wordCount(article)}
            </span>

            <span className="flex items-center gap-1">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              阅读时长 {readTime(article)}
            </span>
          </div>
        </div>
      </header>

      {/* 正文 */}
      <div className="clay-card p-6 md:p-10 mb-8">
        <div className="prose-warm max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
      </div>

      {/* 标签 */}
      {article.tags.length > 0 && (
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <svg className="w-5 h-5 text-primary-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
          </svg>
          {article.tags.map((tag) => (
            <Link key={tag} to={`/tags/${encodeSlug(tag)}`} className="clay-tag text-primary-500 hover:text-primary-600">
              {tag}
            </Link>
          ))}
        </div>
      )}

      {/* 作者 / 链接 */}
      <div className="clay-card p-6 mb-8 flex items-center gap-4">
        <img
          src={`${import.meta.env.BASE_URL}images/kaneki.jpg`}
          alt="作者头像"
          className="w-14 h-14 rounded-full object-cover ring-2 ring-primary-100"
        />
        <div className="min-w-0">
          <div className="font-bold t1">文章作者：Kaneki</div>
          <div className="text-sm t3 break-all">
            文章链接：
            <a href={currentUrl || '#'} className="text-primary-500 hover:underline">
              {currentUrl || '...'}
            </a>
          </div>
          <div className="text-xs t4 mt-1">
            本站共 {siteStats.articles} 篇 · 最后更新 {siteStats.lastUpdated}
          </div>
        </div>
      </div>

      {/* 上下篇（真正按时间顺序，源项目里是写死的） */}
      <div className="grid md:grid-cols-2 gap-4 mb-8">
        {prev ? (
          <Link to={`/posts/${prev.slug}`} className="clay-card is-interactive p-5 group">
            <div className="text-xs t4 mb-1">上一篇</div>
            <div className="font-medium t2 group-hover:text-primary-500 transition-colors line-clamp-1">{prev.title}</div>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}

        {next ? (
          <Link to={`/posts/${next.slug}`} className="clay-card is-interactive p-5 group md:text-right">
            <div className="text-xs t4 mb-1">下一篇</div>
            <div className="font-medium t2 group-hover:text-primary-500 transition-colors line-clamp-1">{next.title}</div>
          </Link>
        ) : (
          <div className="hidden md:block" />
        )}
      </div>

      {/* 相关推荐 */}
      {related.length > 0 && (
        <div className="mb-8">
          <h3 className="text-xl font-bold t1 mb-4">相关推荐</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {related.map((item) => (
              <Link key={item.slug} to={`/posts/${item.slug}`} className="clay-card is-interactive p-4 group">
                <div className="text-xs t4 mb-1">{item.date}</div>
                <div className="font-medium t2 group-hover:text-primary-500 transition-colors line-clamp-1">{item.title}</div>
                <p className="text-sm t3 mt-1 line-clamp-2">{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      )}

      <CommentSection slug={article.slug} />
    </article>
  )
}
