<template>
  <div class="i-badge">
    <slot />
    <sup :class="supCls" :style="supStyle" v-if="!isHidden">
      <template v-if="!dot">
        {{ getDisplayCount() }}
      </template>
    </sup>
  </div>
</template>

<script setup lang="ts">
import { computed, CSSProperties } from 'vue'

interface BadgeProps {
  /**
   * 徽标内容，可为任意内容
   * @default 0
   */
  count?: string | HTMLElement
  /**
   * 封顶的数字值
   * @default 99
   */
  maxCount?: number
  /**
   * 徽标颜色
   */
  color?: string
  /**
   * 是否为红点
   * @default false
   */
  dot?: boolean
  /**
   * 尺寸
   * @default medium
   */
  size?: 'small' | 'medium'
  /**
   * 徽标形状
   * @default circle
   */
  shape?: 'circle' | 'round'
  /**
   * 当数值为 0 时，是否展示徽标
   * @default true
   */
  showZero?: boolean
  /**
   * 徽标偏移量
   */
  offset?: Array<string | number>
}

const {
  count = 0,
  maxCount = 99,
  color,
  dot = false,
  size = 'medium',
  shape = 'circle',
  showZero = true,
  offset
} = defineProps<BadgeProps>()

const getDisplayCount = () => {
  if (typeof count === 'number' && count > maxCount) {
    return `${maxCount}+`
  }
  return count
}

let isHidden = !count
if (typeof count === 'number') {
  isHidden = count < 1 && !showZero
}

const getOffset = () => {
  const result: CSSProperties = {}
  if (offset) {
    offset[0] && (result.right = +offset[0])
    offset[1] && (result.marginTop = +offset[1])
  }
  return result
}

const supCls = computed(() => [
  'i-badge__content',
  dot ? `i-badge--dot` : shape && `i-badge--${shape}`,
  size === 'small' && `i-badge__size-${size}`
])

const supStyle = computed(() => [
  {
    background: color,
    ...getOffset()
  }
])
</script>

<style lang="scss">
@import './index.scss';
</style>
