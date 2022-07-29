<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export default defineComponent({
  name: 'Dropdown',
  props: {
    /**
     * 是否聚焦状态
     * @default false
     */
    active: {
      type: Boolean,
      default: false
    },
    /**
     * 按钮形状
     * @default round
     */
    shape: {
      type: String as PropType<'square' | 'round' | 'circle'>,
      default: 'round'
    }
  },
  emits: {
    /**
     * @zh 点击时触发
     * @property {MouseEvent} ev
     */
    click: (ev: MouseEvent) => true
  },
  setup(props, { emit }) {
    const cls = computed(() => ['i-dropdown'])

    return {
      cls
    }
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
