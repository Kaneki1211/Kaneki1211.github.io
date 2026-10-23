import { useState } from 'react'
import { games, type GameLink } from '../data/blog'
import { usePageTitle } from '../lib/hooks'
import GameModal from '../components/GameModal'

/**
 * 站点入口页：仓库根目录里的独立页面（干饭盲盒 / 塔防 / 请柬 …）都不是 SPA 路由。
 * 点卡片用弹窗内的 iframe 预览，不离开本站；弹窗里另有「新标签页」兜底。
 */
export default function GamesPage() {
  usePageTitle('游戏与工具 - Kaneki Blog')

  const [active, setActive] = useState<GameLink | null>(null)

  return (
    <div className="animate-fade-in">
      <div className="clay-card p-8 mb-8 text-center">
        <h1 className="text-3xl font-bold t1 mb-2">游戏与工具</h1>
        <p className="t3">这个站点上还藏着这些东西，点卡片直接在这里打开</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {games.map((game, index) => (
          <button
            key={game.href}
            type="button"
            onClick={() => setActive(game)}
            className="clay-card is-interactive p-6 flex items-start gap-4 group animate-slide-up text-left w-full
                       cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-300"
            style={{ animationDelay: `${index * 0.05}s` }}
            aria-haspopup="dialog"
          >
            <span className="text-3xl leading-none" aria-hidden="true">
              {game.emoji}
            </span>
            <span className="min-w-0 flex-1">
              <span className="flex items-center gap-2 mb-1">
                <span className="font-bold t1 group-hover:text-primary-500 transition-colors">{game.name}</span>
                <span className="clay-tag text-[11px] text-primary-500">{game.tag}</span>
              </span>
              <span className="block text-sm t3">{game.desc}</span>
            </span>
            <svg
              className="w-4 h-4 t4 shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        ))}
      </div>

      <p className="mt-6 text-center text-xs t4">
        弹窗里是用 iframe 打开的独立页面，按 ESC 或点空白处关闭
      </p>

      {active && <GameModal game={active} onClose={() => setActive(null)} />}
    </div>
  )
}
