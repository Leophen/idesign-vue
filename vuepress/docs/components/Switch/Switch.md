# Switch 开关

用于两个互斥选项，多用于触发「开/关」

## 基本用法

不带描述，最基础的开关。

:::demo
Switch/demo/demo1
:::

## 自定义颜色

提供 `inactiveColor` 和 `activeColor` 属性控制开关关闭和打开时的颜色。

:::demo
Switch/demo/demo2
:::

## 不同尺寸

提供 `small`、`medium`（默认）、`large` 三种尺寸的开关。

:::demo
Switch/demo/demo3
:::

## 带描述内容的开关

提供 `inactiveLabel` 和 `activeLabel` 插槽展示开关关闭和打开时的描述标签。

:::demo
Switch/demo/demo4
:::

## 禁用状态

可以使用 `disabled` 属性来定义开关是否被禁用，该属性接受一个 `Boolean` 类型的值。

:::demo
Switch/demo/demo5
:::

## 加载中的状态

提供 `loading` 属性控制开关是否为加载状态。

:::demo
Switch/demo/demo6
:::

## Switch Attributes

| 属性          | 说明             | 类型                         | 默认值   |
| ------------- | ---------------- | ---------------------------- | -------- |
| size          | 开关尺寸         | `"small"〡"medium"〡"large"` | `medium` |
| inactiveColor | 开关关闭时的颜色 | `string`                     | `--`     |
| activeColor   | 开关打开时的颜色 | `string`                     | `--`     |
| disabled      | 是否禁用组件     | `boolean`                    | `false`  |
| loading       | 是否为加载状态   | `boolean`                    | `false`  |
| value         | 开关值           | `boolean`                    | `--`     |
| defaultValue  | 开关默认值       | `boolean`                    | `false`  |

## Switch Slots

| 插槽名        | 说明               |
| ------------- | ------------------ |
| inactiveLabel | 开关关闭的描述标签 |
| activeLabel   | 开关打开的描述标签 |

## Switch Events

| 属性   | 说明           | 类型                       | 默认值 |
| ------ | -------------- | -------------------------- | ------ |
| change | 切换开关时触发 | `(value: boolean) => void` | `--`   |
