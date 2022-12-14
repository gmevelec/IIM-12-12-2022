import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  typescript: {
    strict: true
  },
  modules: ['@pinia/nuxt'],
  dir: {
    pages: './src/adapters/primary/nuxt/pages'
  }
})
