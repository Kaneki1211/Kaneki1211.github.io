import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import MobileDrawer from './MobileDrawer'
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

// 全屏背景：浅色 = 暖色粒子，深色 = 深空星场（都是 canvas 2D，无第三方依赖）
import AmbientBackground from './AmbientBackground'

export default function Layout() {
  const { pathname } = useLocation()

  // 替代 Nuxt 的 page transition 滚动复位
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return (
    <div className="min-h-screen relative">
      <AmbientBackground />

      <Navbar />

      <div className="max-w-[1400px] mx-auto px-4 pt-24 pb-12">
        <div className="flex gap-8">
          {/* 左侧栏 */}
          <aside className="hidden lg:block w-[280px] shrink-0">
            <div className="sticky top-24 space-y-6">
              <AuthorCard />
              <NavLinks />
              <Announcement />
              <LikeWidget />
              <LatestArticles />
            </div>
          </aside>

          {/* 主内容区 */}
          <main className="flex-1 min-w-0">
            <Outlet />
          </main>

          {/* 右侧栏 */}
          <aside className="hidden xl:block w-[280px] shrink-0">
            <div className="sticky top-24 space-y-6">
              <CategoryList />
              <TagCloud />
              <ArchivesWidget />
              <SiteInfo />
            </div>
          </aside>
        </div>
      </div>

      <MobileDrawer />
      <Footer />
    </div>
  )
}
