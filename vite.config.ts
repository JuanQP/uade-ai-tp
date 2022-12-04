import react from '@vitejs/plugin-react'
import path from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:4000/',
        changeOrigin: true,
        secure: false,
      },
      '/public': {
        target: 'http://localhost:4000/',
        changeOrigin: true,
        secure: false,
      }
    }
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, './src')},
      { find: '@features', replacement: path.resolve(__dirname, './src/features')},
      { find: '@pages', replacement: path.resolve(__dirname, './src/pages')},
    ]
  },
})
