import { defineConfig } from 'vite';
import reactRefresh from '@vitejs/plugin-react-refresh';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],
  esbuild: {
    jsxInject: `import React from 'react'`
  },
  resolve: {
    alias: [
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components')
      },
      {
        find: '@containers',
        replacement: resolve(__dirname, './src/containers')
      },
      {
        find: '@hooks',
        replacement: resolve(__dirname, './src/hooks')
      },
      {
        find: '@common',
        replacement: resolve(__dirname, './src/common')
      }
    ]
  },
  define: {
    'process.env': process.env
  },
  optimizeDeps: {
    exclude: ['documentation', 'github', '__tests__']
  },
  server: {
    port: 3000
  }
});
