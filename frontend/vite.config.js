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
  build: {
    chunkSizeWarningLimit: 1000, // increase limit (default is 500kB)
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],          // core react libs
          router: ["react-router-dom"],           // router
          vendor: ["axios"],                      // API client
          ui: ["@headlessui/react", "@heroicons/react"], // example ui libs
          // add more heavy libs here if needed
        },
      },
    },
  },
})
