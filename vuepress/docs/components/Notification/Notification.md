# Notification 消息通知

全局展示通知提醒信息。

## 基本用法

与 [Message](../message/message) 组件同理，可使用 `Notification.info` | `Notification.success` | `Notification.warning` | `Notification.error` 来显示对应类型的全局通知：

:::demo
Notification/demo/demo1
:::

## 传入配置项

也可通过传入配置项来使用：

:::demo
Notification/demo/demo2
:::

## 添加通知标题

注意，标题仅可通过传入 `title` 配置项的方式来添加：

:::demo
Notification/demo/demo3
:::

## 通知持续时间

默认方式可通过第二个参数来设置通知持续时间，配置项的方式则可通过 `duration` 来设置，单位为秒，默认为 `3`，当设为 `0` 时表示不关闭：

:::demo
Notification/demo/demo4
:::

## 通知出现位置

默认方式可通过第三个参数来设置通知出现的位置，配置项的方式则可通过 `position` 来设置，默认为 `top-right`：

:::demo
Notification/demo/demo5
:::

## 可关闭的通知

默认方式可通过第四个参数来设置是否显示关闭按钮，配置项的方式则可通过 `closeable` 来设置，默认为 `false`：

:::demo
Notification/demo/demo6
:::

## 自定义通知内容

通知内容或标题节点均可自定义展示：

:::demo
Notification/demo/demo7
:::

## 手动关闭所有提示

可通过 `Notification.clear()` 来关闭所有提示：

:::demo
Notification/demo/demo8
:::

## Notification 方法

| 属性    | 说明         | 类型                                |
| ------- | ------------ | ----------------------------------- |
| info    | 显示信息通知 | `NotificationMethod`                |
| success | 显示成功通知 | `NotificationMethod`                |
| warning | 显示警告通知 | `NotificationMethod`                |
| error   | 显示错误通知 | `NotificationMethod`                |
| clear   | 清除全部通知 | `(position?: PositionType) => void` |

```ts
type NotificationMethod = (
  messageConfig: string | VNodeTypes | NotificationConfigType,
  duration?: number,
  position?: PositionType,
  closeable?: boolean
) => void;

type PositionType = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
```

## Notification 配置项

| 属性      | 说明                 | 类型                 | 默认值      |
| --------- | -------------------- | -------------------- | ----------- |
| title     | 通知标题             | `string〡VNodeTypes` | `--`        |
| content   | 通知内容             | `string〡VNodeTypes` | `--`        |
| duration  | 消息持续时间，单位秒 | `number`             | `3`         |
| position  | 通知位置             | `PositionType`       | `top-right` |
| closeable | 通知是否可关闭       | `boolean`            | `false`     |
