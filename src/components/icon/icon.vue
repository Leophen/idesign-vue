<template>
  <i
    :class="cls"
    :style="iconStyles"
  />
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import _ from 'lodash'

export default defineComponent({
  name: 'Icon',
  props: {
    /**
     * 图标名称
     */
    name: {
      type: String,
      default: 'UserAvatar'
    },
    /**
     * 图标名称
     */
    size: [Number, String],
    /**
     * 图标颜色
     */
    color: String,
    /**
     * 是否禁用按钮
     */
    disabled: {
      type: Boolean,
      default: false
    }
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
      'i-icon',
      `icon-${props.name}`,
      props.disabled && 'i-icon-is-disabled'
    ])

    const iconStyles = computed(() => {
      return {
        color: props.color || undefined,
        fontSize: _.isNumber(props.size) ? `${props.size}px` : props.size
      }
    })

    const handleClick = (ev: MouseEvent) => {
      if (props.disabled) {
        return
      }
      emit('click', ev)
    }

    return {
      cls,
      iconStyles,
      handleClick
    }
  }
})
</script>

<style lang="scss">
@import './icon.scss';
</style>
