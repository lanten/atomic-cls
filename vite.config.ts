import path from 'path'
import { defineConfig } from 'vite'

import { less2JSStringCompiler } from './plugin'

const rootPath = process.cwd()
const srcPath = path.join(rootPath, 'lib')
const jsStringPath = path.join(rootPath, 'stringify')

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

  plugins: [
    less2JSStringCompiler({
      input: [
        path.join(srcPath, 'index.less'),
        path.join(srcPath, 'animation.less'),
        path.join(srcPath, 'border.less'),
        path.join(srcPath, 'box-model.less'),
        path.join(srcPath, 'color.less'),
        path.join(srcPath, 'css-vars.less'),
        path.join(srcPath, 'cursor.less'),
        path.join(srcPath, 'flex.less'),
        path.join(srcPath, 'font.less'),
        path.join(srcPath, 'grid.less'),
        path.join(srcPath, 'layout.less'),
        path.join(srcPath, 'shadow.less'),
      ],
      outputDir: jsStringPath,
    }),
  ],
})
