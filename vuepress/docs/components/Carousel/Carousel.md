# Carousel 轮播图

用于展示多个内容的循环播放轮播组件。

## 基本用法

可通过 `defaultCurrent` 属性控制默认轮播项：

:::demo
Carousel/demo/demo1
:::

## 垂直布局

可通过 `direction` 属性控制轮播图布局方向：

:::demo
Carousel/demo/demo2
:::

## 自动轮播

可通过 `autoPlay` 属性控制是否自动轮播，可配合 `interval` 属性控制轮播间隔时间（单位为秒）

:::demo
Carousel/demo/demo3
:::

## 滑动速度

可通过 `duration` 属性控制滑动速度：

:::demo
Carousel/demo/demo4
:::

## 卡片轮播

可通过 `type` 属性指定轮播样式：

:::demo
Carousel/demo/demo5
:::

## Carousel API

| 属性      | 说明       | 类型            | 默认值 |
| ------ | -------------- | --------------------------- | ------ |
|defaultCurrent|初始轮播项|`number`|`0`|
|width|轮播图的宽度|`Width<string〡number>`|`100%`|
|height|轮播图的高度|`Height<string〡number>`|`300`|
|autoPlay|是否自动播放|`boolean`|`false`|
|interval|轮播间隔时间|`number`|`3000`|
|stopOnHover|是否悬浮时停止轮播|`boolean`|`true`|
|type|轮播图类型|`"default"〡"card"`|`default`|
|direction|轮播滑动方向|`"horizontal"〡"vertical"`|`horizontal`|
|duration|滑动动画时长|`number`|`300`|

## Carousel Events

| 属性   | 说明           | 类型                        | 默认值 |
| ------ | -------------- | --------------------------- | ------ |
| change | 切换轮播时触发 | `(current: number) => void` | `--`   |
