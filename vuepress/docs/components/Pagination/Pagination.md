# Pagination 分页

用于在当前页切换内容的分页组件。

## 基本用法

:::demo
Pagination/demo/demo1
:::

## 全局禁用

可通过 `disabled` 属性隐藏分页选择器：

:::demo
Pagination/demo/demo2
:::

## 隐藏分页选择器

可通过 `hideSelect` 属性隐藏分页选择器：

:::demo
Pagination/demo/demo3
:::

## 隐藏跳转输入框

可通过 `hideInput` 属性隐藏分页选择器：

:::demo
Pagination/demo/demo4
:::

## Pagination Attributes

| 属性      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
|current|当前页|`number`|`1`|
|total|数据总条数|`number`|`0`|
|pageSize|分页总页数|`number`|`10`|
|disabled|全局禁用|`boolean`|`false`|
|hideSelect|是否隐藏分页选择器|`boolean`|`false`|
|hideInput|是否隐藏跳转输入框|`boolean`|`false`|

## Pagination Events

| 属性      | 说明       | 类型            | 默认值 |
| --------- | ---------- | --------------- | ------ |
|change|当前页或分页发生变化时触发|`(pageInfo: PageInfo) => void`|`--`|
