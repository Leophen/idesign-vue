<template>
  <aside class="i-layout--aside" :style="asideStyle">
    <slot />
  </aside>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, computed, inject } from 'vue'
import { turnValue } from '../common'

interface LayoutAsideProps {
  /**
   * 侧边栏宽度
   * @default 240
   */
  width?: string | number
}

const { width = 240 } = defineProps<LayoutAsideProps>()

const generateId = (() => {
  let i = 0
  return (prefix = '') => {
    i += 1
    return `${prefix}${i}`
  }
})()

const uniqueId = generateId('i_layout_aside')
const asideHook: {
  onAsideMount?: (id: string) => void
  onAsideUnMount?: (id: string) => void
} = inject('layoutCtx', {})

onMounted(() => {
  asideHook?.onAsideMount?.(uniqueId)
})
onUnmounted(() => {
  asideHook?.onAsideUnMount?.(uniqueId)
})

const asideWidth = turnValue(width)
const asideStyle = computed(() => [
  {
    width: asideWidth,
    maxWidth: asideWidth,
    minWidth: asideWidth,
    flex: `0 0 ${asideWidth}`
  }
])
</script>

<style lang="scss">
@import './index.scss';
</style>
