import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      '@': process.cwd(),
    },
  },

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
      name: 'atomic-cls',
      entry: './lib/style.ts',
      formats: ['es', 'cjs'],
      fileName: 'style',
    },
  },
})
