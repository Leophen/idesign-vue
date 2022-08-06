<template>
  <div
    :class="[
      'i-date-panel__header-icon',
      disabled && 'i-date-panel__header-icon__disabled'
    ]"
    @click="handleClickBtn"
  >
    <Icon :name="icon" />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '../icon'

interface DateHeaderBtnProps {
  /**
   * 图标
   * @default ArrowDoubleLeft
   */
  icon?: string
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean
}

interface DateHeaderBtnEmits {
  /**
   * 点击事件
   */
  (type: 'click'): void
}

const { icon = 'ArrowDoubleLeft', disabled = false } =
  defineProps<DateHeaderBtnProps>()
const emit = defineEmits<DateHeaderBtnEmits>()

const handleClickBtn = () => {
  !disabled && emit('click')
}
</script>

<style lang="scss">
@import './index.scss';
</style>
