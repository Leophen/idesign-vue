<template>
  <i :class="cls" :style="iconStyles" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { turnValue } from '../common'

interface IconAttributes {
  /**
   * 图标名称
   */
  name?: string
  /**
   * 图标尺寸
   * @default 16
   */
  size?: number | string
  /**
   * 图标颜色
   */
  color?: string
  /**
   * 是否禁用图标
   */
  disabled?: boolean
}

interface IconEvents {
  /**
   * 点击事件
   */
  (type: 'click', e: MouseEvent): void
}

const {
  name = 'UserAvatar',
  size,
  color,
  disabled = false
} = defineProps<IconAttributes>()
const emit = defineEmits<IconEvents>()

const handleClick = (ev: MouseEvent) => {
  if (disabled) {
    return
  }
  emit('click', ev)
}

const cls = computed(() => [
  'i-icon',
  `icon-${name}`,
  disabled && 'i-icon-is-disabled'
])

const iconStyles = computed(() => {
  return {
    color: color || undefined,
    fontSize: turnValue(size)
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
