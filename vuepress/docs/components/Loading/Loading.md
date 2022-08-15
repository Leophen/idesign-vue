# Loading 加载中

用于显示正在加载状态的组件。

## 基本用法

:::demo
Loading/demo/demo1
:::

## 旋转提示

可通过默认插槽设置旋转提示：

:::demo
Loading/demo/demo2
:::

## 自定义旋转图标

可通过 `icon` 属性自定义图标，[点击查看可选图标](../Icon/Icon.html)：

:::demo
Loading/demo/demo3
:::

## 自定义旋转图标大小

可通过 `size` 属性自定义图标：

:::demo
Loading/demo/demo4
:::

## 自定义旋转图标颜色

可通过 `color` 属性自定义图标：

:::demo
Loading/demo/demo5
:::

## 自定义旋转内容

可通过 `spinner` 插槽自定义旋转内容：

:::demo
Loading/demo/demo6
:::

## Loading Attributes

| 属性  | 说明         | 类型     | 默认值    |
| ----- | ------------ | -------- | --------- |
| icon  | 加载图标     | `string` | `Loading` |
| size  | 加载图标大小 | `number` | `36`      |
| color | 加载图标颜色 | `string` | `--`      |

## Loading Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| spinner | 自定义旋转内容 |
