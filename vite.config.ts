import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@ecars': path.resolve(__dirname, './src/@ecars'),
      '@ecars/*': path.resolve(__dirname, './src/@ecars/*'),
    },
  },
  server: {
    open: true,
  },
  build: {
    outDir: 'dist',
  },
})
