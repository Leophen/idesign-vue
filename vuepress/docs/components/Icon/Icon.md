# Icon 图标

iDesign 提供了一套常用的图标集合，可直接使用。

## 基本用法

使用 `name` 属性选择展示的图标。

::: demo
Icon/demo/demo1
:::

## 不同尺寸

提供 `size` 属性自定义图标大小。

::: demo
Icon/demo/demo2
:::

## 不同颜色

提供 `color` 属性自定义图标大小。

::: demo
Icon/demo/demo3
:::

## 全部图标

<IconDisplay />

## Icon Attributes

| 属性     | 说明         | 类型             | 默认值  |
| -------- | ------------ | ---------------- | ------- |
| name     | 图标名称     | `string`         | `--`    |
| size     | 图标尺寸     | `string〡number` | `16`    |
| color    | 图标颜色     | `string`         | `--`    |
| disabled | 是否禁用图标 | `boolean`        | `false` |

## Icon Events

| 属性  | 说明             | 类型                       | 默认值 |
| ----- | ---------------- | -------------------------- | ------ |
| click | 点击图标触发事件 | `(ev: MouseEvent) => true` | `--`   |
