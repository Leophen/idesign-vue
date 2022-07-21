# Scrollbar 滚动条

用于替换浏览器原生滚动条。

## 基础用法

通过 `height` 属性设置超出多少高度显示滚动条，若不设置则根据父容器高度自适应。

:::demo
Scrollbar/demo/demo1
:::

## 横向滚动

通过 `width` 属性设置超出多少宽度显示滚动条，若不设置则根据父容器宽度自适应。

:::demo
Scrollbar/demo/demo2
:::

## 滚动触发事件

可通过传入 `onScrollX` 和 `onScrollY` 分别控制水平和垂直滚动触发事件，参数均为该方向上的滚动比例。

:::demo
Scrollbar/demo/demo3
:::

## Scrollbar API

| 属性     | 说明             | 类型                  | 默认值 |
| -------- | ---------------- | --------------------- | ------ |
| width    | 滚动容器宽度     | `string〡number`      | `--`   |
| height   | 滚动容器高度     | `string〡number`      | `--`   |
| @scrollX | 水平滚动触发事件 | `(x: number) => void` | `--`   |
| @scrollY | 垂直滚动触发事件 | `(y: number) => void` | `--`   |
