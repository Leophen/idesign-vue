# Collapse 折叠面板

用于折叠 / 展开内容区域的折叠面板组件。

## 基本用法

使用 `collapse` 包裹菜单的每一项 `collapse-item`：

:::demo
Collapse/demo/demo1
:::

## 禁用状态

可通过 `disabled` 属性控制全局禁用或单项禁用：

:::demo
Collapse/demo/demo2
:::

## 手风琴模式

可通过 `accordion` 属性控制为手风琴模式：

:::demo
Collapse/demo/demo3
:::

## 默认展开全部

可通过 `expandAll` 属性控制默认展开所有折叠项：

:::demo
Collapse/demo/demo4
:::

## 自定义图标位置

可通过 `iconPlacement` 属性控制展开图标位置：

:::demo
Collapse/demo/demo5
:::

## 隐藏所有边框

可通过 `hideBorder` 属性隐藏所有边框：

:::demo
Collapse/demo/demo6
:::

## 嵌套折叠面板

可在 `collapse-item` 中多层嵌套 `collapse` 折叠面板：

:::demo
Collapse/demo/demo7
:::

## 无缩进模式

可通过 `noIndent` 属性隐藏所有边框：

:::demo
Collapse/demo/demo8
:::

## Collapse Attributes

| 属性          | 说明           | 类型              | 默认值  |
| ------------- | -------------- | ----------------- | ------- |
|active|固定展开项（受控）|`Array<string〡number>`|`--`|
|defaultActive|默认展开项（非受控）|`Array<string〡number>`|`--`|
|accordion|是否为手风琴模式|`boolean`|`false`|
|disabled|全局禁用折叠项|`boolean`|`false`|
|expandAll|默认全部展开|`boolean`|`false`|
|iconPlacement|自定义图标位置|`"left"〡"right"`|`left`|
|hideBorder|是否隐藏边框|`boolean`|`false`|
|noIndent|无缩进模式|`boolean`|`false`|

## Collapse Slots

| 属性          | 说明           | 类型              | 默认值  |
| ------------- | -------------- | ----------------- | ------- |
|change|切换面板时触发，返回变化的值|(value: `Array<string〡number>) => void`|`--`|

## CollapseItem Attributes

| 属性          | 说明           | 类型              | 默认值  |
| ------------- | -------------- | ----------------- | ------- |
| title         | 折叠项标题     | `ReactNode`       | `--`    |
| value         | 折叠项唯一标识 | `string〡number`  | `--`    |
| disabled      | 禁用单折叠项   | `boolean`         | `false` |
| iconPlacement | 自定义图标位置 | `'left'〡'right'` | `left`  |
