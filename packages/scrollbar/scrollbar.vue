<template>
  <div
    class="i-scrollbar"
    @mouseenter="state.hoverShowThumb = true"
    @mouseleave="state.hoverShowThumb = false"
  >
    <div
      ref="scrollWrap"
      class="i-scrollbar__wrap"
      :style="scrollWrapStyle"
      @scroll="handleScroll"
    >
      <slot />
    </div>
    <div class="i-scrollbar__barY" @click="handleClickBarY" v-if="height">
      <Transition name="thumb-fade">
        <div
          class="i-scrollbar__thumbY"
          :style="thumbYStyle"
          v-show="state.hoverShowThumb || state.downShowThumb"
          @mousedown="handleDownThumb"
        />
      </Transition>
    </div>
    <div class="i-scrollbar__barX" @click="handleClickBarX" v-if="width">
      <Transition name="thumb-fade">
        <div
          class="i-scrollbar__thumbX"
          :style="thumbXStyle"
          v-show="state.hoverShowThumb || state.downShowThumb"
          @mousedown="handleDownThumb"
        />
      </Transition>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, reactive, ref, watchEffect } from 'vue'

export default defineComponent({
  name: 'Scrollbar',
  props: {
    /**
     * 滚动容器宽度
     */
    width: {
      type: [String, Number]
    },
    /**
     * 滚动容器高度
     */
    height: {
      type: [String, Number]
    }
  },
  emits: {
    /**
     * @zh 水平滚动触发事件
     * @property {number} x
     */
    scrollX: (x: number) => true,
    /**
     * @zh 垂直滚动触发事件
     * @property {number} y
     */
    scrollY: (y: number) => true
  },
  setup(props, { emit }) {
    const state = reactive({
      // 滚动条显示隐藏
      hoverShowThumb: false,
      downShowThumb: false,

      // 视图实际宽高
      viewCurrentWidth: 0,
      viewCurrentHeight: 0,

      // 视图总宽高
      viewWidth: 0,
      viewHeight: 0,

      // 滚动条位置
      thumbLeft: 0,
      thumbTop: 0,

      // 滚动条宽高
      thumbWidth: 0,
      thumbHeight: 0,

      // 视图宽高比滚动条宽高
      scaleX: 1,
      scaleY: 1,

      // 是否为自动滚动状态
      autoScroll: true
    })

    const turnValue = (val: string | number) => {
      const result = typeof val === 'number' ? `${val}px` : String(val)
      return result
    }

    const scrollWrap = ref<any>(null)
    watchEffect(() => {
      // 设置视图实际宽高
      const currentWidth = scrollWrap.value?.clientWidth || 0
      const currentHeight = scrollWrap.value?.clientHeight || 0
      state.viewCurrentWidth = currentWidth
      state.viewCurrentHeight = currentHeight

      // 设置视图总宽高
      const viewWidth = (scrollWrap.value?.scrollWidth || 0) - currentWidth
      const viewHeight = (scrollWrap.value?.scrollHeight || 0) - currentHeight
      state.viewWidth = viewWidth
      state.viewHeight = viewHeight

      // 设置滚动条宽高及视图与滚动条比值
      const currentBarWidth =
        (currentWidth - 4) ** 2 / (scrollWrap.value?.scrollWidth || 1)
      state.thumbWidth = currentBarWidth
      state.scaleX = (currentWidth - currentBarWidth - 4) / currentBarWidth

      const currentBarHeight =
        (currentHeight - 4) ** 2 / (scrollWrap.value?.scrollHeight || 1)
      state.thumbHeight = currentBarHeight
      state.scaleY = (currentHeight - currentBarHeight - 4) / currentBarHeight
    })

    // 滚动触发事件及原比例备份
    const xProportionBackup = ref(0)
    const yProportionBackup = ref(0)
    const emitScrollX = (xpr: number) => {
      if (xProportionBackup.value !== Number(xpr.toFixed(4))) {
        emit('scrollX', Number(xpr.toFixed(4)) || 0)
      }
      xProportionBackup.value = Number(xpr.toFixed(4))
    }
    const emitScrollY = (ypr: number) => {
      if (yProportionBackup.value !== Number(ypr.toFixed(4))) {
        emit('scrollY', Number(ypr.toFixed(4)) || 0)
      }
      yProportionBackup.value = Number(ypr.toFixed(4))
    }

    // 滚动事件触发
    const handleScroll = (e: any) => {
      if (state.autoScroll) {
        // 滚动占比
        const scrollXProportion = e.target.scrollLeft / state.viewWidth || 0
        const scrollYProportion = e.target.scrollTop / state.viewHeight || 0

        emitScrollX(scrollXProportion)
        emitScrollY(scrollYProportion)

        state.thumbLeft = scrollXProportion * state.scaleX * state.thumbWidth
        state.thumbTop = scrollYProportion * state.scaleY * state.thumbHeight
      }
    }

    // 滚动条初始位置
    const startX = ref(0)
    const startY = ref(0)

    // 滚动条聚焦控制
    const handleThumbMove = (e: any) => {
      const maxX = state.viewCurrentWidth - state.thumbWidth - 4
      startX.value += e.movementX
      startX.value < 0 && (startX.value = 0)
      startX.value > maxX && (startX.value = maxX)
      state.thumbLeft = startX.value

      const maxY = state.viewCurrentHeight - state.thumbHeight - 4
      startY.value += e.movementY
      startY.value < 0 && (startY.value = 0)
      startY.value > maxY && (startY.value = maxY)
      state.thumbTop = startY.value

      // 滚动占比
      const scrollXProportion =
        (scrollWrap.value?.scrollLeft || 0) / state.viewWidth || 0
      const scrollYProportion =
        (scrollWrap.value?.scrollTop || 0) / state.viewHeight || 0

      emitScrollX(scrollXProportion)
      emitScrollY(scrollYProportion)

      scrollWrap.value?.scrollTo({
        left:
          (startX.value + state.thumbWidth * scrollXProportion) * state.scaleX,
        top:
          (startY.value + state.thumbHeight * scrollYProportion) * state.scaleY
      })
    }
    const handleThumbUp = () => {
      state.downShowThumb = false
      state.autoScroll = true
      window.removeEventListener('mouseup', handleThumbUp)
      window.removeEventListener('mousemove', handleThumbMove)
    }
    const handleDownThumb = () => {
      state.downShowThumb = true
      state.autoScroll = false
      startX.value = state.thumbLeft
      startY.value = state.thumbTop
      window.addEventListener('mouseup', handleThumbUp)
      window.addEventListener('mousemove', handleThumbMove)
    }

    // 滚动条点击控制
    const handleClickBarX = (e: MouseEvent) => {
      const relativeLeft =
        e.clientX - (e.target as HTMLElement).getBoundingClientRect().left
      state.thumbLeft = relativeLeft

      // 滚动占比
      xProportionBackup.value = 0
      setTimeout(() => {
        const scrollXProportion =
          (scrollWrap.value?.scrollLeft || 0) / state.viewWidth || 0
        emitScrollX(scrollXProportion)
      })

      scrollWrap.value?.scrollTo({
        left: relativeLeft * state.scaleX
      })
    }
    const handleClickBarY = (e: MouseEvent) => {
      const relativeTop =
        e.clientY - (e.target as HTMLElement).getBoundingClientRect().top
      state.thumbTop = relativeTop

      // 滚动占比
      yProportionBackup.value = 0
      setTimeout(() => {
        const scrollYProportion =
          (scrollWrap.value?.scrollTop || 0) / state.viewHeight || 0
        emitScrollY(scrollYProportion)
      })

      scrollWrap.value?.scrollTo({
        top: relativeTop * state.scaleY
      })
    }

    const scrollWrapStyle: any = computed(() => [
      {
        maxHeight: props.height ? turnValue(props.height) : 'auto',
        maxWidth: props.width ? turnValue(props.width) : 'auto',
        userSelect: !state.autoScroll ? 'none' : 'unset'
      }
    ])

    const thumbYStyle: any = computed(() => [
      {
        height: turnValue(state.thumbHeight),
        transform: `translateY(${state.thumbTop}px)`
      }
    ])

    const thumbXStyle: any = computed(() => [
      {
        width: turnValue(state.thumbWidth),
        transform: `translateX(${state.thumbLeft}px)`
      }
    ])

    return {
      state,
      scrollWrap,
      scrollWrapStyle,
      thumbYStyle,
      thumbXStyle,
      handleScroll,
      handleClickBarY,
      handleClickBarX,
      handleDownThumb
    }
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
