module.exports = {
  lang: 'zh-CN',
  title: 'iDesign',
  description: '一套基于 Vue 的高质量 UI 组件库',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/images/logo.png' }]],
  base: process.env.BASE || '/',
  port: 3333,
  themeConfig: {
    navbar: [
      {
        text: '指南',
        link: '/guide.md',
      },
      {
        text: '组件',
        link: '/components/Button.md',
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
            '/components/Button.md',
            '/components/Icon.md',
          ],
        },
      ]
    },
  },
}