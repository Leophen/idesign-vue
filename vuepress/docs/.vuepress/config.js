const blockDemo = require("./../../src");
const { defaultTheme } = require("@vuepress/theme-default");
const { viteBundler } = require("@vuepress/bundler-vite");
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { rightAnchorPlugin } = require('vuepress-plugin-right-anchor')
const { sitemapPlugin } = require('vuepress-plugin-sitemap2')
const { registerComponentsPlugin } = require('@vuepress/plugin-register-components')
const { path } = require('@vuepress/utils')

const compPath = (name) => `/components/${name}/${name}`

const componentsSidebar = [
  {
    text: '基础组件',
    link: '',
    children: [
      compPath('Button'),
      compPath('Icon'),
      compPath('Divider'),
      compPath('Grid'),
      compPath('Layout'),
      compPath('Scrollbar'),
    ],
  },
  {
    text: '导航组件',
    link: '',
    children: [
      compPath('Dropdown'),
      compPath('Menu'),
      compPath('Tabs'),
      compPath('Breadcrumb'),
      compPath('Pagination'),
      compPath('BackTop'),
    ],
  },
  {
    text: '表单组件',
    link: '',
    children: [
      compPath('Switch'),
      compPath('Radio'),
      compPath('Checkbox'),
      compPath('Input'),
      compPath('Textarea'),
      compPath('Select'),
      compPath('TimePicker'),
      compPath('DatePicker'),
      compPath('ColorPicker'),
      compPath('Table'),
      compPath('Upload'),
      compPath('Slider'),
      compPath('Progress'),
      compPath('Steps'),
      compPath('Rate'),
    ],
  },
  {
    text: '数据展示组件',
    link: '',
    children: [
      compPath('Tag'),
      compPath('Empty'),
      compPath('Loading'),
      compPath('Avatar'),
      compPath('Badge'),
      compPath('Image'),
      compPath('Carousel'),
      compPath('Collapse'),
    ],
  },
  {
    text: '弹框提示组件',
    link: '',
    children: [
      compPath('Alert'),
      compPath('Message'),
      compPath('Notification'),
      compPath('Dialog'),
      compPath('Drawer'),
      compPath('Popup'),
    ],
  },
]

module.exports = {
  title: 'iDesign',
  description: '一套基于 Vue 的高质量 UI 组件库',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/images/logo.ico' }]],
  base: process.env.BASE || '/',
  host: "0.0.0.0",
  port: 5173,
  alias: {
    '@theme/SidebarItem.vue': path.resolve(__dirname, 'components/SidebarItem.vue'),
  },
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  bundler: viteBundler({}),
  theme: defaultTheme({
    logo: '/images/logo.svg',
    navbar: [
      {
        text: '指南',
        link: '/guide.html',
      },
      {
        text: '组件',
        link: '/components/Button/Button.html',
      },
      {
        text: 'GitHub',
        link: 'https://github.com/Leophen/idesign-vue',
      },
    ],
    sidebar: {
      '/guide/': 'auto',
      '/components/': componentsSidebar,
    },
    sidebarDepth: 0,
    notFound: ['如果您是通过 Algolia 搜索的回车快捷键进入此页面，这是 VuePress 预设 Algolia 的 bug，请返回上一页并使用鼠标点击搜索结果来进行跳转。']
  }),
  plugins: [
    docsearchPlugin({
      apiKey: '0976f4949ddd8a3f89658eec1259baa4',
      indexName: 'idesign-vue',
      appId: 'B20VNZVD4U',
    }),
    [
      blockDemo({
        path: __dirname,
      }),
    ],
    rightAnchorPlugin({
      showDepth: 1,
      expand: {
        trigger: 'click',
        clickModeDefaultOpen: true
      },
    }),
    sitemapPlugin({
      hostname: 'https://idesign-vue.leophen.cn/'
    }),
    registerComponentsPlugin({
      components: {
        Home: path.resolve(__dirname, './components/Home.vue'),
        IconDisplay: path.resolve(__dirname, './components/IconDisplay.vue'),
      },
    }),
  ],
  markdown: {
    lineNumbers: true,
  },
};
