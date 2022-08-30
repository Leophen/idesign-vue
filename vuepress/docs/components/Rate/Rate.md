# Rate 评分

用于评分打星的组件。

## 基本用法

:::demo
Rate/demo/demo1
:::

## 只读状态

可通过 `readonly` 属性控制为只读：

:::demo
Rate/demo/demo2
:::

## 可清除分值

可通过 `allowClear` 属性控制为再次点击分值可清除的模式：

:::demo
Rate/demo/demo3
:::

## 半星状态

可通过 `allowHalf` 属性控制为半星模式：

:::demo
Rate/demo/demo4
:::

## 最大分值

可通过 `count` 属性控制最大分值：

:::demo
Rate/demo/demo5
:::

## 自定义颜色

可通过 `activeColor` 和 `voidColor` 属性控制选中和未选中颜色：

:::demo
Rate/demo/demo6
:::

## 自定义图标

可通过 `activeIcon` 和 `voidIcon` 属性控制选中和未选中颜色：

:::demo
Rate/demo/demo7
:::

## Rate Attributes

| 属性                 | 说明               | 类型      | 默认值             |
| -------------------- | ------------------ | --------- | ------------------ |
| modelValue / v-model | 固定分值（受控）   | `number`  | `--`               |
| defaultValue         | 默认分值（非受控） | `number`  | `0`                |
| readonly             | 是否只读           | `boolean` | `false`            |
| allowClear           | 是否可清除         | `boolean` | `false`            |
| allowHalf            | 是否支持半星       | `boolean` | `false`            |
| count                | 最大分值           | `number`  | `5`                |
| activeColor          | 选中颜色           | `string`  | `#f5db4d`          |
| voidColor            | 未选中颜色         | `string`  | `#e5e6ea〡#333336` |
| activeIcon           | 选中图标           | `string`  | `StarFill`         |
| voidIcon             | 未选中图标         | `string`  | `StarFill`         |

## Rate Events

| 属性   | 说明           | 类型                    | 默认值 |
| ------ | -------------- | ----------------------- | ------ |
| change | 选择评分时触发 | `(val: number) => void` | --     |
