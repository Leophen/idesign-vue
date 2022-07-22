# Popup 气泡提示（开发中）

基于指定节点的通用气泡提示框。

## 基本用法

通过 `content` 属性指定气泡内容。

:::demo
Popup/demo/demo1
:::

## 禁用状态

通过 `disabled` 属性控制气泡禁用。

:::demo
Popup/demo/demo2
:::

## 不同触发方式

可通过 `trigger` 属性指定触发方式，默认为 `hover`。

:::demo
Popup/demo/demo3
:::

## 不同触发方向

可通过 `placement` 属性指定气泡触发方向，默认为 `top`。

:::demo
Popup/demo/demo4
:::

## 手动显示隐藏

通过 `defaultVisible` 属性显示默认显示隐藏，通过 `visible` 属性手动切换气泡显示隐藏。

:::demo
Popup/demo/demo5
:::

## Popup API

| 属性            | 说明         | 类型                  | 默认值 |
| --------------- | ------------ | --------------------- | ------ |
| portalClassName | 弹窗内容类名 | `string`              | `--`   |
| portalStyle     | 弹窗内容样式 | `CSSProperties`       | `--`   |
| content         | 气泡提示内容 | `string〡HTMLElement` | `--`   |
| placement     | 气泡提示位置 | `"top"〡"left"〡"right"〡"bottom"〡"top-left"〡"top-right"〡"bottom-left"〡"bottom-right"〡"left-top"〡"left-bottom"〡"right-top"〡"right-bottom"`       | `top`   |
| trigger     | 触发气泡出现的方式 | `"hover"〡"click"〡"context-menu"`       | `hover`   |
| visible     | 气泡显示隐藏（受控） | `boolean`       | `--`   |
| defaultVisible     | 气泡显示隐藏（非受控） | `boolean`       | `false`   |
| disabled     | 是否禁用气泡 | `boolean`       | `false`   |
| updateLocation     | 这个值变化时手动更新位置 | `string〡number〡boolean`       | `--`   |
| @trigger     | 触发气泡操作时触发 | `(visible: boolean) => void`       | `--`   |
