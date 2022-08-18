<template>
  <div class="i-table">
    <TableHead :columns="columns" />
    <TableBody
      :columns="columns"
      :data="data"
      :maxHeight="maxHeight"
      :stripe="stripe"
    />
  </div>
</template>

<script setup lang="ts">
import TableHead from './table-head.vue'
import TableBody from './table-body.vue'
import { ColumnType } from './type'

interface TableProps {
  /**
   * 表头配置数据
   * @default []
   */
  columns?: ColumnType[]
  /**
   * 表格数据源
   * @default []
   */
  data?: { [x: string]: any }[]
  /**
   * 表格列表最大高度，超出显示滚动条
   */
  maxHeight?: string | number
  /**
   * 是否显示斑马纹
   * @default false
   */
  stripe?: boolean
}

const {
  columns = [],
  data = [],
  maxHeight,
  stripe = false
} = defineProps<TableProps>()
</script>

<style lang="scss">
@import './index.scss';
</style>
