<template>
  <div :class="cls">
    <slot :gutter="gutter" />
  </div>
</template>

<script lang="ts">
import { PropType, provide } from 'vue'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'Grid',
  props: {
    /**
     * 栅格每一项的垂直对齐方式
     * @default top
     */
    align: {
      type: String as PropType<'top' | 'middle' | 'bottom'>,
      default: 'top'
    },
    /**
     * 栅格每一项间的间隔
     */
    gutter: {
      type: Number
    },
    /**
     * 栅格水平排列方式
     * @default start
     */
    justify: {
      type: String as PropType<
        'start' | 'end' | 'center' | 'space-around' | 'space-between'
      >,
      default: 'start'
    }
  },
  setup(props) {
    const cls = computed(() => [
      'i-grid',
      props.align && `i-grid--align-${props.align}`,
      props.justify && `i-grid--justify-${props.justify}`
    ])

    provide('gutter', props.gutter)

    return {
      cls
    }
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
