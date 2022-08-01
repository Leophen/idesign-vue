<template>
  <div :class="cls" :style="style">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, inject } from 'vue'
import { turnValue } from '../common'

interface GridItemProps {
  /**
   * 栅格单项的垂直对齐方式
   */
  align?: 'top' | 'middle' | 'bottom'
  /**
   * 栅格每一项间的间隔
   */
  gutter?: number
  /**
   * 栅格左侧的间隔格数，间隔内不可以有栅格
   */
  offset?: number
  /**
   * 栅格单项次序
   */
  order?: number
  /**
   * 栅格占位格数，为 0 时相当于 display: none
   * @default 24
   */
  span?: number
  /**
   * 自定义单项宽度
   */
  width?: string | number
}

const {
  align,
  gutter,
  order,
  offset,
  span = 24,
  width
} = defineProps<GridItemProps>()

const limitNum = (num: number) => {
  let result = parseInt(num.toString())
  if (result > 24) {
    result = 24
  }
  if (result < 0) {
    result = 0
  }
  return result
}

const cls = computed(() => [
  'i-grid__item',
  `i-grid__item--span-${limitNum(span)}`,
  offset && `i-grid__item--offset-${limitNum(offset)}`,
  order && `i-grid__item--order-${limitNum(order)}`,
  align && `i-grid__item--align-${align}`
])

const provideGutter: number | undefined = inject('gutter')

const style = computed(() => [
  {
    paddingLeft: turnValue(gutter) || turnValue(provideGutter),
    paddingRight: turnValue(gutter) || turnValue(provideGutter),
    flex: width ? `0 0 ${turnValue(width)}` : '1',
    maxWidth: width && turnValue(width)
  }
])
</script>

<style lang="scss">
@import './index.scss';
</style>
