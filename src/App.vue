<template>
  <!-- 直接使用 -->
  <i-grid>
    <i-grid-item span="{8}">
      <div>GridItem1</div>
    </i-grid-item>
    <i-grid-item span="{8}">
      <div>GridItem2</div>
    </i-grid-item>
    <i-grid-item span="{8}">
      <div>GridItem3</div>
    </i-grid-item>
  </i-grid>

  <!-- 遍历使用 -->
  <i-grid v-for="(grid, i) in demoData" :key="i">
    <i-grid-item v-for="(item, j) in grid" :span="item" :key="j">
      <div>{{ item }}</div>
    </i-grid-item>
  </i-grid>

  <!-- span 总和超出换行 -->
  <i-grid>
    <i-grid-item span="{8}">
      <div>span8</div>
    </i-grid-item>
    <i-grid-item span="{8}">
      <div>span8</div>
    </i-grid-item>
    <i-grid-item span="{12}">
      <div>span12</div>
    </i-grid-item>
  </i-grid>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const demoData = ref([
  Array(24).fill(1),
  Array(12).fill(2),
  Array(8).fill(3),
  Array(6).fill(4),
  Array(4).fill(6),
  Array(3).fill(8),
  Array(2).fill(12),
  Array(1).fill(24)
])
</script>

<style lang="scss">
@import url(../vuepress/docs/.vuepress/styles/index.scss);
</style>
