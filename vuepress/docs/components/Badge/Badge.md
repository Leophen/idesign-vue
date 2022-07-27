# Badge 提示徽章

提示徽章一般出现在图标或文字的右上角，以提供及时、重要的信息提示。

## 基本用法

:::demo
Badge/demo/demo1
:::

## 最大数字

可通过 `maxCount` 属性设置最大数字，默认为 `99`，超出则加上 `+`。

:::demo
Badge/demo/demo2
:::

## 自定义颜色

可通过 `color` 属性自定义徽标颜色。

:::demo
Badge/demo/demo3
:::

## 小红点徽章

可通过 `dot` 属性控制为小红点样式。

:::demo
Badge/demo/demo4
:::

## 自定义尺寸

可通过 `size` 属性自定义徽标尺寸。

:::demo
Badge/demo/demo5
:::

## 自定义形状

可通过 `shape` 属性自定义徽标形状。

:::demo
Badge/demo/demo6
:::

## 徽标位置偏移

可通过 `offset` 属性设置徽标位置偏移量。

:::demo
Badge/demo/demo7
:::

## Badge Attributes

| 属性     | 说明                        | 类型                    | 默认值   |
| -------- | --------------------------- | ----------------------- | -------- |
| count    | 徽标内容，可为任意内容      | `string〡HTMLElement`   | `0`      |
| maxCount | 封顶的数字值                | `number`                | `99`     |
| color    | 徽标颜色                    | `string`                | `--`     |
| dot      | 是否为红点                  | `boolean`               | `false`  |
| size     | 尺寸                        | `'small'〡'medium'`     | `medium` |
| shape    | 徽标形状                    | `'circle'〡'round'`     | `circle` |
| showZero | 当数值为 0 时，是否展示徽标 | `boolean`               | `true`   |
| offset   | 徽标偏移量                  | `Array<string〡number>` | `--`     |
