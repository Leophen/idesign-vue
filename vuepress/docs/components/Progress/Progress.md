# Progress 进度条

用于显示进度的进度条组件。

## 基本用法

通过 `percentage` 属性控制进度。

:::demo
Progress/demo/demo1
:::

## 隐藏进度提示

通过 `labelTxt` 属性控制是否显示进度提示。

:::demo
Progress/demo/demo2
:::

## 进度提示在内

条形进度条通过 `innerLabel` 属性控制是否显示进度提示，注意使用该属性时进度条最小高度会设为 `20`。

:::demo
Progress/demo/demo3
:::

## 自定义进度提示

通过 `label` 插槽设置自定义进度提示。

:::demo
Progress/demo/demo4
:::

## 自定义进度条颜色

通过 `color` 属性设置自定义进度条颜色，`backColor` 属性控制进度条底色。

:::demo
Progress/demo/demo5
:::

## 自定义宽度或粗细

通过 `width` 来控制条形进度条长度/环形进度条直径，通过 `strokeWidth` 属性控制进度条粗细度。

:::demo
Progress/demo/demo6
:::

## 环形进度条

通过 `type` 属性设置进度条类型，为 `circle` 时显示环形进度条。

:::demo
Progress/demo/demo7
:::

## 进度加载动画

通过 `indeterminate` 属性设置不确定的进度加载循环动画，可用 `duration` 控制循环速度，默认为 `3`。

:::demo
Progress/demo/demo8
:::

## Progress Attributes

| 属性          | 说明                 | 类型              | 默认值  |
| ------------- | -------------------- | ----------------- | ------- |
| percentage    | 进度条百分比         | `number`          | `0`     |
| type          | 进度条类型           | `"bar"〡"circle"` | `bar`   |
| labelTxt      | 是否显示进度提示文本 | `boolean`         | `true`  |
| innerLabel    | 提示是否在进度条内部 | `boolean`         | `false` |
| color         | 进度条颜色           | `string`          | `--`    |
| backColor     | 进度条底色           | `string`          | `--`    |
| width         | 进度条长度/环形直径  | `string〡number`  | `300`   |
| strokeWidth   | 进度条粗细度         | `number`          | `6`     |
| indeterminate | 触发进度加载动画     | `boolean`         | `false` |
| duration      | 进度加载动画速度     | `number`          | `3`     |

## Progress Slots

| 插槽名 | 说明           |
| ------ | -------------- |
| label  | 自定义进度提示 |
