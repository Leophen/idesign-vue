# Breadcrumb 面包屑

显示当前页面在系统层级结构的位置，并能返回之前任意层级的页面。

## 基本用法

使用 `<Breadcrumb>` 包裹面包屑的每一项 `<Breadcrumb.Item>`。

:::demo
Breadcrumb/demo/demo1
:::

## 禁用状态

`<Breadcrumb.Item>` 可以使用 `disabled` 属性控制单项为禁用状态。

:::demo
Breadcrumb/demo/demo2
:::

## 自定义单项最大宽度

面包屑每一项的最大宽度默认为 `200px`；

`<Breadcrumb>` 可以使用 `maxItemWidth` 属性来全局控制面包屑每一项的最大宽度，内容超出宽度会以省略号形式呈现；

`<Breadcrumb.Item>` 可以使用 `maxWidth` 属性来控制单项的最大宽度，内容超出宽度会以省略号形式呈现，优先级高于 `maxItemWidth`。

:::demo
Breadcrumb/demo/demo3
:::

## 自定义分隔符

`<Breadcrumb>` 可以使用 `separator` 属性来自定义面包屑每一项的分隔符；

:::demo
Breadcrumb/demo/demo4
:::

## 路由跳转

可通过包裹 `<a>` 标签来实现路由跳转。

:::demo
Breadcrumb/demo/demo5
:::

## Breadcrumb Attributes

| 属性         | 说明                                     | 类型              | 默认值  |
| ------------ | ---------------------------------------- | ----------------- | ------- |
| maxItemWidth | 各项的最大宽度，超出后会以省略号形式呈现 | `string / number` | `200px` |

## Breadcrumb Slots

| 插槽名    | 说明         |
| --------- | ------------ |
| separator | 自定义分隔符 |

## BreadcrumbItem Attributes

| 属性     | 说明                                  | 类型              | 默认值  |
| -------- | ------------------------------------- | ----------------- | ------- |
| disabled | 是否禁用当前项点击                    | `boolean`         | `false` |
| maxWidth | 单项最大宽度，优先级高于 maxItemWidth | `string / number` | `--`    |
