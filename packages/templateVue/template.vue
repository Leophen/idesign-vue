<template>
  <div :class="cls" @click="handleClick">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, computed } from 'vue'

export default defineComponent({
  name: 'Template',
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
    const cls = computed(() => ['i-template', `i-template--type-${props.type}`])

    const handleClick = (ev: MouseEvent) => {
      if (props.disabled) {
        return
      }
      emit('click', ev)
    }

    return {
      cls,
      handleClick
    }
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
