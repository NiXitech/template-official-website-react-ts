import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const env = process.env.NODE_ENV;

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.NODE_ENV': JSON.stringify(env),
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@components': path.resolve(__dirname, './src/components'),
    },
  },
  build: {
    outDir: 'dist',
  },
  server: {
    host: '0.0.0.0',
    port: 3000,
    open: '/',
    https: false,
  },
});
