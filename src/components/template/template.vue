<template>
  <button
    :class="cls"
    @click="handleClick"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Template',
  props: {
    /**
     * 是否禁用按钮
     * @default false
     */
    disabled: {
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
     * @zh 点击按钮时触发
     * @en Emitted when the button is clicked
     * @property {MouseEvent} ev
     */
    click: (ev: MouseEvent) => true
  },
  setup(props, { emit }) {
    const cls = computed(() => [
      'i-button',
      props.disabled && 'i-button-disabled',
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
