# Textarea 多行文本框

用于字符输入的多行输入框。

## 基本用法

用于字符输入的多行输入框：

:::demo
Textarea/demo/demo1
:::

## 禁用状态

通过 `disabled` 属性指定是否禁用输入框。

:::demo
Textarea/demo/demo2
:::

## 只读状态

通过 `readonly` 属性指定是否为只读状态。

:::demo
Textarea/demo/demo3
:::

## 不同状态

通过 `status` 属性指定不同状态的输入框，通过 `tips` 属性指定 底部提示信息。

:::demo
Textarea/demo/demo4
:::

## 限制字数

通过 `maxLength` 属性指定最多可以输入的字符个数。

:::demo
Textarea/demo/demo5
:::

## 禁用高度调整

通过 `noResize` 属性指定是否禁用右下角高度调整模块。

:::demo
Textarea/demo/demo6
:::

## 限制高度

通过 `minRows` 和 `maxRows` 属性控制最小和最大高度。

:::demo
Textarea/demo/demo7
:::

## 高度自适应

通过 `autoSize` 属性控制高度自适应。

:::demo
Textarea/demo/demo8
:::

## 触发事件

一系列的事件触发操作。

:::demo
Textarea/demo/demo9
:::

## Textarea Attributes

| 属性         | 说明                       | 类型                            | 默认值   |
| ------------ | -------------------------- | ------------------------------- | -------- |
| placeholder  | 占位符                     | `string`                        | `请输入` |
| value        | 文本框受控值               | `string〡number`                | `--`     |
| defaultValue | 文本框默认值               | `string〡number`                | `--`     |
| disabled     | 是否禁用文本框             | `boolean`                       | `false`  |
| readonly     | 文本框是否只读             | `boolean`                       | `false`  |
| status       | 文本框状态                 | `"success"〡"warning"〡"error"` | `--`     |
| tips         | 文本框底部提示             | `string`                        | `--`     |
| maxLength    | 用户最多可以输入的字符个数 | `number`                        | `--`     |
| autofocus    | 自动聚焦                   | `boolean`                       | `false`  |
| noResize     | 是否禁用右下角高度调整模块 | `boolean`                       | `false`  |
| autoSize     | 自适应高度                 | `boolean`                       | `false`  |
| minRows      | 最小高度                   | `number`                        | `--`     |
| maxRows      | 最大高度                   | `number`                        | `--`     |

## Textarea Events

| 属性  | 说明                   | 类型                                  | 默认值 |
| ----- | ---------------------- | ------------------------------------- | ------ |
| input | 输入框值发生变化时触发 | `(value: string, ev?: Event) => void` | `--`   |
| focus | 输入框聚焦时触发       | `(value: string, ev?: Event) => void` | `--`   |
| blur  | 输入框失焦时触发       | `(value: string, ev?: Event) => void` | `--`   |
