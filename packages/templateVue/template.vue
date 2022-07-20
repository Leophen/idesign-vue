<template>
  <template :class="cls" @click="handleClick">
    <slot></slot>
  </template>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, computed } from 'vue'

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
    },
  },
  emits: {
    /**
     * @zh 点击时触发
     * @property {MouseEvent} ev
     */
    click: (ev: MouseEvent) => true
  },
  setup(props, { emit }) {
    const cls = computed(() => [
      'i-template',
      `i-template--type-${props.type}`,
    ])

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
@import './template.scss';
</style>
