# Radio 单选框

单选框代表从一组互斥的选项中仅选择一个选项。

## 单选框

最简单的单选框形式。

:::demo
Radio/demo/demo1
:::

## 单选框组

使用 `i-radio-group` 可以包裹 `i-radio` 形成一组单选框组。

:::demo
Radio/demo/demo2
:::

## 单选框（按钮型）

`i-radio` 提供 `type` 属性切换为按钮形式的单选框。

:::demo
Radio/demo/demo3
:::

## 单选框组（按钮型）

`i-radio-group` 提供 `type` 属性全局修改每一项为按钮型单选框。

:::demo
Radio/demo/demo4
:::

## 不同尺寸（按钮型）

`i-radio` 按钮形式的单选框提供 `size` 属性控制尺寸，`i-radio-group` 也有 `size` 属性可以全局控制每一项按钮单选框的尺寸。

:::demo
Radio/demo/demo5
:::

## 禁用状态

`i-radio` 提供 `disabled` 属性控制单选框为禁用状态，`i-radio-group` 可以全局控制每一项为禁用状态。

:::demo
Radio/demo/demo6
:::

## Radio Attributes

| 属性                 | 说明                   | 类型                         | 默认值   |
| -------------------- | ---------------------- | ---------------------------- | -------- |
| type                 | 单选框类型             | `"radio"〡"radio-button"`    | `radio`  |
| size                 | 按钮单选框尺寸         | `"small"〡"medium"〡"large"` | `medium` |
| modelValue / v-model | 是否固定选中（受控）   | `boolean`                    | `false`  |
| defaultChecked       | 是否默认选中（非受控） | `boolean`                    | `false`  |
| disabled             | 是否禁用组件           | `boolean`                    | `false`  |
| value                | 单选框的值             | `string〡number`             | `--`     |

## Radio Events

| 属性   | 说明         | 类型                                         | 默认值 |
| ------ | ------------ | -------------------------------------------- | ------ |
| change | 值变化时触发 | `(checked: boolean, context: Event) => void` | `--`   |

## RadioGroup Attributes

| 属性                 | 说明                         | 类型                         | 默认值     |
| -------------------- | ---------------------------- | ---------------------------- | ---------- |
| modelValue / v-model | 单选框组选中固定值（受控）   | `string〡number`             | `--`       |
| defaultChecked       | 单选框组选中默认值（非受控） | `string〡number`             | `--`       |
| type                 | 单选框组全局类型             | `"radio"〡"radio-button"`    | `"radio"`  |
| size                 | 按钮单选框全局尺寸           | `"small"〡"medium"〡"large"` | `"medium"` |
| disabled             | 单选框组是否全局禁用         | `boolean`                    | `false`    |

## RadioGroup Events

| 属性   | 说明             | 类型                                              | 默认值 |
| ------ | ---------------- | ------------------------------------------------- | ------ |
| change | 选中某一项时触发 | `(value: string〡number, context: Event) => void` | `--`   |
