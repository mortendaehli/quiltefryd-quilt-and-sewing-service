import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import { fileURLToPath, URL } from 'node:url'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Pages({
      dirs: 'src/pages',
      extensions: ['vue'],
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  base: process.env.NODE_ENV === 'production' ? '/quiltefryd-quilt-and-sewing-service/' : '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})
