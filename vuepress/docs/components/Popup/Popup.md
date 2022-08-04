# Popup 气泡提示

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

## Popup Attributes

| 属性            | 说明         | 类型                  | 默认值 |
| --------------- | ------------ | --------------------- | ------ |
| portalClassName | 气泡内容类名 | `string`              | `--`   |
| content         | 气泡提示内容 | `string〡HTMLElement` | `--`   |
| placement     | 气泡提示位置 | `"auto"〡"auto-start"〡"auto-end"〡"top"〡"top-start"〡"top-end"〡"bottom"〡"bottom-start"〡"bottom-end"〡"right"〡"right-start"〡"right-end"〡"left"〡"left-start"〡"left-end"`       | `top`   |
| trigger     | 触发气泡出现的方式 | `"hover"〡"click"〡"context-menu"`       | `hover`   |
| visible     | 气泡显示隐藏（受控） | `boolean`       | `--`   |
| defaultVisible     | 气泡显示隐藏（非受控） | `boolean`       | `false`   |
| disabled     | 是否禁用气泡 | `boolean`       | `false`   |
| sameWidth     | 气泡是否与触发节点等宽 | `boolean`       | `false`   |
| noPadding     | 去除内边距 | `boolean`       | `false`   |

## Popup Slots

| 插槽名      | 说明                   |
| --------- | ---------------------- |
| content | 气泡内容 |

## Popup Events

| 属性    | 说明               | 类型                         | 默认值 |
| ------- | ------------------ | ---------------------------- | ------ |
| trigger | 触发气泡操作时触发 | `(visible: boolean) => void` | `--`   |
