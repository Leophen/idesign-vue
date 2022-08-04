# Tag 标签

标签常用于标记、分类和选择

## 基本用法

标签组件可直接展示包裹的内容，也可通过 `<a>` 或 `<router-link>` 来嵌套标签组件作为超链接标签使用。

:::demo
Tag/demo/demo1
:::

## 不同样式的标签

Tag 组件提供了五种不同的颜色类型：`default`（默认）、`primary`、`success`、`warning` 和 `error`。

除此之外，可以通过 `theme` 属性来改变主题：`light`（默认）、`dark`。

:::demo
Tag/demo/demo2
:::

## 带图标的标签

Tag 组件提供了 `icon` 属性来嵌入内置图标（[点击查看内置图标集合](../icon/icon)），也可以通过插槽的方式嵌入自定义图标。

:::demo
Tag/demo/demo3
:::

## 带添加和删除按钮的标签

当添加 `addable` 或 `closeable` 属性时，会自动带上添加或删除按钮，可通过 `@add` 和 `@close` 单独触发点击的事件。

:::demo
Tag/demo/demo4
:::

## 不同尺寸的标签

Tag 组件提供了三种不同的尺寸：`small`、`medium`（默认）和 `large`。

:::demo
Tag/demo/demo5
:::

## 自定义最大宽度

通过 `maxWidth` 设置最大宽度，超出部分自动省略。

:::demo
Tag/demo/demo6
:::

## Tag Attributes

| 属性          | 说明             | 类型                         | 默认值   |
| ------------- | ---------------- | ---------------------------- | -------- |
|icon|标签中的图标，可自定义图标呈现|`string`|`--`|
|addable|显示添加图标|`boolean`|`false`|
|closeable|显示关闭图标|`boolean`|`false`|
|maxWidth|标签最大宽度，超出部分渐变省略。示例：`'50px' / 80`|`string〡number`|`--`|
|size|标签尺寸|`"small"〡"medium"〡"large"`|`medium`|
|theme|标签主题|`"light"〡"dark"`|`dark`|
|type|标签类型，用于描述组件不同的应用场景|`"default"〡"primary"〡"warning"〡"error"〡"success"`|`default`|

## Tag Events

| 属性   | 说明           | 类型                       | 默认值 |
| ------ | -------------- | -------------------------- | ------ |
| click | 点击标签时触发 | `(e: MouseEvent) => void` | `--`   |
| add | 显示添加图标时点击触发 | `(e: MouseEvent) => void` | `--`   |
| close | 显示关闭图标时点击触发 | `(e: MouseEvent) => void` | `--`   |
