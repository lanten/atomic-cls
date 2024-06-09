import { defineUserConfig, viteBundler, defaultTheme } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'

import packageJson from '../../package.json'

const rootPath = process.cwd()

console.log(__dirname)

console.log(rootPath)

export default defineUserConfig({
  base: '/',
  lang: 'zh-CN',
  locales: {
    '/': {
      lang: 'zh-CN',
    },
  },
  title: 'Atomic Css',
  description: 'Atomic Css Docs',

  theme: defaultTheme({
    repo: 'https://github.com/lanten/atomic-cls',
    logo: '/images/vite.svg',
    docsBranch: 'master',
    editLink: true,
    editLinkPattern: ':repo/tree/:branch/docs/:path',
    navbar: [
      {
        text: `v${packageJson.version}`,
        children: [
          {
            text: `v${packageJson.version}`,
            children: [],
          },
        ],
      },
    ],
    sidebar: [
      {
        text: '指引',
        children: ['/README.md', '/guide/getting-started.md', '/guide/css-vars.md'],
      },

      {
        text: '文档',
        children: [
          '/documents/color.md',
          '/documents/flex.md',
          '/documents/grid.md',
          '/documents/box-model.md',
          '/documents/border.md',
          '/documents/text.md',
          '/documents/layout.md',
          '/documents/cursor.md',
          '/documents/shadow.md',
          '/documents/animation.md',
        ],
      },

      {
        text: 'CHANGELOG',
        link: '/CHANGELOG.md',
      },

      {
        text: '外部链接',
        children: [
          {
            text: '代码仓库',
            link: 'https://github.com/lanten/atomic-cls',
          },
          {
            text: 'npm',
            link: 'https://www.npmjs.com/package/atomic-cls',
          },
        ],
      },
    ],
  }),

  plugins: [
    searchPlugin({
      // 配置项
    }),
  ],

  bundler: viteBundler({
    viteOptions: {
      css: {
        devSourcemap: true,
        preprocessorOptions: {
          less: {
            javascriptEnabled: true,
          },
        },
      },

      resolve: {
        alias: {
          '@': rootPath,
        },
      },
    },
  }),
})
