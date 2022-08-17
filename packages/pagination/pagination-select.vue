<template>
  <div class="i-pagination-select">
    <Select
      :value="value"
      :disabled="disabled"
      :options="options"
      :clearable="false"
      @change="handleChange"
    />
  </div>
</template>

<script setup lang="ts">
import { Select } from '../select'

interface PaginationSelectProps {
  /**
   * 每页条数
   * @default 10
   */
  value?: number
  /**
   * 禁用状态
   * @default false
   */
  disabled?: boolean
}

interface PaginationSelectEmits {
  /**
   * 选择每页条数时触发
   */
  (type: 'select', val: number): void
}

const { value = 10, disabled = false } = defineProps<PaginationSelectProps>()
const emit = defineEmits<PaginationSelectEmits>()

const options = [
  {
    content: '10 条/页',
    value: 10
  },
  {
    content: '20 条/页',
    value: 20
  },
  {
    content: '30 条/页',
    value: 30
  },
  {
    content: '40 条/页',
    value: 40
  },
  {
    content: '50 条/页',
    value: 50
  }
]

const handleChange = (val: string | number | Array<string | number>) => {
  emit('select', val as number)
}
</script>

<style lang="scss">
@import './index.scss';
</style>
