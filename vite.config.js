import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  base: '/ecosprint-official/',
  plugins: [vue({
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag === 'swiper-container' || tag === 'swiper-slide'
      }
    }
  })],
})
