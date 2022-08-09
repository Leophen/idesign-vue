# Message 全局提示（开发中）

全局展示操作反馈信息。

## 基本用法

使用 `Message.info` | `Message.success` | `Message.warning` | `Message.error` 来显示对应类型的全局提示。

:::demo
Message/demo/demo1
:::

## 设置提示持续时间

可通过第二个参数来设置提示持续的时间，默认为 `3`，当设为 `0` 时保持提示不关闭。

:::demo
Message/demo/demo2
:::

## 设置提示展示位置

可通过第三个参数来设置提示出现的位置，默认为 `top`。

:::demo
Message/demo/demo3
:::

## 手动关闭所有提示

可通过 `Message.closeAll()` 来关闭所有提示。

:::demo
Message/demo/demo4
:::

## 传入配置的用法

除上述方式外，也可以传入 `{ content: "这是一条成功提示", duration: 5000 }` 对象来使用全局提示。

:::demo
Message/demo/demo5
:::

## Message API

| 属性     | 说明         | 类型             | 默认值  |
| -------- | ------------ | ---------------- | ------- |
|type|全局提示类型|`"info"〡"success"〡"warning"〡"error"`|`info`|
|content|全局提示内容|`string`|`--`|
|duration|消息显示时长，单位：秒。值为 0 表示永久显示|`number`|`3`|
|placement|全局提示位置|`"top"〡"bottom"`|`top`|
