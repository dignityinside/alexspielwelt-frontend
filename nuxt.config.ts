// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: [
    '@/assets/global.css'
  ],
  plugins: [
    { src: '~/plugins/storage.ts', mode: 'client' }, // Ensure mode is 'client'
  ],
})
