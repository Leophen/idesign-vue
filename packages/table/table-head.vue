<template>
  <table class="i-table-thead__wrapper">
    <ColumnGroup :columns="columns" />
    <thead class="i-table-thead">
      <tr class="i-table-tr">
        <th v-for="column in columns" :key="column.key" class="i-table-th">
          {{ column.title }}
        </th>
      </tr>
    </thead>
  </table>
</template>

<script setup lang="ts">
import ColumnGroup from './column-group'
import { ColumnType } from './type'

interface TableHeadProps {
  /**
   * 列数据
   * @default []
   */
  columns?: ColumnType[]
}

const { columns = [] } = defineProps<TableHeadProps>()
</script>

<style lang="scss">
@import './index.scss';
</style>
