<template>
  <div
    class="i-color-panel-color"
    :style="{ background: color }"
    @click="handleClick"
  />
</template>

<script setup lang="ts">
interface ColorItemProps {
  /**
   * 颜色
   * @default #5e62ea
   */
  color?: string
}

interface ColorItemEmits {
  /**
   * 点击事件
   */
  (type: 'click', val: string): void
}

const { color = '#5e62ea' } = defineProps<ColorItemProps>()
const emit = defineEmits<ColorItemEmits>()

const handleClick = () => {
  emit('click', color)
}
</script>

<style lang="scss">
@import './index.scss';
</style>
