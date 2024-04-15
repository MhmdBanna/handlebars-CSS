import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: '0.0.0.0',
    proxy: {
      "/api": {
        //? backend port
        target: `http://127.0.0.1:3000/`,

        changeOrigin: true,
        secure: false,
        ws: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    port: 5000,
  },
  plugins: [
    react(),
  ],
  assetsInclude: ['**/*.PNG']
});