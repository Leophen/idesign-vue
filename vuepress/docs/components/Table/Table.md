# Table 表格

用于数据收集展示、分析整理、操作处理的表格。

## 基本用法

通过 `columns` 属性指定列配置，通过 `data` 属性指定数据源：

:::demo
Table/demo/demo1
:::

## 自定义列宽

通过 `columns` 属性每一项的 `width` 来指定列宽，建议用百分比：

:::demo
Table/demo/demo2
:::

## 设最大高度

通过 `height` 属性指定表格内容最大高度，超出显示滚动条：

:::demo
Table/demo/demo3
:::

## 条纹表格

通过 `stripe` 属性指定表格双数行带条纹：

:::demo
Table/demo/demo4
:::

## Table Attributes

| 属性          | 说明                 | 类型              | 默认值  |
| ------------- | -------------------- | ----------------- | ------- |
|columns|表头配置数据|`ColumnType[]`|`[]`|
|data|表格数据源|`{ [x: string]: any; }[]`|`[]`|
|maxHeight|表格列表最大高度，超出显示滚动条|`string〡number`|`--`|
|stripe|是否显示斑马纹|`boolean`|`false`|
