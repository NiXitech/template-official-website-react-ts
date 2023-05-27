import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

const VARIABLE_LESS_PATH = './src/variable.less';

const env = process.env.NODE_ENV;

let apiBaseUrl = 'https://api.example.com';

if (env !== 'prod') {
  apiBaseUrl = 'https://api.qa.example.com';
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.NODE_ENV': JSON.stringify(env),
    API_BASE_URL: JSON.stringify(apiBaseUrl),
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
        additionalData: `@import "${VARIABLE_LESS_PATH}";`,
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
