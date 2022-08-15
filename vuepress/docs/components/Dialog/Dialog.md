# Dialog 对话框

模态对话框。

## 基本用法

可通过 `visible` 属性控制对话框显示隐藏。

:::demo
Dialog/demo/demo1
:::

## 禁用退出键关闭功能

可通过 `closeOnEsc` 属性控制打开对话框时按下 ESC 退出键是否触发关闭事件，默认为 `true`，表示 ESC 退出键触发 `@close` 关闭事件。

:::demo
Dialog/demo/demo2
:::

## 隐藏遮罩层

可通过 `showMask` 属性控制打开对话框时是否显示遮罩层，默认为 `true`。

:::demo
Dialog/demo/demo3
:::

## 自定义对话框宽度

可通过 `width` 属性控制对话框宽度。

:::demo
Dialog/demo/demo4
:::

## 自定义对话框头部

可通过 `header` 插槽设置对话框头部内容。

:::demo
Dialog/demo/demo5
:::

## 自定义对话框底部

可通过 `footer` 插槽设置对话框底部内容。

:::demo
Dialog/demo/demo6
:::

## Dialog Attributes

| 属性       | 说明               | 类型             | 默认值  |
| ---------- | ------------------ | ---------------- | ------- |
| visible    | 控制对话框显示隐藏 | `boolean`        | `false` |
| closeOnEsc | 按下退出键是否触发关闭事件 | `boolean`   | `true`  |
| showMask   | 是否显示遮罩层     | `boolean`        | `true`  |
| width      | 对话框宽度         | `string〡number` | `--`    |

## Dialog Slots

| 插槽名    | 说明         |
| --------- | ------------ |
| header | 自定义头部 |
| footer | 自定义底部 |

## Dialog Events

| 属性  | 说明                 | 类型         | 默认值 |
| ----- | -------------------- | ------------ | ------ |
| close | 对话框关闭时触发事件 | `() => void` | --     |
