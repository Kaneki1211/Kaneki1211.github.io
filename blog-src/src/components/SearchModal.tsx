import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { searchArticles } from '../data/blog'

export default function SearchModal({ onClose }: { onClose: () => void }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const navigate = useNavigate()

  const results = useMemo(() => searchArticles(query).slice(0, 8), [query])

  // 打开即聚焦 + ESC 关闭 + 锁滚动（替代原项目里 Teleport + 手写 keydown）
  useEffect(() => {
    inputRef.current?.focus()
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = original
      window.removeEventListener('keydown', onKey)
    }
  }, [onClose])

  const go = (slug: string) => {
    onClose()
    navigate(`/posts/${slug}`)
  }

  return createPortal(
    <div className="fixed inset-0 z-[70] flex items-start justify-center pt-[12vh] px-4">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-label="搜索文章"
        className="relative w-full max-w-2xl clay-card p-6 animate-scale-in"
      >
        <div className="flex items-center gap-3 mb-4">
          <svg className="w-5 h-5 text-primary-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && results[0]) go(results[0].slug)
            }}
            type="text"
            placeholder="搜索文章标题、分类、标签…"
            className="clay-input flex-1 px-4 py-3 text-base"
          />
          <button type="button" onClick={onClose} className="text-xs t4 hover:t2 shrink-0 px-2 py-1">
            ESC
          </button>
        </div>

        <div className="max-h-[52vh] overflow-y-auto space-y-2">
          {query.trim() === '' && <div className="py-8 text-center text-sm t4">输入关键词搜索文章</div>}
          {query.trim() !== '' && results.length === 0 && (
            <div className="py-8 text-center text-sm t4">没有找到相关文章，换个关键词试试</div>
          )}
          {results.map((item) => (
            <button
              key={item.slug}
              type="button"
              onClick={() => go(item.slug)}
              className="w-full text-left p-4 rounded-2xl hover:bg-primary-50/60 dark:hover:bg-white/5 transition-colors group"
            >
              <h4 className="font-medium t1 group-hover:text-primary-500 transition-colors">{item.title}</h4>
              <p className="text-sm t3 mt-1 line-clamp-2">{item.excerpt}</p>
              <div className="flex items-center gap-2 mt-2">
                <span className="clay-tag text-primary-500">{item.category}</span>
                <span className="text-xs t4">{item.date}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-3 pt-3 border-t line-soft flex items-center justify-between text-[11px] t4">
          <span>共 {searchArticles(query).length} 条结果</span>
          <span>Enter 打开首条 · Esc 关闭</span>
        </div>
      </div>
    </div>,
    document.body,
  )
}
