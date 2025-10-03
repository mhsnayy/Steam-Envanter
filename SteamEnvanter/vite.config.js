import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/steam': {
        target: 'https://steamcommunity.com',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/steam/, ''),
      },
    },
  },
})
