// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-12-28',
  future: {
    compatibilityVersion: 4,
  },

  devtools: { enabled: true },

  typescript: {
    typeCheck: true,
    strict: false,
  },

  css: ['@/assets/global.css'],

  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
    '@nuxt/eslint',
    'nuxt-auth-utils',
    '@nuxt/ui',
  ],

  imports: {
    dirs: ['stores'],
  },

  runtimeConfig: {
    public: {
      baseURL: 'http://localhost:3001',
      name: 'Alex Spielwelt',
      slogan: 'Empfehlungen & Einblicke',
      instagram: '@alexspielwelt',
      address: 'Max Mustermann, Musterstr. 123, 12345 Musterstadt',
      email: 'mustermann@example.com',
    },
    session: {
      name: 'nuxt-session',
      password: process.env.NUXT_SESSION_PASSWORD || '',
      cookie: {
        sameSite: 'lax',
      },
      maxAge: 60 * 60 * 24 * 30, // 1 Month
    },
  },
});
