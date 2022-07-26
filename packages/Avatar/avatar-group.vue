<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, provide } from 'vue'

export interface AvatarGroupAttributes {
  /**
   * 头像大小
   * @default 32
   */
  size?: number
  /**
   * 头像形状
   * @default circle
   */
  shape?: 'circle' | 'round'
  /**
   * 头像底色
   */
  color?: string
  /**
   * 折叠方向
   * @default right
   */
  cascading?: 'left' | 'right'
}

const {
  size,
  shape,
  color,
  cascading = 'right'
} = defineProps<AvatarGroupAttributes>()

provide('avatarGroupCtx', {
  size,
  shape,
  color
})

const cls = computed(() => ['i-avatar-group', `i-avatar__offset-${cascading}`])
</script>

<style lang="scss">
@import './index.scss';
</style>
