<template>
  <div
    class="i-color-panel-color"
    :style="{ background: color }"
    @click="handleClick"
  />
</template>

<script setup lang="ts">
interface ColorItemAttributes {
  /**
   * 颜色
   * @default #5e62ea
   */
  color?: string
}

interface ButtonEvents {
  /**
   * 点击事件
   */
  (type: 'click', val: string): void
}

const { color = '#5e62ea' } = defineProps<ColorItemAttributes>()
const emit = defineEmits<ButtonEvents>()

const handleClick = () => {
  emit('click', color)
}
</script>

<style lang="scss">
@import './index.scss';
</style>
