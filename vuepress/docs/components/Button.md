# Button 按钮

常用的操作按钮。

## 基础按钮

基础按钮包括不同颜色状态下的填充按钮、描边按钮、虚框按钮和文字按钮。

::: demo
button/demo1
:::

## 聚焦状态

可以使用 `active` 属性来定义按钮是否被聚焦，该属性接受一个 `Boolean` 类型的值。

::: demo
button/demo2
:::

## 禁用状态

可以使用 `disabled` 属性来定义按钮是否被禁用，该属性接受一个 `Boolean` 类型的值。

::: demo
button/demo3
:::

## 不同尺寸

提供 `small`、`medium`（默认）、`large` 三种尺寸的按钮。

::: demo
button/demo4
:::

## 不同形状

提供 `square`、`round`（默认）、`circle` 三种形状的按钮。

::: demo
button/demo5
:::

## 图标按钮

通过 `icon` 属性控制按钮中的内置图标：

::: demo
button/demo6
:::

## Button API

| 属性     | 说明             | 类型                                               | 默认值    |
| -------- | ---------------- | -------------------------------------------------- | --------- |
| disabled | 是否禁用按钮     | `boolean`                                          | `false`   |
| active   | 是否聚焦状态     | `boolean`                                          | `false`   |
| shape    | 按钮形状         | `"square"〡"round"〡"circle"`                      | `round`   |
| size     | 按钮尺寸         | `"small"〡"medium"〡"large"`                       | `medium`  |
| type     | 按钮类型         | `"info"〡"primary"〡"error"〡"warning"〡"success"` | `primary` |
| variant  | 按钮形式         | `"base"〡"outline"〡"dashed"〡"text"`              | `base`    |
| @click   | 点击图标触发事件 | `(ev: MouseEvent) => true`                         | `--`      |
