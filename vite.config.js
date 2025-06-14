import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Load environment variables
const API_URL = process.env.VITE_API_URL || 'http://localhost:7000';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: API_URL,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
