import { useCallback, useEffect, useState } from 'react'

/** 替代 Nuxt 的 useHead({ title }) */
export function usePageTitle(title: string) {
  useEffect(() => {
    document.title = title
  }, [title])
}

/**
 * localStorage 持久化状态。
 * 源项目的点赞、评论只存在组件内存里，刷新即丢；静态站点没有后端，用本地存储兜底。
 */
export function usePersistentState<T>(key: string, initial: T) {
  const [value, setValue] = useState<T>(() => {
    try {
      const raw = localStorage.getItem(key)
      return raw === null ? initial : (JSON.parse(raw) as T)
    } catch {
      return initial
    }
  })

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch {
      /* 配额或隐私模式，忽略 */
    }
  }, [key, value])

  return [value, setValue] as const
}

/** 中文/空格类路径参数安全解码（React Router 通常已解码，双保险） */
export function safeDecode(value: string | undefined): string {
  if (!value) return ''
  try {
    return decodeURIComponent(value)
  } catch {
    return value
  }
}

/** 生成站内链接用的编码片段 */
export const encodeSlug = (value: string) => encodeURIComponent(value)

/** 阻止键盘/滚动穿透的小工具：滚动到顶部 */
export function useScrollTopOnChange(dep: unknown) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' })
  }, [dep])
}

/** 通用过渡：给列表加延迟动画 */
export const stagger = (index: number, step = 0.06) => ({ animationDelay: `${index * step}s` })

/** 组合 className，过滤 falsy */
export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(' ')
}

export function useDebouncedCallback<T extends (...args: never[]) => void>(fn: T, delay = 200) {
  const [timer, setTimer] = useState<number | null>(null)
  const run = useCallback(
    (...args: Parameters<T>) => {
      if (timer) window.clearTimeout(timer)
      const id = window.setTimeout(() => fn(...args), delay)
      setTimer(id)
    },
    [fn, delay, timer],
  )
  useEffect(() => () => (timer ? window.clearTimeout(timer) : undefined), [timer])
  return run
}
