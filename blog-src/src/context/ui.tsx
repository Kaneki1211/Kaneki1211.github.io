import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'

/* ------------------------------------------------------------------ 主题 */
/**
 * 替代 @nuxtjs/color-mode。
 * 主题值在 index.html 的内联脚本里已经写到 <html data-theme>，这里只做同步与持久化。
 */
type Theme = 'light' | 'dark'
const THEME_KEY = 'blog-theme'

interface ThemeValue {
  theme: Theme
  toggle: () => void
}

const ThemeContext = createContext<ThemeValue>({ theme: 'light', toggle: () => {} })

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof document === 'undefined') return 'light'
    return document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light'
  })

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch {
      /* 隐私模式下 localStorage 可能不可写，忽略 */
    }
  }, [theme])

  const toggle = useCallback(() => setTheme((t) => (t === 'dark' ? 'light' : 'dark')), [])
  const value = useMemo(() => ({ theme, toggle }), [theme, toggle])

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

/* ------------------------------------------------------------------ 移动端抽屉 */
/**
 * 替代 Nuxt 的 useState('mobile-drawer')：导航栏按钮开、抽屉组件关，需要共享状态。
 */
interface DrawerValue {
  open: boolean
  openDrawer: () => void
  closeDrawer: () => void
}

const DrawerContext = createContext<DrawerValue>({
  open: false,
  openDrawer: () => {},
  closeDrawer: () => {},
})

export function DrawerProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  // 抽屉打开时锁滚动 + ESC 关闭
  useEffect(() => {
    if (!open) return
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = original
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const value = useMemo(
    () => ({ open, openDrawer: () => setOpen(true), closeDrawer: () => setOpen(false) }),
    [open],
  )

  return <DrawerContext.Provider value={value}>{children}</DrawerContext.Provider>
}

export const useDrawer = () => useContext(DrawerContext)
