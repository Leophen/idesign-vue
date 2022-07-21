# Layout 布局

用于组织网页的框架结构。

## 基本用法

`<Layout>` 容器、可包裹子组件 `<Header>`、`<Footer>`、`<Aside>`、`<Content>`。

:::demo
Layout/demo/demo1
:::

## 侧边导航布局

当 `<Layout>` 容器子元素中包含 `<Aside>` 侧边栏组件时，`<Layout>` 容器的全部子元素会水平排列，否则会垂直排列。

:::demo
Layout/demo/demo2
:::

## 组合导航布局

可根据所需场景自由组合。

:::demo
Layout/demo/demo3
:::

## 自定义侧边栏

`Aside` 提供 `width` 属性来自定义宽度。

:::demo
Layout/demo/demo4
:::

## Aside API

| 属性      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| width     | 宽度       | `number`        | `240`  |
