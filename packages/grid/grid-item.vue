<template>
  <div :class="cls" :style="style">
    <slot />
  </div>
</template>

<script lang="ts">
import type { PropType } from 'vue'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Grid',
  props: {
    /**
     * 栅格单项的垂直对齐方式
     */
    align: {
      type: String as PropType<'top' | 'middle' | 'bottom'>
    },
    /**
     * 栅格每一项间的间隔
     */
    gutter: {
      type: Number
    },
    /**
     * 栅格左侧的间隔格数，间隔内不可以有栅格
     */
    offset: {
      type: Number
    },
    /**
     * 栅格单项次序
     */
    order: {
      type: Number
    },
    /**
     * 栅格占位格数，为 0 时相当于 display: none
     * @default 24
     */
    span: {
      type: Number,
      default: 24
    },
    /**
     * 自定义单项宽度
     */
    width: {
      type: [Number, String]
    }
  },
  setup(props) {
    const limitNum = (num: number) => {
      let result = parseInt(num.toString())
      if (result > 24) {
        result = 24
      }
      if (result < 0) {
        result = 0
      }
      return result
    }

    const computedWidth = (width: string | number) => {
      if (isNaN(width as number)) {
        return width
      }
      const result = width + 'px'
      return result
    }

    const cls = computed(() => [
      'i-grid__item',
      `i-grid__item--span-${limitNum(props.span)}`,
      props.offset && `i-grid__item--offset-${limitNum(props.offset)}`,
      props.order && `i-grid__item--order-${limitNum(props.order)}`,
      props.align && `i-grid__item--align-${props.align}`
    ])

    const style = computed(() => [
      {
        paddingLeft: props.gutter,
        paddingRight: props.gutter,
        flex: props.width ? `0 0 ${computedWidth(props.width)}` : '1',
        maxWidth: props.width && computedWidth(props.width)
      }
    ])

    return {
      cls,
      style
    }
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
