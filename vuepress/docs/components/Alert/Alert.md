# Alert 提示

用于页面中展示重要的提示信息。

## 基本用法

Alert 组件提供了四种不同的提示类型：`info`（默认）、`success`、`warning` 和 `error`。

:::demo
Alert/demo/demo1
:::

## 带关闭按钮的提示

提供 `closable` 属性控制提示是否可关闭。

:::demo
Alert/demo/demo2
:::

## 带相关操作的提示

提供 `operation` 属性来配置跟在提示内容后的操作。

:::demo
Alert/demo/demo3
:::

## 带标题的提示

提供 `title` 属性来配置提示内容的标题。

:::demo
Alert/demo/demo4
:::

## Alert Attributes

| 属性      | 说明                   | 类型                 | 默认值 |
| --------- | ---------------------- | -------------------- | ------ |
| closable  | 是否显示关闭按钮       | `boolean`            | `false`   |
| title     | 标题                   | string〡HTMLElement` | `--`   |
| type      | 提示类型               | `'info'〡'success'〡'warning'〡'error'`     | `info`   |

## Alert Slots

| 插槽名      | 说明                   |
| --------- | ---------------------- |
| operation | 跟在提示内容后的操作区 |
