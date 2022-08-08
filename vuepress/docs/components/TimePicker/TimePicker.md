# TimePicker 时间选择器

用于选择指定时间。

## 基本用法

:::demo
TimePicker/demo/demo1
:::

## 禁用状态

可通过 `disabled` 属性控制为禁用状态。

:::demo
TimePicker/demo/demo2
:::

## 不同触发方式

可通过 `trigger` 属性指定下拉菜单触发方式，默认为 `click`。

:::demo
TimePicker/demo/demo3
:::

## 不同时间类型

可通过 `format` 属性指定不同的时间类型，默认为 `HH:mm:ss`，[点击查看各类型详情](https://day.js.org/docs/en/display/format)。

:::demo
TimePicker/demo/demo4
:::

## 自定义步长

可通过 `steps` 属性指定时间面板选择步长，默认为 `[1, 1, 1]`。

:::demo
TimePicker/demo/demo5
:::

## TimePicker Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|value|时间固定值（受控）|`string`|`--`|
|defaultValue|时间默认值（非受控）|`string`|`当前时间`|
|trigger|触发方式|`"hover"〡"click"〡"context-menu"`|`click`|
|disabled|是否禁用选择器|`boolean`|`false`|
|format|用于格式化时间，[详细文档](https://day.js.org/docs/en/display/format)|`string`|`HH:mm:ss`|
|steps|[时, 分, 秒] 时间间隔步数|`(string〡number)[]`|`[1, 1, 1]`|

## TimePicker Events

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|change|选中时间变化时触发|`(value: string) => void`|`--`|
|trigger|切换时间面板时触发|`(visible: boolean) => void`|`--`|
