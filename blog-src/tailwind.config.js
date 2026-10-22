/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', '[data-theme="dark"]'],
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
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
        sans: ['Quicksand', 'Nunito', 'system-ui', 'sans-serif'],
        serif: ['Noto Serif SC', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'float-delay': 'float 6s ease-in-out infinite 2s',
        'fade-in': 'fadeIn 0.45s ease-out both',
        'slide-up': 'slideUp 0.5s ease-out both',
        'scale-in': 'scaleIn 0.25s ease-out both',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'drawer-in': 'drawerIn 0.28s cubic-bezier(0.4, 0, 0.2, 1) both',
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
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.94)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        drawerIn: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      borderRadius: {
        clay: '24px',
        'clay-lg': '32px',
      },
    },
  },
  plugins: [],
}
