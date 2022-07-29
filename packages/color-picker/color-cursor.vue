<template>
  <div class="i-color-picker__cursor" ref="cursor" :style="cursorStyle" />
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue'

interface ColorCursorAttributes {
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

const {
  x = 0,
  y = 0,
  mode = 'xy',
  color
} = defineProps<ColorCursorAttributes>()

const cursor = ref<any>(null)

const translate = ref({
  x: 0,
  y: 0
})

const parent = ref({
  width: 0,
  height: 0
})

onMounted(() => {
  parent.value.width = cursor.current.parentNode.clientWidth
  parent.value.height = cursor.current.parentNode.clientHeight
})

watch(
  () => [x, y],
  ([newX, newY]) => {
    if (mode === 'x') {
      translate.value.x = newX * (parent.value.width - 12)
    } else if (mode === 'y') {
      translate.value.y = newY * (parent.value.height - 12)
    } else {
      translate.value.y = newX * parent.value.width - 6
      translate.value.y = newY * parent.value.height - 6
    }
  }
)

const cursorStyle = computed(() => [
  {
    transform: `translate(${translate.value.x}px, ${translate.value.y}px)`,
    background: color
  }
])
</script>

<style lang="scss">
@import './index.scss';
</style>
