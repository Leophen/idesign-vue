const blockDemo = require("./../../src");
const { defaultTheme } = require("@vuepress/theme-default");
const { viteBundler } = require("@vuepress/bundler-vite");
const { docsearchPlugin } = require('@vuepress/plugin-docsearch')
const { rightAnchorPlugin } = require('vuepress-plugin-right-anchor')

module.exports = {
  title: 'iDesign',
  description: '一套基于 Vue 的高质量 UI 组件库',
  head: [['link', { rel: 'icon', type: 'image/png', href: '/images/logo.ico' }]],
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
    logo: '/images/logo.svg',
    navbar: [
      {
        text: '指南',
        link: '/guide.md',
      },
      {
        text: '组件',
        link: '/components/Button/Button.md',
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
            '/components/Button/Button.md',
            '/components/Icon/Icon.md',
            '/components/Divider/Divider.md',
            '/components/Grid/Grid.md',
            '/components/Layout/Layout.md',
            '/components/Scrollbar/Scrollbar.md',
          ],
        },
        {
          text: '导航组件',
          link: '',
          children: [
            '/components/Dropdown/Dropdown.md',
            '/components/Menu/Menu.md',
            '/components/Tabs/Tabs.md',
            '/components/Breadcrumb/Breadcrumb.md',
            '/components/Pagination/Pagination.md',
            '/components/BackTop/BackTop.md',
          ],
        },
        {
          text: '表单组件',
          link: '',
          children: [
            '/components/Switch/Switch.md',
            '/components/Radio/Radio.md',
            '/components/Checkbox/Checkbox.md',
            '/components/Input/Input.md',
            '/components/Textarea/Textarea.md',
            '/components/Select/Select.md',
            '/components/TimePicker/TimePicker.md',
            '/components/DatePicker/DatePicker.md',
            '/components/ColorPicker/ColorPicker.md',
            '/components/Table/Table.md',
            '/components/Upload/Upload.md',
            '/components/Slider/Slider.md',
            '/components/Progress/Progress.md',
            '/components/Steps/Steps.md',
            '/components/Rate/Rate.md',
          ],
        },
        {
          text: '数据展示组件',
          link: '',
          children: [
            '/components/Tag/Tag.md',
            '/components/Empty/Empty.md',
            '/components/Loading/Loading.md',
            '/components/Avatar/Avatar.md',
            '/components/Badge/Badge.md',
            '/components/Image/Image.md',
            '/components/Carousel/Carousel.md',
            '/components/Collapse/Collapse.md',
          ],
        },
        {
          text: '弹框提示组件',
          link: '',
          children: [
            '/components/Alert/Alert.md',
            '/components/Message/Message.md',
            '/components/Notification/Notification.md',
            '/components/Dialog/Dialog.md',
            '/components/Drawer/Drawer.md',
            '/components/Popup/Popup.md',
          ],
        },
      ]
    },
    sidebarDepth: 0,
  }),
  plugins: [
    docsearchPlugin({
      apiKey: '0976f4949ddd8a3f89658eec1259baa4',
      indexName: 'idesign-vue',
      appId: 'B20VNZVD4U',
      // placeholder: 'Search',
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
    })
  ],
  markdown: {
    lineNumbers: true,
  },
};
