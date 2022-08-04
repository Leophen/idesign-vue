# Dropdown 下拉菜单

基于指定节点的折叠下拉菜单。

## 基本用法

通过 `options` 属性指定下拉列表内容，并通过 `@click` 指定点击下拉内容触发事件。

:::demo
Dropdown/demo/demo1
:::

## 单项不同高度

可通过 `size` 属性指定下拉菜单单项的高度，默认为 `medium`。

:::demo
Dropdown/demo/demo2
:::

## 限制最大高度

可通过 `maxHeight` 属性指定下拉列表最大高度，注意最外层设最大高度后无法使用级联。

:::demo
Dropdown/demo/demo3
:::

## 全局禁用状态

可通过 `disabled` 属性控制禁用整个下拉菜单。

:::demo
Dropdown/demo/demo4
:::

## 单项禁用状态

也可在 `options` 属性中设置 `disabled` 控制单项禁用。

:::demo
Dropdown/demo/demo5
:::

## 带分割线的下拉项

可在 `options` 属性中设置 `divider` 控制该项下方展示分割线。

:::demo
Dropdown/demo/demo6
:::

## 带分组标题的下拉项

可在 `options` 属性中设置 `title` 控制该项上方展示组标题。

:::demo
Dropdown/demo/demo7
:::

## 单项点击事件

可在 `options` 属性中设置 `onClick` 控制该项点击触发事件。

:::demo
Dropdown/demo/demo8
:::

## 不同触发方式

可通过 `trigger` 属性指定下拉菜单触发方式，默认为 `click`。

:::demo
Dropdown/demo/demo9
:::

## 可选中模式

可以通过指定 `value` 选中值将下拉菜单切换为可选中的模式。

:::demo
Dropdown/demo/demo10
:::

## 下拉多选模式

可通过 `multiple` 属性指定下拉菜单为多选模式。

:::demo
Dropdown/demo/demo11
:::

## 级联下拉菜单

可通过 `children` 属性指定级联菜单，可通过 `cascaderDirection` 控制展开方向。

:::demo
Dropdown/demo/demo12
:::

## 限制级联子项最大高度

可通过 `maxHeight` 属性指定级联子项的最大高度，注意只能给最里层设最大高度。

:::demo
Dropdown/demo/demo13
:::

## Dropdown Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|contentClassName|下拉内容类名|`string`|`--`|
|width|下拉列表宽度|`string〡number`|`--`|
|maxHeight|列表项最大高度|`string〡number`|`--`|
|size|下拉项高度|`"small"〡"medium"〡"large"`|`medium`|
|value|下拉选中项|`string〡number〡(string〡number)[]`|`--`|
|options|下拉操作项|`DropdownOption[]`|`[]`|
|placement|菜单触发位置|`"top"〡"left"〡"right"〡"bottom"〡"top-left"〡"top-right"〡"bottom-left"〡"bottom-right"〡"left-top"〡"left-bottom"〡"right-top"〡"right-bottom"`|`bottom`|
|trigger|菜单触发方式|`"hover"〡"click"〡"context-menu"`|`click`|
|multiple|是否可多选|`boolean`|`false`|
|cascaderDirection|级联子层级展开方向|`"left"〡"right"`|`right`|
|disabled|是否全局禁用|`boolean`|`false`|

## Dropdown Events

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|click|点击菜单项触发事件|`(value: string | number | (string | number)[], event?: MouseEvent) => void`|`--`|
|trigger|切换下拉操作时触发|`(visible: boolean) => void`|`--`|

## DropdownItem Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 下拉操作项内容 | `ReactNode` | `--` |
| value | 下拉操作项唯一标识 | `string〡number` | `--` |
| width | 宽度 | `number` | `--` |
| maxHeight | 最大高度 | `number` | `--` |
| disabled | 单项是否禁用 | `boolean` | `false` |
| sameWidth | 气泡是否与触发节点等宽 | `boolean` | `false` |
| divider | 是否显示操作项之后的分隔线 | `boolean` | `false` |
| title | 该下拉项上方组标题 | `string` | `--` |

## DropdownItem Events

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| click | 点击时触发 | `(dropdownItem: DropdownOption, event: MouseEvent) => void` | `--` |
