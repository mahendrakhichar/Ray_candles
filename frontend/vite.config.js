import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // 👈 now @ maps to /src
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://ray-candles.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
})
