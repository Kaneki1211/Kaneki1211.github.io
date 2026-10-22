import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { Link, useLocation } from 'react-router-dom'
import { useDrawer } from '../context/ui'
import { NAV_ITEMS } from '../lib/nav'
import { cx } from '../lib/hooks'
import {
  Announcement,
  ArchivesWidget,
  AuthorCard,
  CategoryList,
  GamesAndTools,
  LatestArticles,
  LikeWidget,
  NavLinks,
  SiteInfo,
  TagCloud,
} from './SidebarWidgets'

/* 每个导航项配一个图标，纯装饰，尺寸固定 18px */
const NAV_ICONS: Record<string, ReactNode> = {
  '/': (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M3 12l9-8 9 8M5 10v10a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V10"
    />
  ),
  '/archives': (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
    />
  ),
  '/categories': (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
    />
  ),
  '/tags': (
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
  ),
  '/games': (
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 11h4m-2-2v4m7-1h.01M18 10h.01M7 6h10a4 4 0 014 4v4a4 4 0 01-4 4c-1.2 0-2-.8-2.6-1.6l-.7-1a2 2 0 00-3.4 0l-.7 1C9 17.2 8.2 18 7 18a4 4 0 01-4-4v-4a4 4 0 014-4z"
    />
  ),
}

/** 抽屉内的主导航：<md 断点下顶部那排导航是隐藏的，这里是移动端唯一入口 */
// function DrawerNav() {
//   const { closeDrawer } = useDrawer()
//   const { pathname } = useLocation()

//   return (
//     <nav className="clay-card p-2" aria-label="站点导航">
//       {NAV_ITEMS.map((item) => {
//         const active = item.path === '/' ? pathname === '/' : pathname.startsWith(item.path)
//         return (
//           <Link
//             key={item.path}
//             to={item.path}
//             onClick={closeDrawer}
//             aria-current={active ? 'page' : undefined}
//             className={cx(
//               'flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors',
//               active
//                 ? 'bg-primary-50 dark:bg-white/[0.06] text-primary-500'
//                 : 't2 hover:text-primary-500 hover:bg-primary-50/60 dark:hover:bg-white/[0.04]',
//             )}
//           >
//             <svg
//               className={cx('w-[18px] h-[18px] shrink-0', active ? 'text-primary-500' : 't4')}
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               {NAV_ICONS[item.path]}
//             </svg>
//             {item.label}
//             <svg
//               className="w-4 h-4 ml-auto opacity-30"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               aria-hidden="true"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
//             </svg>
//           </Link>
//         )
//       })}
//     </nav>
//   )
// }

export default function MobileDrawer() {
  const { open, closeDrawer } = useDrawer()
  const { pathname } = useLocation()

  // 路由变化时自动收起，避免点完链接抽屉还挂着
  useEffect(() => {
    closeDrawer()
  }, [pathname])

  if (!open) return null

  return createPortal(
    <div className="fixed inset-0 z-[60] lg:hidden">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm animate-fade-in" onClick={closeDrawer} />

      <div className="absolute left-0 top-0 bottom-0 w-[300px] max-w-[85vw] overflow-y-auto animate-drawer-in bg-warm-50 dark:bg-[#191410] shadow-2xl">
        <div className="p-5 space-y-5 relative">
          <button
            type="button"
            onClick={closeDrawer}
            className="absolute top-4 right-4 clay-btn p-2 t3"
            aria-label="关闭菜单"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="pt-8 space-y-5">
            <AuthorCard />
            <NavLinks />
            <Announcement />
            <LikeWidget />
            <GamesAndTools />
            <LatestArticles />
            <CategoryList />
            <TagCloud />
            <ArchivesWidget />
            <SiteInfo />
          </div>
        </div>
      </div>
    </div>,
    document.body,
  )
}
