# Avatar 头像

用于展示头像的组件。

## 基本用法

通过 `image` 属性传入头像地址，如果链接失效或不传入链接会显示默认用户图标：

:::demo
Avatar/demo/demo1
:::

## 自定义头像内容

通过子节点自定义头像内容：

:::demo
Avatar/demo/demo2
:::

## 自定义头像大小

通过 `size` 属性控制头像大小：

:::demo
Avatar/demo/demo3
:::

## 自定义头像形状

通过 `shape` 属性控制头像形状：

:::demo
Avatar/demo/demo4
:::

## 自定义头像底色

通过 `color` 属性控制头像底色：

:::demo
Avatar/demo/demo5
:::

## 组合头像

可通过 `Avatar.Group` 包裹为组合头像：

:::demo
Avatar/demo/demo6
:::

## 组合折叠方向

可通过 `cascading` 属性控制组合头像折叠方向：

:::demo
Avatar/demo/demo7
:::

## 组合头像透传

`Avatar.Group` 可透传 `size`、`shape`、`color` 属性，优先级低于单个头像对应的属性：

:::demo
Avatar/demo/demo8
:::

## Avatar Attributes

| 属性  | 说明         | 类型            | 默认值    |
| ----- | ------------ | --------------- | --------- |
| image | 头像图片地址 | `string`        | `--`      |
| size  | 头像大小     | `number`        | `32`      |
| shape | 头像形状     | `circle〡round` | `circle`  |
| color | 头像底色     | `string`        | `#c1c4cb` |

## AvatarGroup Attributes

| 属性      | 说明         | 类型            | 默认值    |
| --------- | ------------ | --------------- | --------- |
| size      | 全局头像大小 | `number`        | `32`      |
| shape     | 全局头像形状 | `circle〡round` | `circle`  |
| color     | 全局头像底色 | `string`        | `#c1c4cb` |
| cascading | 组合折叠方向 | `left〡right`   | `right`   |
