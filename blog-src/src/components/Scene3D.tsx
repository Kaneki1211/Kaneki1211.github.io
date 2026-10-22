import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { useTheme } from '../context/ui'

const WARM_COLORS = ['#f17f12', '#f43f5e', '#f59e42', '#fda4af', '#e9bc7e', '#d68733']

/**
 * 3D 粒子背景。
 * 相对原 Nuxt 版本的改动：生命周期挂在 useEffect 的 cleanup 上（React 严格模式下会
 * 挂载-卸载-再挂载一次，必须能被正确回收），并且粒子透明度跟随主题变化。
 */
export default function Scene3D() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const materialRef = useRef<THREE.PointsMaterial | null>(null)
  const sphereMatsRef = useRef<THREE.MeshBasicMaterial[]>([])
  const { theme } = useTheme()

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let renderer: THREE.WebGLRenderer
    try {
      renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' })
    } catch {
      return // 无 WebGL 时保留 CSS 光斑背景，不报错
    }

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    camera.position.z = 50

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    container.appendChild(renderer.domElement)

    // 粒子系统
    const count = 80
    const geometry = new THREE.BufferGeometry()
    const positions = new Float32Array(count * 3)
    const colors = new Float32Array(count * 3)

    for (let i = 0; i < count; i += 1) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 100
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50

      const color = new THREE.Color(WARM_COLORS[Math.floor(Math.random() * WARM_COLORS.length)])
      colors[i * 3] = color.r
      colors[i * 3 + 1] = color.g
      colors[i * 3 + 2] = color.b
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 2,
      vertexColors: true,
      transparent: true,
      opacity: 0.4,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
      depthWrite: false,
    })
    materialRef.current = material

    const particles = new THREE.Points(geometry, material)
    scene.add(particles)

    // 装饰光球
    const sphereGeometry = new THREE.SphereGeometry(3, 24, 24)
    const sphereConfig = [
      { x: -30, y: 20, z: -20, color: '#f17f12', opacity: 0.08 },
      { x: 25, y: -15, z: -15, color: '#f43f5e', opacity: 0.06 },
      { x: -10, y: -25, z: -25, color: '#f59e42', opacity: 0.07 },
    ]
    const spheres = sphereConfig.map((cfg) => {
      const mat = new THREE.MeshBasicMaterial({
        color: new THREE.Color(cfg.color),
        transparent: true,
        opacity: cfg.opacity,
        depthWrite: false,
      })
      const mesh = new THREE.Mesh(sphereGeometry, mat)
      mesh.position.set(cfg.x, cfg.y, cfg.z)
      scene.add(mesh)
      return { mesh, mat, baseY: cfg.y, baseOpacity: cfg.opacity }
    })
    sphereMatsRef.current = spheres.map((s) => s.mat)

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const clock = new THREE.Clock()
    let frameId = 0

    const render = () => {
      const elapsed = clock.getElapsedTime()
      particles.rotation.y = elapsed * 0.05
      particles.rotation.x = Math.sin(elapsed * 0.03) * 0.1
      spheres.forEach((s, i) => {
        s.mesh.position.y = s.baseY + Math.sin(elapsed * 0.5 + i * 2) * 5
      })
      renderer.render(scene, camera)
    }

    const loop = () => {
      frameId = requestAnimationFrame(loop)
      render()
    }

    if (reduced) {
      renderer.render(scene, camera)
    } else {
      loop()
    }

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      if (reduced) renderer.render(scene, camera)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', onResize)
      geometry.dispose()
      material.dispose()
      sphereGeometry.dispose()
      spheres.forEach((s) => s.mat.dispose())
      renderer.dispose()
      materialRef.current = null
      sphereMatsRef.current = []
      if (renderer.domElement.parentNode === container) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  // 主题变化时调整粒子可见度（深色背景下需要更亮一点）
  useEffect(() => {
    if (materialRef.current) {
      materialRef.current.opacity = theme === 'dark' ? 0.55 : 0.4
    }
    sphereMatsRef.current.forEach((mat, i) => {
      const base = [0.08, 0.06, 0.07][i] ?? 0.07
      mat.opacity = theme === 'dark' ? base * 1.8 : base
    })
  }, [theme])

  return <div ref={containerRef} className="fixed inset-0 -z-10 pointer-events-none" aria-hidden="true" />
}
