import { defineConfig } from 'vite'

export default defineConfig({
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },

  build: {
    lib: {
      entry: './lib/index.ts',
      name: 'atomicCss',
      fileName: 'index',
    },
  },
})
