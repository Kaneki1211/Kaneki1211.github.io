import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import type { GameLink } from '../data/blog'

/**
 * 独立页面（eat.html / tower-defense.html …）的弹窗预览。
 *
 * 这些页面不是 SPA 路由，用 iframe 装进来即可：点卡片不再离开本站，
 * 关掉弹窗就回到列表。iframe 只在打开时才创建，不拖慢首屏。
 * 兜底：标题栏留一个「新标签页打开」，某些页面（全屏游戏、需要独立窗口）在里面更好用。
 */
export default function GameModal({ game, onClose }: { game: GameLink; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement | null>(null)
  const src = `${import.meta.env.BASE_URL}${game.href}`

  useEffect(() => {
    closeRef.current?.focus()
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

  return createPortal(
    <div className="fixed inset-0 z-[80] flex items-center justify-center p-0 sm:p-6">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in" onClick={onClose} />

      <div
        role="dialog"
        aria-modal="true"
        aria-label={game.name}
        className="relative flex flex-col w-full h-full sm:h-[88vh] sm:max-w-[1180px] sm:rounded-clay overflow-hidden
                   bg-white dark:bg-[#0b0f16] shadow-2xl animate-scale-in"
      >
        {/* 标题栏 */}
        <div className="flex items-center gap-3 px-4 py-3 border-b line-soft shrink-0">
          <span className="text-xl leading-none" aria-hidden="true">
            {game.emoji}
          </span>
          <div className="min-w-0 flex-1">
            <div className="font-bold t1 text-sm truncate">{game.name}</div>
            <div className="text-[11px] t4 font-mono truncate">/{game.desc}</div>
          </div>

          <a
            href={src}
            target="_blank"
            rel="noreferrer"
            className="clay-btn px-3 py-1.5 text-xs t2 hover:text-primary-500 shrink-0"
            title="在新标签页打开"
          >
            新标签页
          </a>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            className="clay-btn p-2 t3 hover:text-primary-500 shrink-0"
            aria-label="关闭"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* 内容：独立页面本体 */}
        <iframe
          src={src}
          title={game.name}
          className="flex-1 w-full border-0 bg-white"
          allow="fullscreen; gamepad; autoplay; clipboard-write"
          loading="eager"
        />
      </div>
    </div>,
    document.body,
  )
}
