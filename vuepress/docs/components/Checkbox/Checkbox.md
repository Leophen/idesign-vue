# Checkbox 多选框

多选框是一个选择控件，允许用户通过单击在选中和未选中之间切换。

## 基本用法

最简单的多选框形式。

:::demo
Checkbox/demo/demo1
:::

## 多选框组

使用 `i-checkbox-group` 可以包裹 `i-checkbox` 形成一组多选框组。

:::demo
Checkbox/demo/demo2
:::

## 不同尺寸

`i-checkbox` 多选框提供 `size` 属性控制尺寸，`i-checkbox-group` 也有 `size` 属性可以全局控制每一项多选框的尺寸。

:::demo
Checkbox/demo/demo3
:::

## 禁用状态

`i-checkbox` 提供 `disabled` 属性控制多选框为禁用状态，`i-checkbox-group` 可以全局控制每一项为禁用状态。

:::demo
Checkbox/demo/demo4
:::

## Checkbox Attributes

| 属性     | 说明           | 类型                         | 默认值     |
| -------- | -------------- | ---------------------------- | ---------- |
| size     | 多选框尺寸     | `"small"〡"medium"〡"large"` | `"medium"` |
| value    | 多选框唯一标识 | `string〡number`             | `--`       |
| checked  | 是否选中       | `boolean`                    | `false`    |
| disabled | 是否禁用组件   | `boolean`                    | `false`    |

## Checkbox Events

| 属性     | 说明         | 类型                                   | 默认值 |
| -------- | ------------ | -------------------------------------- | ------ |
| onChange | 值变化时触发 | `(checked: boolean, e: Event) => void` | `--`   |

## CheckboxGroup Attributes

| 属性         | 说明                 | 类型                         | 默认值     |
| ------------ | -------------------- | ---------------------------- | ---------- |
| currentValue | 多选框组选中的值     | `string〡number`             | `--`       |
| size         | 多选框全局尺寸       | `"small"〡"medium"〡"large"` | `"medium"` |
| disabled     | 多选框组是否全局禁用 | `boolean`                    | `false`    |

## CheckboxGroup Events

| 属性     | 说明             | 类型                                               | 默认值 |
| -------- | ---------------- | -------------------------------------------------- | ------ |
| onChange | 选中某一项时触发 | `(value: Array<string〡number>, e: Event) => void` | `--`   |
