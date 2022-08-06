# DatePicker 日期选择器

用于选择或输入日期。

## 基本用法

:::demo
DatePicker/demo/demo1
:::

## 日期范围选择器

可通过 `type` 属性指定为日期范围选择器。

:::demo
DatePicker/demo/demo2
:::

## 禁用状态

可通过 `disabled` 属性控制为禁用状态。

:::demo
DatePicker/demo/demo3
:::

## 不同触发方式

可通过 `trigger` 属性指定下拉菜单触发方式，默认为 `click`。

:::demo
DatePicker/demo/demo4
:::

## 每周的第一天

可通过 `firstDayOfWeek` 属性设置每周的第一天，`0` 为周日，`1` 为周一。

:::demo
DatePicker/demo/demo5
:::

## 自定义分隔符

可通过 `rangeSeparator` 属性指定日期范围选择器的连接分隔符。

:::demo
DatePicker/demo/demo6
:::

## DatePicker Attributes

| 属性           | 说明                             | 类型                               | 默认值  |
| -------------- | -------------------------------- | ---------------------------------- | ------- |
| value          | 固定选中值（受控）               | `string`                           | `--`    |
| defaultValue   | 默认选中值（非受控）             | `string`                           | `--`    |
| trigger        | 触发方式                         | `"hover"〡"click"〡"context-menu"` | `click` |
| disabled       | 是否禁用选择器                   | `boolean`                          | `false` |
| type           | 日期选择器类型                   | `"date"〡"range"`                  | `date`  |
| rangeSeparator | 范围日期分隔符                   | `string`                           | `-`     |
| firstDayOfWeek | 每周的第一天，0 为周日，1 为周一 | `0〡1`                             | `1`     |

## DatePicker Events

| 属性   | 说明                 | 类型                      | 默认值 |
| ------ | -------------------- | ------------------------- | ------ |
| change | 选中值发生变化时触发 | `(value: string) => void` | `--`   |
