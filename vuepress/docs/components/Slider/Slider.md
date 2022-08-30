# Slider 滑块

用于通过滑动来选择合适数值的滑动组件。

## 基本用法

:::demo
Slider/demo/demo1
:::

## 禁用状态

通过 `disabled` 属性控制滑块为禁用状态。

:::demo
Slider/demo/demo2
:::

## 自定义边界

通过 `max` 和 `min` 属性控制滑块最大值和最小值。

:::demo
Slider/demo/demo3
:::

## 自定义步长

通过 `step` 属性控制滑块步长。

:::demo
Slider/demo/demo4
:::

## 纵向滑块

通过 `layout` 属性控制滑块方向，默认为 `horizontal`。

:::demo
Slider/demo/demo5
:::

## 范围滑块

通过 `range` 属性指定为范围滑块，注意 `value` 的值需为数组，例如 `[0, 100]`。

:::demo
Slider/demo/demo6
:::

## 隐藏数值提示

通过 `hideTip` 属性隐藏数值提示。

:::demo
Slider/demo/demo7
:::

## 数值提示位置

通过 `placement` 属性自定义数值提示位置。

:::demo
Slider/demo/demo8
:::

## Slider Attributes

| 属性                 | 说明                 | 类型                       | 默认值       |
| -------------------- | -------------------- | -------------------------- | ------------ |
| layout               | 滑块布局方向         | `"vertical"〡"horizontal"` | `horizontal` |
| modelValue / v-model | 滑块固定值（受控）   | `number〡number[]`         | `--`         |
| defaultValue         | 滑块默认值（非受控） | `number〡number[]`         | `--`         |
| disabled             | 是否禁用滑块         | `boolean`                  | `false`      |
| max                  | 滑块范围最大值       | `number`                   | `100`        |
| min                  | 滑块范围最小值       | `number`                   | `0`          |
| step                 | 步长                 | `number`                   | `1`          |
| range                | 是否为范围滑块       | `boolean`                  | `false`      |
| hideTip              | 是否隐藏数值提示     | `boolean`                  | `false`      |
| placement            | 数值提示出现位置     | `placementType`            | `top`        |

## Slider Events

| 属性   | 说明             | 类型                      | 默认值 |
| ------ | ---------------- | ------------------------- | ------ |
| change | 滑块值变化时触发 | `(value: number) => void` | `--`   |
