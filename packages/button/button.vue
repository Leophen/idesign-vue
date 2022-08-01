<template>
  <button :class="cls" @click="handleClick">
    <i-icon class="i-button-icon" v-if="!!icon" :name="icon" />
    <slot />
  </button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface ButtonProps {
  /**
   * 是否聚焦状态
   * @default false
   */
  active?: boolean
  /**
   * 是否禁用按钮
   * @default false
   */
  disabled?: boolean
  /**
   * 按钮形状
   * @default round
   */
  shape?: 'square' | 'round' | 'circle'
  /**
   * 按钮尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 按钮类型，用于描述组件不同的应用场景
   * @default primary
   */
  type?: 'info' | 'primary' | 'error' | 'warning' | 'success'
  /**
   * 按钮形式
   * @default base
   */
  variant?: 'base' | 'outline' | 'dashed' | 'text'
  /**
   * 内置图标
   */
  icon?: string
}

interface ButtonEmits {
  /**
   * 点击事件
   */
  (type: 'click', e: MouseEvent): void
}

const {
  active = false,
  disabled = false,
  shape = 'round',
  size = 'medium',
  type = 'primary',
  variant = 'base',
  icon
} = defineProps<ButtonProps>()
const emit = defineEmits<ButtonEmits>()

const handleClick = (e: MouseEvent) => {
  if (disabled) {
    return
  }
  emit('click', e)
}

const cls = computed(() => [
  'i-button',
  `i-button--type-${type}`,
  variant !== 'base' && `i-button--variant-${variant}`,
  size !== 'medium' && `i-button--size-${size}`,
  shape !== 'round' && `i-button--shape-${shape}`,
  active && 'i-button-active',
  disabled && 'i-button-disabled'
])
</script>

<style lang="scss">
@import './index.scss';
</style>
