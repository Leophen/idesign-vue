# Tabs 选项卡

用于在同个页面下进行快速切换的选项卡。

## 基本用法

使用 `i-tabs` 包裹菜单的每一项 `i-tabs-item`：

:::demo
Tabs/demo/demo1
:::

## 卡片风格

通过 `theme` 属性指定卡片风格：

:::demo
Tabs/demo/demo2
:::

## 禁用状态

通过 `disabled` 属性指定选项卡禁用：

:::demo
Tabs/demo/demo3
:::

## Tabs Attributes

| 属性                 | 说明                 | 类型               | 默认值   |
| -------------------- | -------------------- | ------------------ | -------- |
| theme                | 选项卡风格类型       | `"normal"〡"card"` | `normal` |
| modelValue / v-model | 固定选中值（受控）   | `string〡number`   | `--`     |
| defaultActive        | 默认选中值（非受控） | `string〡number`   | `--`     |
| disabled             | 全局禁用             | `boolean`          | `false`  |

## Tabs Events

| 属性   | 说明             | 类型                              | 默认值 |
| ------ | ---------------- | --------------------------------- | ------ |
| change | 点击选项卡时触发 | `(value: string〡number) => void` | `--`   |

## TabsItem Attributes

| 属性     | 说明     | 类型             | 默认值  |
| -------- | -------- | ---------------- | ------- |
| value    | 单项值   | `string〡number` | `--`    |
| disabled | 单项禁用 | `boolean`        | `false` |

## TabsItem Events

| 属性  | 说明             | 类型                               | 默认值 |
| ----- | ---------------- | ---------------------------------- | ------ |
| click | 点击单项卡时触发 | `(value?: string〡number) => void` | `--`   |
