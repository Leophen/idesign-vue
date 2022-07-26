# BackTop 回到顶部

可一键快捷返回顶部的按钮。

## 基本用法

对具体 `window` 滚动使用：

:::demo
BackTop/demo/demo1
:::

## 具体节点滚动

对具体 `DOM` 节点滚动使用：

:::demo
BackTop/demo/demo2
:::

## 滚动显示起点

通过 `visibleHeight` 属性控制滚动到指定高度时，才显示返回顶部按钮：

:::demo
BackTop/demo/demo3
:::

## 自定义返回顶部按钮

直接包裹自定义内容：

:::demo
BackTop/demo/demo4
:::

## BackTop Attributes

| 属性          | 说明           | 类型                        | 默认值         |
| ------------- | -------------- | --------------------------- | -------------- |
| target        | 监听滚动的元素 | `string〡HTMLElement〡Window` | `window` |
| visibleHeight | 显示起点高度   | `number`                    | `0`            |
| smooth        | 是否平滑滚动   | `boolean`                   | `true`         |

## BackTop Events

| 属性   | 说明                 | 类型         | 默认值 |
| ------ | -------------------- | ------------ | ------ |
| click  | 点击返回顶部时触发   | `() => void` | `--`   |
| scroll | 滚动层节点滚动时触发 | `() => void` | `--`   |
