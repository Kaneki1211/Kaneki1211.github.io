import type { Config } from 'tailwindcss'

export default {
  // 暖色调配色方案
  theme: {
    extend: {
      colors: {
        // 主色调 - 温暖的橙棕色系
        primary: {
          50: '#fef7ed',
          100: '#fdedd5',
          200: '#fbd7ab',
          300: '#f8b96f',
          400: '#f59e42',
          500: '#f17f12',
          600: '#e26408',
          700: '#bc4a09',
          800: '#963b0f',
          900: '#793210',
          950: '#411706',
        },
        // 辅助色 - 温暖的玫瑰色系
        accent: {
          50: '#fff1f2',
          100: '#ffe4e6',
          200: '#fecdd3',
          300: '#fda4af',
          400: '#fb7185',
          500: '#f43f5e',
          600: '#e11d48',
          700: '#be123c',
          800: '#9f1239',
          900: '#881337',
          950: '#4c0519',
        },
        // 背景色 - 温暖的米色系
        warm: {
          50: '#fdf8f0',
          100: '#f9eddb',
          200: '#f2d7b0',
          300: '#e9bc7e',
          400: '#e0a050',
          500: '#d68733',
          600: '#c06d28',
          700: '#a05424',
          800: '#824425',
          900: '#6b3921',
          950: '#3a1c0f',
        },
      },
      fontFamily: {
        sans: ['Quicksand', 'Nunito', 'sans-serif'],
        serif: ['Noto Serif SC', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      // 自定义动画
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'slide-left': 'slideLeft 0.6s ease-out',
        'scale-in': 'scaleIn 0.4s ease-out',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideLeft: {
          '0%': { opacity: '0', transform: 'translateX(30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      // 圆角扩展
      borderRadius: {
        'clay': '24px',
        'clay-lg': '32px',
      },
      // 阴影扩展 - Claymorphism 风格
      boxShadow: {
        'clay': '20px 20px 60px rgba(0, 0, 0, 0.06), -20px -20px 60px rgba(255, 255, 255, 0.7)',
        'clay-hover': '25px 25px 70px rgba(0, 0, 0, 0.1), -25px -25px 70px rgba(255, 255, 255, 0.9)',
        'clay-sm': '10px 10px 30px rgba(0, 0, 0, 0.05), -10px -10px 30px rgba(255, 255, 255, 0.6)',
        'clay-inset': 'inset 5px 5px 10px rgba(0, 0, 0, 0.05), inset -5px -5px 10px rgba(255, 255, 255, 0.8)',
        'warm': '0 4px 20px rgba(241, 127, 18, 0.15)',
        'warm-lg': '0 8px 40px rgba(241, 127, 18, 0.2)',
      },
    },
  },
  plugins: [],
} satisfies Config
