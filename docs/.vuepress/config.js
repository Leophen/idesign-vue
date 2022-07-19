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
            '/components/Divider.md',
            '/components/Grid.md',
            '/components/Layout.md',
            '/components/Scrollbar.md',
          ],
        },
        {
          text: '导航组件',
          link: '',
          children: [
            '/components/Dropdown.md',
            '/components/Menu.md',
            '/components/Tabs.md',
            '/components/Breadcrumb.md',
            '/components/Pagination.md',
            '/components/BackTop.md',
          ],
        },
        {
          text: '表单组件',
          link: '',
          children: [
            '/components/Switch.md',
            '/components/Radio.md',
            '/components/Checkbox.md',
            '/components/Input.md',
            '/components/Textarea.md',
            '/components/Select.md',
            '/components/TimePicker.md',
            '/components/DatePicker.md',
            '/components/ColorPicker.md',
            '/components/Table.md',
            '/components/Upload.md',
            '/components/Slider.md',
            '/components/Progress.md',
            '/components/Steps.md',
            '/components/Rate.md',
          ],
        },
        {
          text: '数据展示组件',
          link: '',
          children: [
            '/components/Tag.md',
            '/components/Empty.md',
            '/components/Loading.md',
            '/components/Avatar.md',
            '/components/Badge.md',
            '/components/Image.md',
            '/components/Carousel.md',
            '/components/Collapse.md',
          ],
        },
        {
          text: '弹框提示组件',
          link: '',
          children: [
            '/components/Alert.md',
            '/components/Message.md',
            '/components/Notification.md',
            '/components/Dialog.md',
            '/components/Drawer.md',
            '/components/Popup.md',
          ],
        },
      ]
    },
    sidebarDepth: 0
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
