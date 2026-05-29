import { resolve } from 'node:path'
import { defineConfig } from 'electron-vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  main: {
    build: {
      rollupOptions: {
        input: resolve(__dirname, 'backend/src/main.ts'),
        output: {
          entryFileNames: 'index.js',
        },
      },
    },
  },
  preload: {
    build: {
      rollupOptions: {
        input: resolve(__dirname, 'backend/src/preload.ts'),
        output: {
          entryFileNames: 'index.js',
        },
      },
    },
  },
  renderer: {
    root: resolve(__dirname, 'frontend/src'),
    build: {
      rollupOptions: {
        input: resolve(__dirname, 'frontend/src/index.html'),
      },
    },
    plugins: [react(), tailwindcss()],
    resolve: {
      alias: {
        '@renderer': resolve(__dirname, 'frontend/src'),
      },
    },
  },
});