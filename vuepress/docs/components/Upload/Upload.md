# Upload 上传

用户上传任意内容的组件。

## 基本用法

:::demo
Upload/demo/demo1
:::

## 不同主题

可通过 `theme` 属性控制不同属性的上传组件：

:::demo
Upload/demo/demo2
:::

## 自定义提示

可通过 `placeholder` 属性控制自定义占位符：

:::demo
Upload/demo/demo3
:::

## 自定义节点

可通过包裹自定义节点来展示任意上传组件：

:::demo
Upload/demo/demo4
:::

## Upload Attributes

| 属性     | 说明     | 类型             | 默认值  |
| -------- | -------- | ---------------- | ------- |
|placeholder|占位符|`string`|`--`|
|theme|上传组件风格|`"button"〡"block"〡"drag"`|`button`|
|maxSize|文件大小限制，单位 M|`number`|`10`|

## Upload Events

| 属性     | 说明     | 类型             | 默认值  |
| -------- | -------- | ---------------- | ------- |
|change|上传时触发|`(file: File) => void`|`--`|
