# Grid 栅格

24 栅格系统是以规则的网格阵列来规范页面中的模块布局及信息分布，提高界面布局的一致性。

## 基本用法

使用 `Grid` 包裹栅格的每一项 `Grid.Item`。

`Grid.Item` 的 `span` 属性值使用 0（不显示）到 24（默认值）的值来表示其跨越范围。例如，三个等宽的列可以使用 `<Grid.Item span={8}>` 来创建。

如果一个 `Grid` 中 `Grid.Item` 的 `span` 总和超过 24，那么多余的 `Grid.Item` 会作为一个整体另起一行排列。

::: demo
Grid/demo/demo1
:::

## 自定义单项宽度

`Grid.Item` 的 `width` 属性值可以设置单项固定宽度，`width` 为具体的宽度且优先级高于 `span`，而 `span` 设置的宽度为间隔格数（0 - 24）

::: demo
Grid/demo/demo2
:::

## 区块间隔

`Grid` 的 `gutter` 属性值可以全局设置栅格中每一项的左右内边距。例如，`<Grid gutter={16}>` 将会为每一项 `Grid.Item` 添加左右内边距为 `8px`。

::: demo
Grid/demo/demo3
:::

## 单项左侧间距

`Grid.Item` 的 `offset` 属性值可以单独设置该项的左侧外边距，单位为间隔格数。例如，`<Grid.Item offset={2}>` 将会向右偏移 2 个间隔的距离。

::: demo
Grid/demo/demo4
:::

## 栅格水平排列方式

`Grid` 的 `justify` 属性值可以全局设置栅格水平的排版。

::: demo
Grid/demo/demo5
:::

## 栅格垂直对齐方式

`Grid` 的 `align` 属性值可以全局设置栅格中每一项的垂直对齐方式，而 `Grid.Item` 可通过 `align` 属性值单独设置该项的垂直对齐方式，优先级更高。

::: demo
Grid/demo/demo6
:::

## 自定义单项排序

`Grid.Item` 的 `order` 属性值可以设置单项在整个栅格中的次序。

::: demo
Grid/demo/demo7
:::

## Grid Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| justify | 栅格水平排列方式 | `"start"〡"end"〡"center"〡"space-around"〡"space-between"` | `"start"` |
| align | 栅格每一项的全局垂直对齐方式 | `"top"〡"middle"〡"bottom"` | `"top"` |
| gutter | 栅格每一项间的全局间隔 | `number` | `0` |

## GridItem Attributes

| 属性      | 说明                   | 类型                        | 默认值  |
| --------- | ---------------------- | --------------------------- | ------- |
| span      | 栅格宽度占比           | `number`                    | `24`    |
| width     | 栅格单项宽度值         | `number〡string`            | `--`    |
| align     | 栅格单项的垂直对齐方式 | `"top"〡"middle"〡"bottom"` | `"top"` |
| offset    | 栅格单项的左侧外边距   | `number`                    | `0`     |
| order     | 栅格单项次序           | `number`                    | `0`     |
