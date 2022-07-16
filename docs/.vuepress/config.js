const path = require('path')
const navbar = require('./configs/navbar')
const sidebar = require('./configs/sidebar')

module.exports = {
  title: 'iDesign Vue',
  description: 'iDesign 组件库',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/logo.ico' }]],
  base: process.env.BASE || '/',
  port: 3333,
  themeConfig: {
    repo: 'xinlei3166/vuepress-demo',
    docsDir: 'docs',
    docsBranch: 'master',

    darkMode: true,

    // navbar
    navbar,

    // sidebar
    sidebar,
    // sidebarDepth: 1,

    // page meta
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdatedText: '上次更新',
    contributorsText: '贡献者',
  },
  markdown: {
    // options for markdown-it-anchor
    anchor: { permalink: false, level: [1, 2] },

    // options for markdown-it-toc
    toc: { level: [1, 2] },

    extractHeaders: { level: ['h2', 'h3', 'h4'] },
  },
  plugins: [
    // '@vuepress/plugin-back-to-top',
    // '@vuepress/plugin-active-header-links',
    ['@vuepress/plugin-search', { searchMaxSuggestions: 5 }],
    [
      '@vuepress/plugin-register-components',
      {
        componentsDir: path.resolve(__dirname, './components'),
      },
    ],
    ['vuepress-plugin-demoblock-plus', {
      customClass: 'demoblock-custom',
      // theme: 'github-light',
      cssPreprocessor: 'less',
      scriptReplaces: [
        {
          searchValue: /const ({ defineComponent as _defineComponent }) = Vue/g,
          replaceValue: 'const { defineComponent: _defineComponent } = Vue'
        }
      ]
    }]
  ]
}


