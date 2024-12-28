// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  devServer: {
    port: 3001,
  },
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
  ],
  imports: {
    dirs: ['stores'],
  },
  build: {
    transpile: ['@fortawesome/vue-fontawesome'],
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    // Keys within public are also exposed client-side
    public: {
      baseURL: 'http://localhost:3000',
      name: 'Alex Spielwelt',
      slogan: 'Spiel-Empfehlungen & Einblicke',
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
