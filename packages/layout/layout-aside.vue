<template>
  <aside class="i-layout--aside" :style="asideStyle">
    <slot />
  </aside>
</template>

<script lang="ts">
import { inject, onMounted, onUnmounted, PropType } from 'vue'
import { defineComponent, computed } from 'vue'

const generateId = (() => {
  let i = 0
  return (prefix = '') => {
    i += 1
    return `${prefix}${i}`
  }
})()

export default defineComponent({
  name: 'LayoutAside',
  props: {
    /**
     * 侧边栏宽度
     * @default 240
     */
    width: {
      type: [String, Number],
      default: 240
    }
  },
  setup(props) {
    const uniqueId = generateId('i_layout_aside')
    const asideHook: any = inject('layoutProvide')

    onMounted(() => {
      asideHook?.onAsideMount?.(uniqueId)
    })
    onUnmounted(() => {
      asideHook?.onAsideUnMount?.(uniqueId)
    })

    const asideWidth =
      typeof props.width === 'number' ? `${props.width}px` : String(props.width)

    const asideStyle = computed(() => [
      {
        width: asideWidth,
        maxWidth: asideWidth,
        minWidth: asideWidth,
        flex: `0 0 ${asideWidth}`
      }
    ])

    return {
      asideStyle
    }
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
