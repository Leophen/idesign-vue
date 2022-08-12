# Message 全局提示

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

可通过 `Message.clear()` 来关闭所有提示。

:::demo
Message/demo/demo4
:::

## 传入配置的用法

除上述方式外，也可以传入 `{ content: "这是一条成功提示", duration: 5000 }` 对象来使用全局提示。

:::demo
Message/demo/demo5
:::

<!-- ## 自定义提示内容

通知内容或标题节点均可自定义展示：

:::demo
Message/demo/demo6
::: -->

## Message 方法

| 属性    | 说明         | 类型                                |
| ------- | ------------ | ----------------------------------- |
| info    | 显示信息提示 | `MessageMethod`                     |
| success | 显示成功提示 | `MessageMethod`                     |
| warning | 显示警告提示 | `MessageMethod`                     |
| error   | 显示错误提示 | `MessageMethod`                     |
| clear   | 清除全部提示 | `(position?: PositionType) => void` |

```ts
type MessageMethod = (
  messageConfig: string | HTMLElement | MessageConfigType,
  duration?: number,
  position?: PositionType,
  closeable?: boolean
) => void;

type PositionType = 'top' | 'bottom';
```

## Message 配置项

| 属性     | 说明                 | 类型                  | 默认值 |
| -------- | -------------------- | --------------------- | ------ |
| content  | 提示内容             | `string〡HTMLElement` | `--`   |
| duration | 消息持续时间，单位秒 | `number`              | `3`    |
| position | 提示位置             | `PositionType`        | `top`  |