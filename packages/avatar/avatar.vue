<template>
  <div :class="cls" :style="avatarStyle">
    <img
      class="i-avatar__image"
      :src="image"
      @error="handleImgLoadError"
      referrerPolicy="no-referrer"
      v-if="image && imgLoad"
    />
    <slot v-if="(!image || !imgLoad) && $slots.default" />
    <i-icon
      name="User"
      color="#fff"
      v-if="(!image || !imgLoad) && !$slots.default"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, inject, ref } from 'vue'
import { turnValue } from '../common'

interface AvatarAttributes {
  /**
   * 头像图片地址
   */
  image?: string
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
}

const groupCtx: any = inject('avatarGroupCtx', undefined)
const { image, size, shape, color } = defineProps<AvatarAttributes>()

const mergedSize = computed(() => (size ? size : groupCtx?.size) || 32)
const mergedShape = computed(
  () => (shape ? shape : groupCtx?.shape) || 'circle'
)
const mergedColor = computed(() => (color ? color : groupCtx?.color))

const imgLoad = ref(true)
const handleImgLoadError = () => {
  imgLoad.value = false
}

const cls = computed(() => [
  'i-avatar',
  mergedShape.value === 'round' && `i-avatar__shape-${mergedShape.value}`
])

const avatarStyle = computed(() => [
  {
    width: turnValue(mergedSize.value),
    height: turnValue(mergedSize.value),
    background: turnValue(mergedColor.value)
  }
])
</script>

<style lang="scss">
@import './index.scss';
</style>
