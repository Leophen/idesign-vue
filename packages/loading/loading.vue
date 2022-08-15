<template>
  <div class="i-loading">
    <div class="i-loading-spinner">
      <slot name="spinner" />
      <Icon :name="icon" :size="size" :color="color" v-if="!$slots.spinner" />
    </div>
    <div class="i-loading-info" :style="{ color: color }">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '../icon'

interface LoadingProps {
  /**
   * 加载图标
   * @default Loading
   */
  icon?: string
  /**
   * 加载图标大小
   * @default 36
   */
  size?: number
  /**
   * 加载图标颜色
   */
  color?: string
}

const { icon = 'Loading', size = 36, color } = defineProps<LoadingProps>()
</script>

<style lang="scss">
@import './index.scss';
</style>
