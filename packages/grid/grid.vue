<template>
  <div :class="cls">
    <slot :gutter="gutter" />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'

interface GridProps {
  /**
   * 栅格每一项的垂直对齐方式
   * @default top
   */
  align?: 'top' | 'middle' | 'bottom'
  /**
   * 栅格每一项间的间隔
   */
  gutter?: number
  /**
   * 栅格水平排列方式
   * @default start
   */
  justify?: 'start' | 'end' | 'center' | 'space-around' | 'space-between'
}

const {
  align = 'top',
  gutter,
  justify = 'start'
} = defineProps<GridProps>()

const cls = computed(() => [
  'i-grid',
  align && `i-grid--align-${align}`,
  justify && `i-grid--justify-${justify}`
])

provide('gutter', gutter)
</script>

<style lang="scss">
@import './index.scss';
</style>
