// https://nuxt.com/docs/api/nuxt-config
export default defineNuxtConfig({
  // 启用 Nuxt 4 兼容模式
  future: {
    compatibilityVersion: 4,
  },

  // Nitro 配置
  nitro: {
    experimental: {
      asyncContext: true,
    },
  },

  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/color-mode',
  ],

  // 全局 CSS
  css: ['~/assets/css/main.css'],

  // Tailwind CSS 配置
  tailwindcss: {
    configPath: '~/tailwind.config.ts',
  },

  // 内容模块配置
  content: {
    preview: {
      api: '/api/_content',
    },
  },

  // 图片域名白名单
  image: {
    quality: 80,
    format: ['webp'],
  },

  // 应用配置
  app: {
    head: {
      title: '我的博客',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: '一个温暖而有趣的个人博客' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      ],
    },
  },

  // TypeScript 配置
  typescript: {
    strict: true,
  },

  // 开发工具
  devtools: { enabled: true },

  compatibilityDate: '2026-04-14',
})
