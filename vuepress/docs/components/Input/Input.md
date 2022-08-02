# Input 输入框

用于字符输入的单行输入框。

## 基本用法

基础的单行输入框，可通过 `defaultValue` 设置默认值，通过 `value` 属性设置受控值，通过 `@input` 设置值改变时触发的操作：

:::demo
Input/demo/demo1
:::

## 禁用状态

通过 `disabled` 属性指定是否禁用输入框。

:::demo
Input/demo/demo2
:::

## 只读状态

通过 `readonly` 属性指定是否为只读状态。

:::demo
Input/demo/demo3
:::

## 聚焦全选

通过 `selectAll` 属性指定聚焦状态时自动全选。

:::demo
Input/demo/demo4
:::

## 不同尺寸

通过 `size` 属性指定不同尺寸的输入框，默认为 `medium`。

:::demo
Input/demo/demo5
:::

## 不同状态

通过 `status` 属性指定不同状态的输入框，通过 `tips` 属性指定 底部提示信息。

:::demo
Input/demo/demo6
:::

## 限制字数

通过 `maxLength` 属性指定最多可以输入的字符个数。

:::demo
Input/demo/demo7
:::

## 密码输入框

通过将 `type` 属性指定为 `password` 切换为密码输入框。

:::demo
Input/demo/demo8
:::

## 高级数字输入框

通过将 `type` 属性指定为 `number` 切换为数字滑块输入框：右侧显示数控按钮、悬浮左边缘出现鼠标数控滑块、可通过键盘上下键微调数值。

另外，可通过 `speed` 属性值设置滑块移动数值变化速率，通过 `step` 设置数值变化间隔，通过 `precision` 设置数值保留几位有效数字，通过 `hideNumberBtn` 设置隐藏数字输入框后缀按钮。

:::demo
Input/demo/demo9
:::

## 带清空按钮的输入框

通过 `clearable` 属性或 `@clear` 显示清空按钮，实现一键清空输入框内容。

:::demo
Input/demo/demo10
:::

## 带内置图标的输入框

通过 `prefixIcon` 或 `suffixIcon` 来指定输入框前后内置图标。

:::demo
Input/demo/demo11
:::

## 组合输入框

通过 `i-input-group` 包裹不同内容组成单行的组合输入框，可结合 [Grid](./grid) 组件来控制宽度占比。

:::demo
Input/demo/demo12
:::

## 触发事件

一系列的事件触发操作。

:::demo
Input/demo/demo13
:::

## Input Attributes

| 属性            | 说明                             | 类型                            | 默认值    |
| --------------- | -------------------------------- | ------------------------------- | --------- |
| placeholder     | 占位符                           | `string`                        | `请输入`  |
| value           | 输入框受控值                     | `string〡number`                | `--`      |
| defaultValue    | 输入框默认值                     | `string〡number`                | `--`      |
| disabled        | 是否禁用输入框                   | `boolean`                       | `false`   |
| readonly        | 输入框是否只读                   | `boolean`                       | `false`   |
| hideNumberBtn   | 是否隐藏数字输入框后缀按钮       | `boolean`                       | `false`   |
| selectAll       | 是否聚焦时全选                   | `boolean`                       | `false`   |
| size            | 输入框尺寸                       | `"small"〡"medium"〡"large"`    | `medium`  |
| status          | 输入框状态                       | `"success"〡"warning"〡"error"` | `--`      |
| tips            | 输入框底部提示                   | `string`                        | `--`      |
| maxLength       | 用户最多可以输入的字符个数       | `number`                        | `--`      |
| clearable       | 是否可清空                       | `boolean`                       | `false`   |
| type            | 输入框类型                       | `"number"〡"text"〡"password"`  | `text`    |
| speed           | 数字输入框滑块数值变化速率       | `"slow"〡"default"〡"fast"`     | `default` |
| maxNumber       | 数字输入框最大值                 | `number`                        | `--`      |
| minNumber       | 数字输入框最小值                 | `number`                        | `--`      |
| minNumberLock   | 数字输入框清空值时是否转为最小值 | `boolean`                       | `false`   |
| precision       | 数字输入框保留几位小数           | `number`                        | `0`       |
| step            | 数字输入框数值变化间隔           | `number`                        | `1`       |
| prefixIcon      | 组件前置图标名                   | `string`                        | `--`      |
| suffixIcon      | 组件后置图标名                   | `string`                        | `--`      |
| prefixIconClass | 组件前置图标类名                 | `string`                        | `--`      |
| suffixIconClass | 组件后置图标类名                 | `string`                        | `--`      |

## Input Events

| 属性            | 说明                     | 类型                                  | 默认值 |
| --------------- | ------------------------ | ------------------------------------- | ------ |
| input         | 输入框值发生变化时触发   | `(value: string, ev?: Event) => void` | `--`   |
| focus         | 输入框聚焦时触发         | `(value: string, ev?: Event) => void` | `--`   |
| blur          | 输入框失焦时触发         | `(value: string, ev?: Event) => void` | `--`   |
| keyDown       | 键盘按下时触发           | `(value: string, ev?: Event) => void` | `--`   |
| enter         | 键盘按下回车键时触发     | `(value: string, ev?: Event) => void` | `--`   |
| keyUp         | 释放键盘时触发           | `(value: string, ev?: Event) => void` | `--`   |
| clear         | 清空按钮点击时触发       | `(ev?: MouseEvent) => void`           | `--`   |
| move          | 数字输入框移动滑块时触发 | `(value: string, ev?: Event) => void` | `--`   |
| moveUp        | 数字输入框滑块失焦时触发 | `(value: string) => void`             | `--`   |
| clickPrefixIcon | 点击前置图标触发事件     | `(ev?: MouseEvent) => void`           | `--`   |
| clickSuffixIcon | 点击后置图标触发事件     | `(ev?: MouseEvent) => void`           | `--`   |

## InputGroup Slots

| 插槽名        | 说明           |
| ------------- | -------------- |
| prefixContent | 输入框组合前缀 |
| suffixContent | 输入框组合后缀 |

## InputGroup Events

| 属性        | 说明             | 类型                       | 默认值 |
| ----------- | ---------------- | -------------------------- | ------ |
| clickPrefix | 点击前缀触发事件 | `(ev: MouseEvent) => void` | `--`   |
| clickSuffix | 点击后缀触发事件 | `(ev: MouseEvent) => void` | `--`   |
