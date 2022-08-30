# ColorPicker 颜色选择器

用于颜色选择的组件，支持 `Hex` 和 `RGB` 格式。

## 基本用法

可通过 `value` 设置实时颜色值，通过 `@change` 设置修改颜色值触发的方法，通过 `@trigger` 设置切换颜色面板显示隐藏时触发的方法。

:::demo
ColorPicker/demo/demo1
:::

## 禁用状态

可通过 `disabled` 属性禁用颜色选择器。

:::demo
ColorPicker/demo/demo2
:::

## 不同尺寸

提供 `small`、`medium`（默认）、`large` 三种尺寸的颜色触发块。

:::demo
ColorPicker/demo/demo3
:::

## 预设颜色

可通过 `colorList` 属性传入颜色数组设置预设颜色。

:::demo
ColorPicker/demo/demo4
:::

## 颜色面板

可通过 `<i-color-picker.Panel />` 单独使用颜色面板。

:::demo
ColorPicker/demo/demo5
:::

## 禁用颜色面板

可通过 `disabled` 属性禁用独立的颜色面板。

:::demo
ColorPicker/demo/demo6
:::

## ColorPicker Attributes

| 属性             | 说明                 | 类型                         | 默认值    |
| ---------------- | -------------------- | ---------------------------- | --------- |
| triggerClassName | 触发颜色块类名       | `string`                     | `--`      |
| triggerStyle     | 触发颜色块样式       | `CSSProperties`              | `--`      |
| size             | 触发颜色块尺寸       | `"small"〡"medium"〡"large"` | `medium`  |
| value            | 固定颜色值（受控）   | `string`                     | `--`      |
| defaultValue     | 默认颜色值（非受控） | `string`                     | `#5e62ea` |
| colorList        | 底部预设颜色         | `colorListType[]`            | `--`      |
| disabled         | 是否禁用颜色选择器   | `boolean`                    | `false`   |

## ColorPicker Events

| 属性    | 说明               | 类型                                      | 默认值 |
| ------- | ------------------ | ----------------------------------------- | ------ |
| change  | 修改颜色值时触发   | `(val: string) => void`                   | `--`   |
| trigger | 切换颜色面板时触发 | `(val: string, visible: boolean) => void` | `--`   |

## ColorPanel Attributes

| 属性                 | 说明                 | 类型              | 默认值    |
| -------------------- | -------------------- | ----------------- | --------- |
| modelValue / v-model | 固定颜色值（受控）   | `string`          | `--`      |
| defaultValue         | 默认颜色值（非受控） | `string`          | `#5e62ea` |
| colorList            | 底部预设颜色         | `colorListType[]` | `--`      |
| disabled             | 禁用颜色面板         | `boolean`         | `false`   |

## ColorPanel Events

| 属性   | 说明             | 类型                    | 默认值 |
| ------ | ---------------- | ----------------------- | ------ |
| change | 修改颜色值时触发 | `(val: string) => void` | `--`   |
