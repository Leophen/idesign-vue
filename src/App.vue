<template>
  <i-scrollbar :height="360">
    <div
      className="idesign-demo-itemy"
      v-for="(item, index) in Array(24).fill('item')"
      :key="index"
    >
      {{ item }}
    </div>
  </i-scrollbar>
  <ul :style="{ maxHeight: '360px', overflowY: 'auto' }">
    <li v-for="(item, index) in Array(24).fill('item')" :key="index">
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import url(../vuepress/docs/.vuepress/styles/index.scss);
</style>
