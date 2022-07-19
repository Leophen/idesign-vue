<template>
  <button :class="cls" @click="handleClick">
    <i-icon class="i-button-icon" v-if="!!iconName" :name="iconName" />
    <slot></slot>
  </button>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Button',
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
    /**
     * 按钮尺寸
     * @default medium
     */
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
      default: 'medium'
    },
    /**
     * 按钮类型，用于描述组件不同的应用场景
     * @default primary
     */
    type: {
      type: String as PropType<
        'info' | 'primary' | 'error' | 'warning' | 'success'
      >,
      default: 'primary'
    },
    /**
     * 按钮形式
     * @default base
     */
    variant: {
      type: String as PropType<'base' | 'outline' | 'dashed' | 'text'>,
      default: 'base'
    },
    /**
     * 内置图标
     */
    icon: String
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
      `i-button--type-${props.type}`,
      props.variant !== 'base' && `i-button--variant-${props.variant}`,
      props.size !== 'medium' && `i-button--size-${props.size}`,
      props.shape !== 'round' && `i-button--shape-${props.shape}`,
      props.active && 'i-button-active',
      props.disabled && 'i-button-disabled'
    ])
    const handleClick = (ev: MouseEvent) => {
      if (props.disabled) {
        return
      }
      emit('click', ev)
    }
    return {
      cls,
      iconName: props.icon,
      handleClick
    }
  }
})
</script>

<style lang="scss">
@import './button.scss';
</style>
