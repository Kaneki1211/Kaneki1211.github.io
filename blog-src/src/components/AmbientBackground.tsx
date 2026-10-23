import { useEffect, useRef } from 'react'
import { useTheme } from '../context/ui'

/**
 * 全屏背景画布，一套 canvas 两种氛围：
 * - 浅色主题 → 暖色粒子（还原原来 three.js Scene3D 的观感：80 个暖色小点 + 3 团柔光）
 * - 深色主题 → 深空星场（细小星点、各自闪烁、缓慢漂移）
 *
 * 为什么不用 three.js：那份 456KB，只是画圆点和柔光球，2D canvas 足够，
 * 而且能做得更细（3D 版是 2px 大圆点，做不出「一颗一颗的星」）。
 *
 * 注意：canvas / img / video 是 replaced element，`position: fixed; inset: 0`
 * 撑不开它们的宽高，必须显式设置 style.width/height，否则会退回 300×150。
 */

const WARM_COLORS = ['#f17f12', '#f43f5e', '#f59e42', '#fda4af', '#e9bc7e', '#d68733']
const ORBS = [
  { x: 0.2, y: 0.28, r: 0.22, color: '241, 127, 18', alpha: 0.085 },
  { x: 0.78, y: 0.62, r: 0.26, color: '244, 63, 94', alpha: 0.065 },
  { x: 0.45, y: 0.9, r: 0.3, color: '245, 158, 66', alpha: 0.075 },
]

interface Star {
  x: number
  y: number
  r: number
  alpha: number
  twinkle: number
  phase: number
  vx: number
  vy: number
}

interface Mote {
  /** 归一化半径与角度，保证窗口变化时分布不乱 */
  radius: number
  angle: number
  /** 直径（px），柔光斑通常 6-16px */
  size: number
  alpha: number
  sprite: number
  orbit: number
  bob: number
  phase: number
}

