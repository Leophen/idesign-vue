---
nav:
  title: 组件
  path: /components
group:
  title: 导航组件
  order: 2
order: 1
---

# Menu 导航栏

收纳、排列并展示一系列选项的导航栏。

## 基本用法

使用 `Menu` 包裹菜单的每一项 `Menu-item`：

:::demo
Menu/demo/demo1
:::

## 带前后缀

通过 `prefixContent` 和 `suffixContent` 插槽分别设置导航项的前后缀：

:::demo
Menu/demo/demo2
:::

## 嵌套导航

可使用 `i-menu-group` 嵌套多层导航：

:::demo
Menu/demo/demo3
:::

## 垂直方向

通过 `direction` 属性控制导航方向：

:::demo
Menu/demo/demo4
:::

## Menu API

| 属性          | 说明                 | 类型                       | 默认值       |
| ------------- | -------------------- | -------------------------- | ------------ |
| width         | 导航宽度             | `string〡number`           | `--`         |
| active        | 固定选中值（受控）   | `string〡number`           | `--`         |
| defaultActive | 默认选中值（非受控） | `string〡number`           | `0`          |
| direction     | 导航方向             | `"horizontal"〡"vertical"` | `horizontal` |

## Menu Slots

| 插槽名        | 说明     |
| ------------- | -------- |
| prefixContent | 前置内容 |
| suffixContent | 后置内容 |

## Menu Events

| 属性      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
|change|点击菜单项时触发|`(value: string〡number) => void`|`--`|

## MenuItem API

| 属性      | 说明           | 类型                       | 默认值   |
| --------- | -------------- | -------------------------- | -------- |
| value     | 单项唯一标识   | `string〡number`           | `索引值` |

## MenuItem Events

| 属性      | 说明           | 类型                       | 默认值   |
| --------- | -------------- | -------------------------- | -------- |
| click   | 点击单项时触发 | `(string〡number) => void` | `--`     |

## MenuGroup API

| 属性      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
| title     | 折叠项标题 | `ReactNode`     | `--`   |
