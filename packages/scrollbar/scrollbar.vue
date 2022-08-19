<template>
  <div
    class="i-scrollbar"
    @mouseenter="state.hoverShowThumb = true"
    @mouseleave="state.hoverShowThumb = false"
  >
    <div
      ref="scrollWrapRef"
      class="i-scrollbar__wrap"
      :style="scrollWrapStyle"
      @scroll="handleScroll"
    >
      <slot />
    </div>
    <div class="i-scrollbar__barY" @click="handleClickBarY" v-if="height">
      <Transition name="i-fade">
        <div
          class="i-scrollbar__thumbY"
          :style="thumbYStyle"
          v-if="state.hoverShowThumb || state.downShowThumb"
          @mousedown="handleDownThumb"
        />
      </Transition>
    </div>
    <div class="i-scrollbar__barX" @click="handleClickBarX" v-if="width">
      <Transition name="i-fade">
        <div
          class="i-scrollbar__thumbX"
          :style="thumbXStyle"
          v-if="state.hoverShowThumb || state.downShowThumb"
          @mousedown="handleDownThumb"
        />
      </Transition>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, reactive, ref, watchEffect } from 'vue'
import { turnValue } from '../common'

interface ScrollbarProps {
  /**
   * 滚动容器高度
   */
  height?: string | number
  /**
   * 滚动容器宽度
   */
  width?: string | number
}

interface ScrollbarEmits {
  /**
   * 水平滚动触发事件
   */
  (type: 'scrollX', x: number): void
  /**
   * 垂直滚动触发事件
   */
  (type: 'scrollY', y: number): void
}

const { width, height } = defineProps<ScrollbarProps>()
const emit = defineEmits<ScrollbarEmits>()

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

const scrollWrapRef = ref<HTMLElement>()
watchEffect(() => {
  // 设置视图实际宽高
  const currentWidth = scrollWrapRef.value?.clientWidth || 0
  const currentHeight = scrollWrapRef.value?.clientHeight || 0
  state.viewCurrentWidth = currentWidth
  state.viewCurrentHeight = currentHeight

  // 设置视图总宽高
  const viewWidth = (scrollWrapRef.value?.scrollWidth || 0) - currentWidth
  const viewHeight = (scrollWrapRef.value?.scrollHeight || 0) - currentHeight
  state.viewWidth = viewWidth
  state.viewHeight = viewHeight

  // 设置滚动条宽高及视图与滚动条比值
  const currentBarWidth =
    (currentWidth - 4) ** 2 / (scrollWrapRef.value?.scrollWidth || 1)
  state.thumbWidth = currentBarWidth
  state.scaleX = (currentWidth - currentBarWidth - 4) / currentBarWidth

  const currentBarHeight =
    (currentHeight - 4) ** 2 / (scrollWrapRef.value?.scrollHeight || 1)
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
const handleScroll = (e: Event) => {
  if (state.autoScroll) {
    // 滚动占比
    const scrollXProportion =
      (e.target as HTMLElement).scrollLeft / state.viewWidth || 0
    const scrollYProportion =
      (e.target as HTMLElement).scrollTop / state.viewHeight || 0

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
const handleThumbMove = (e: MouseEvent) => {
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
    (scrollWrapRef.value?.scrollLeft || 0) / state.viewWidth || 0
  const scrollYProportion =
    (scrollWrapRef.value?.scrollTop || 0) / state.viewHeight || 0

  emitScrollX(scrollXProportion)
  emitScrollY(scrollYProportion)

  scrollWrapRef.value?.scrollTo({
    left: (startX.value + state.thumbWidth * scrollXProportion) * state.scaleX,
    top: (startY.value + state.thumbHeight * scrollYProportion) * state.scaleY
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
      (scrollWrapRef.value?.scrollLeft || 0) / state.viewWidth || 0
    emitScrollX(scrollXProportion)
  })

  scrollWrapRef.value?.scrollTo({
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
      (scrollWrapRef.value?.scrollTop || 0) / state.viewHeight || 0
    emitScrollY(scrollYProportion)
  })

  scrollWrapRef.value?.scrollTo({
    top: relativeTop * state.scaleY
  })
}

const scrollWrapStyle: any = computed(() => [
  {
    maxHeight: height ? turnValue(height) : 'auto',
    maxWidth: width ? turnValue(width) : 'auto',
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
</script>

<style lang="scss">
@import './index.scss';
</style>
