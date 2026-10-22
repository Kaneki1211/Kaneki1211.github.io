import { games } from '../data/blog'
import { usePageTitle } from '../lib/hooks'

/**
 * 站点入口页：仓库根目录里的独立页面（干饭盲盒 / 塔防 / 请柬 …）都不是 SPA 路由，
 * 用普通 <a> 打开，走整页加载，避免被 Router 拦截后 404。
 */
export default function GamesPage() {
  usePageTitle('游戏与工具 - 我的博客')

  return (
    <div className="animate-fade-in">
      <div className="clay-card p-8 mb-8 text-center">
        <h1 className="text-3xl font-bold t1 mb-2">游戏与工具</h1>
        <p className="t3">这个站点上还藏着这些东西，直接点进去玩</p>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        {games.map((game, index) => (
          <a
            key={game.href}
            href={`${import.meta.env.BASE_URL}${game.href}`}
            className="clay-card is-interactive p-6 flex items-start gap-4 group animate-slide-up"
            style={{ animationDelay: `${index * 0.05}s` }}
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
              <span className="block text-xs t4 mt-2 font-mono truncate">/{game.href}</span>
            </span>
            <svg
              className="w-4 h-4 t4 shrink-0 mt-1 group-hover:translate-x-1 transition-transform"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </a>
        ))}
      </div>
    </div>
  )
}
