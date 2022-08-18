<template>
  <div
    class="i-table-tbody__box"
    :style="{
      maxHeight: turnValue(maxHeight)
    }"
  >
    <table class="i-table-tbody__wrapper">
      <ColumnGroup :columns="columns" />
      <tbody :class="['i-table-tbody', stripe && 'i-table-tbody__stripe']">
        <tr v-for="item in data" :key="item.key" class="i-table-tr">
          <td v-for="cell in columns" :key="cell.key" class="i-table-td">
            {{ item[cell.key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts">
import { turnValue } from '../common'
import ColumnGroup from './column-group'
import { ColumnType } from './type'

interface TableBodyProps {
  /**
   * 数据源
   * @default []
   */
  data?: { [x: string]: any }[]
  /**
   * 列数据
   * @default []
   */
  columns?: ColumnType[]
  /**
   * 表格列表高度，超出显示滚动条
   */
  maxHeight?: string | number
  /**
   * 是否显示斑马纹
   * @default false
   */
  stripe?: boolean
}

const {
  data = [],
  columns = [],
  maxHeight,
  stripe = false
} = defineProps<TableBodyProps>()
</script>

<style lang="scss">
@import './index.scss';
</style>