const hexToRgba = (hex: string, alpha: number) => {
  const value = hex.replace('#', '')
  const r = parseInt(value.slice(0, 2), 16)
  const g = parseInt(value.slice(2, 4), 16)
  const b = parseInt(value.slice(4, 6), 16)
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

/** 预渲染一张 64×64 的柔光贴图，逐帧 drawImage 比每帧建径向渐变快得多 */
function makeSprite(color: string) {
  const size = 64
  const sprite = document.createElement('canvas')
  sprite.width = size
  sprite.height = size
  const g = sprite.getContext('2d')
  if (g) {
    const gradient = g.createRadialGradient(size / 2, size / 2, 0, size / 2, size / 2, size / 2)
    gradient.addColorStop(0, hexToRgba(color, 0.95))
    gradient.addColorStop(0.35, hexToRgba(color, 0.55))
    gradient.addColorStop(0.7, hexToRgba(color, 0.18))
    gradient.addColorStop(1, hexToRgba(color, 0))
    g.fillStyle = gradient
    g.fillRect(0, 0, size, size)
  }
  return sprite
}

export default function AmbientBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const dpr = Math.min(window.devicePixelRatio || 1, 2)
    const space = theme === 'dark'

    let width = 0
    let height = 0
    let stars: Star[] = []
    let motes: Mote[] = []
    let raf = 0
    let last = 0

    // 浅色模式预渲染柔光贴图；深色模式用不到
    const sprites = space ? [] : WARM_COLORS.map(makeSprite)

    const resize = () => {
      width = window.innerWidth
      height = window.innerHeight
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      canvas.width = Math.round(width * dpr)
      canvas.height = Math.round(height * dpr)
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)

      if (space) {
        const count = Math.round(Math.min(460, Math.max(120, (width * height) / 5600)))
        stars = Array.from({ length: count }, () => {
          const bright = Math.random() > 0.965
          return {
            x: Math.random() * width,
            y: Math.random() * height,
            r: bright ? 1.05 + Math.random() * 0.55 : 0.25 + Math.random() * 0.7,
            alpha: bright ? 0.85 + Math.random() * 0.15 : 0.3 + Math.random() * 0.55,
            twinkle: 0.5 + Math.random() * 1.5,
            phase: Math.random() * Math.PI * 2,
            vx: (Math.random() - 0.5) * 2.4,
            vy: (Math.random() - 0.5) * 2.4,
          }
        })
      } else {
        motes = Array.from({ length: 80 }, () => ({
          radius: 0.12 + Math.random() * 0.78,
          angle: Math.random() * Math.PI * 2,
          size: 6 + Math.random() * 12,
          alpha: 0.45 + Math.random() * 0.35,
          sprite: Math.floor(Math.random() * WARM_COLORS.length),
          orbit: 0.012 + Math.random() * 0.03,
          bob: 6 + Math.random() * 16,
          phase: Math.random() * Math.PI * 2,
        }))
      }
    }

    const paintWarm = (seconds: number) => {
      ctx.clearRect(0, 0, width, height)
      const min = Math.min(width, height)

      // 三团柔光（对应原来 three.js 的发光球体）
      ORBS.forEach((orb, i) => {
        const cx = orb.x * width
        const cy = orb.y * height + Math.sin(seconds * 0.5 + i * 2) * 26
        const r = orb.r * min
        const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, r)
        gradient.addColorStop(0, `rgba(${orb.color}, ${orb.alpha})`)
        gradient.addColorStop(0.55, `rgba(${orb.color}, ${orb.alpha * 0.35})`)
        gradient.addColorStop(1, `rgba(${orb.color}, 0)`)
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(cx, cy, r, 0, Math.PI * 2)
        ctx.fill()
      })

      // 暖色光斑：加色混合，还原 three 里 AdditiveBlending 的景深虚化感
      ctx.globalCompositeOperation = 'lighter'
      for (const mote of motes) {
        const angle = mote.angle + (reduced ? 0 : seconds * mote.orbit)
        const rx = mote.radius * width * 0.55
        const ry = mote.radius * height * 0.5
        const x = width / 2 + Math.cos(angle) * rx
        const y = height / 2 + Math.sin(angle) * ry + Math.sin(seconds * 0.6 + mote.phase) * mote.bob
        const half = mote.size / 2
        ctx.globalAlpha = mote.alpha
        ctx.drawImage(sprites[mote.sprite], x - half, y - half, mote.size, mote.size)
      }
      ctx.globalAlpha = 1
      ctx.globalCompositeOperation = 'source-over'
    }

    const paintSpace = (seconds: number) => {
      ctx.clearRect(0, 0, width, height)
      for (const star of stars) {
        const flicker = reduced ? 1 : 0.55 + 0.45 * Math.sin(seconds * star.twinkle + star.phase)
        const alpha = Math.min(1, star.alpha * flicker)
        ctx.beginPath()
        ctx.fillStyle = `rgba(228, 237, 255, ${alpha.toFixed(3)})`
        ctx.arc(star.x, star.y, star.r, 0, Math.PI * 2)
        ctx.fill()

        if (star.r > 1) {
          ctx.beginPath()
          ctx.fillStyle = `rgba(176, 202, 255, ${(alpha * 0.1).toFixed(3)})`
          ctx.arc(star.x, star.y, star.r * 3.4, 0, Math.PI * 2)
          ctx.fill()
        }
      }
    }

    const loop = (now: number) => {
      const dt = last ? Math.min(0.05, (now - last) / 1000) : 0
      last = now
      const seconds = now / 1000

      if (space) {
        for (const star of stars) {
          star.x += star.vx * dt
          star.y += star.vy * dt
          if (star.x < -3) star.x = width + 3
          if (star.x > width + 3) star.x = -3
          if (star.y < -3) star.y = height + 3
          if (star.y > height + 3) star.y = -3
        }
        paintSpace(seconds)
      } else {
        paintWarm(seconds)
      }

      raf = requestAnimationFrame(loop)
    }

    resize()
    window.addEventListener('resize', resize)

    if (reduced) {
      // 静止帧：不做动画，但保留氛围
      if (space) paintSpace(0)
      else paintWarm(0)
    } else {
      raf = requestAnimationFrame(loop)
    }

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      ctx.clearRect(0, 0, canvas.width, canvas.height)
    }
  }, [theme])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 w-full h-full pointer-events-none"
    />
  )
}
