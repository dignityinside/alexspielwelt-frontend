// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['@/assets/global.css'],
  plugins: [
    { src: '~/plugins/storage.ts', mode: 'client' }, // Ensure mode is 'client'
  ],
  build: {
    transpile: ['@fortawesome/vue-fontawesome']
  },
  runtimeConfig: {
    // The private keys which are only available server-side
    apiBase: 'https://localhost:3001',
    // Keys within public are also exposed client-side
    public: {
      name: 'Alex Spielwelt',
      slogan: 'Spiel-Empfehlungen & Einblicke',
      instagram: '@alexspielwelt',
      address: 'Max Mustermann, Musterstr. 123, 12345 Musterstadt',
      email: 'mustermann@example.com',
    },
  },
});
