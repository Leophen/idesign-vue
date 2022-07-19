const blockDemo = require("./../../src");
const { defaultTheme } = require("@vuepress/theme-default");
const { viteBundler } = require("@vuepress/bundler-vite");

module.exports = {
  title: 'iDesign',
  description: '一套基于 Vue 的高质量 UI 组件库',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/images/logo.png' }]],
  base: process.env.BASE || '/',
  host: "0.0.0.0",
  port: 3333,
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  bundler: viteBundler({}),
  theme: defaultTheme({
    logo: '/images/logo.png',
    navbar: [
      {
        text: '指南',
        link: '/guide.md',
      },
      {
        text: '组件',
        link: '/components/button.md',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Leophen/idesign-vue',
      },
    ],
    sidebar: {
      '/guide/': 'auto',
      '/components/': [
        {
          text: '基础组件',
          link: '',
          children: [
            '/components/button.md',
            '/components/icon.md',
          ],
        },
      ]
    },
  }),
  plugins: [
    [
      blockDemo({
        path: __dirname,
      }),
    ],
  ],
  markdown: {
    lineNumbers: true,
  },
};
