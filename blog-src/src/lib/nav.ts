export interface NavItem {
  label: string
  path: string
}

/** 顶部导航与移动端抽屉共用，避免两处链接表各写一份后漂移 */
export const NAV_ITEMS: NavItem[] = [
  { label: '首页', path: '/' },
  { label: '归档', path: '/archives' },
  { label: '分类', path: '/categories' },
  { label: '标签', path: '/tags' },
  { label: '游戏', path: '/games' },
]
