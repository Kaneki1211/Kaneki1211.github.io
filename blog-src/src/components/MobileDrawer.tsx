import { createPortal } from 'react-dom'
import { useDrawer } from '../context/ui'
import {
  Announcement,
  ArchivesWidget,
  AuthorCard,
  CategoryList,
  LatestArticles,
  LikeWidget,
  NavLinks,
  SiteInfo,
  TagCloud,
} from './SidebarWidgets'

export default function MobileDrawer() {
  const { open, closeDrawer } = useDrawer()

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
