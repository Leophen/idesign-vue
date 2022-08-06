<template>
  <div class="i-color-picker__cursor" ref="cursor" :style="cursorStyle" />
</template>

<script setup lang="ts">
import { computed, onMounted, reactive, ref, watch } from 'vue'

interface ColorCursorProps {
  /**
   * 初始横坐标比例
   */
  x?: number
  /**
   * 初始纵坐标比例
   */
  y?: number
  /**
   * 拖拽方向
   * @default xy
   */
  mode?: 'x' | 'y' | 'xy'
  /**
   * 滑块颜色
   * @default #5e62ea
   */
  color?: string
}

const { x = 0, y = 0, mode = 'xy', color } = defineProps<ColorCursorProps>()

const cursor = ref<any>(null)

const translate = reactive({
  x: 0,
  y: 0
})

const parent = reactive({
  width: 0,
  height: 0
})

onMounted(() => {
  parent.width = cursor.value.parentNode.clientWidth
  parent.height = cursor.value.parentNode.clientHeight
})

watch(
  () => [x, y],
  ([newX, newY]) => {
    if (mode === 'x') {
      translate.x = newX * (parent.width - 12)
    } else if (mode === 'y') {
      translate.y = newY * (parent.height - 12)
    } else {
      translate.x = newX * parent.width - 6
      translate.y = newY * parent.height - 6
    }
  }
)

const cursorStyle = computed(() => [
  {
    transform: `translate(${translate.x}px, ${translate.y}px)`,
    background: color
  }
])
</script>

<style lang="scss">
@import './index.scss';
</style>
