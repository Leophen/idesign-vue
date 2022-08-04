# Select 选择器

下拉选择器。

## 基本用法

可通过 `defaultValue` 设置默认值，通过 `value` 属性设置受控值，通过 `@change` 设置值改变时触发的操作：

:::demo
Select/demo/demo1
:::

## 两种用法

除了通过包裹 `<i-select-item>` 的方式传入数据，也可以通过传入 `options` 属性来实现，可将 `clearable` 设为 `false` 关闭一键清空功能。

:::demo
Select/demo/demo2
:::

## 不同尺寸

可通过 `size` 属性来指定不同尺寸的选择器，默认为 `medium`。

:::demo
Select/demo/demo3
:::

## 全局禁用

可通过 `disabled` 属性来禁用选择器。

:::demo
Select/demo/demo4
:::

## 单项禁用

可在 `<i-select-item>` 使用 `disabled` 属性来控制单项禁用，也可在 `<i-select>` 的 `options` 属性中设置 `disabled` 控制单项禁用。

:::demo
Select/demo/demo5
:::

## 单项带分割线

可在 `<i-select-item>` 使用 `divider` 属性来控制单项禁用，也可在 `<i-select>` 的 `divider` 属性中设置 `disabled` 控制单项禁用。

:::demo
Select/demo/demo6
:::

## 单项带分组标题

可在 `<i-select-item>` 使用 `title` 属性来控制单项禁用，也可在 `<i-select>` 的 `title` 属性中设置 `disabled` 控制单项禁用。

:::demo
Select/demo/demo7
:::

## 带前后缀图标

可通过 `<i-select>` 的 `prefixIcon` 和 `suffixIcon` 属性设置选择框前后缀图标。

:::demo
Select/demo/demo8
:::

## 多选选择器

可通过 `multiple` 属性设为多选选择器。

:::demo
Select/demo/demo9
:::

## 级联选择器

可在 `options` 属性中为单项添加 `children` 属性指定级联菜单，另外可通过 `cascaderDirection` 来控制展开方向。

:::demo
Select/demo/demo10
:::

## Select Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|width|选择器宽度|`string〡number`|`100%`|
|value|选中值|`string〡number〡(string〡number)[]`|`--`|
|placeholder|占位符|`string`|`请选择`|
|options|下拉操作项|`DropdownOption[]`|`[]`|
|size|选择器尺寸|`"small"〡"medium"〡"large"`|`medium`|
|clearable|是否可一键清空|`boolean`|`true`|
|prefixIcon|选择框前置图标名|`string`|`--`|
|suffixIcon|选择框后置图标名|`string`|`--`|
|prefixIconClass|选择框前置图标类名|`string`|`--`|
|suffixIconClass|选择框后置图标类名|`string`|`--`|
|cascaderDirection|级联子层级展开方向|`"left"〡"right"`|`right`|
|multiple|是否可多选|`boolean`|`false`|

## Select Events

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
|change|选中值变化时触发|`(value: string | number | (string | number)[]) => void`|`--`|

## SelectItem Attributes

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| content | 下拉操作项内容 | `ReactNode` | `--` |
| value | 下拉操作项唯一标识 | `string〡number` | `--` |
| disabled | 单项是否禁用 | `boolean` | `false` |
| divider | 是否显示操作项之后的分隔线 | `boolean` | `false` |
| title | 该下拉项上方组标题 | `string` | `--` |

## SelectItem Events

| 属性 | 说明 | 类型 | 默认值 |
| --- | --- | --- | --- |
| click | 点击时触发 | `(dropdownItem: DropdownOption, event: MouseEvent) => void` | `--` |
