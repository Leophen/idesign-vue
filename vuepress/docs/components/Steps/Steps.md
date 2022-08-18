# Steps 步骤条

任务流程中常见的步骤条。

## 基本用法

可通过 `current` 设置当前进行的步骤，默认为 `0`：

:::demo
Steps/demo/demo1
:::

## 无序状态

可通过 `dot` 设置为无序小圆点步骤条：

:::demo
Steps/demo/demo2
:::

## 垂直状态

可通过 `layout` 设置为垂直步骤条：

:::demo
Steps/demo/demo3
:::

## 倒序步骤条

可通过 `reverse` 设置为倒序步骤条：

:::demo
Steps/demo/demo4
:::

## Steps Attributes

| 属性    | 说明               | 类型                   | 默认值       |
| ------- | ------------------ | ---------------------- | ------------ |
| current | 进行到哪一步       | `number`               | `0`          |
| layout  | 步骤条方向         | `horizontal〡vertical` | `horizontal` |
| reverse | 步骤条是否倒序     | `boolean`              | `false`      |
| dot     | 是否为无序的步骤条 | `boolean`              | `false`      |

## StepsItem Slots

| 插槽名      | 说明     |
| ----------- | -------- |
| title       | 步骤标题 |
| description | 步骤描述 |
