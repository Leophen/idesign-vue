<template>
  <!-- <i-back-top :visibleHeight="100" :target="document.getElementById('idesign-demo-scroll2')" /> -->
  <div id="idesign-demo-scroll2" :style="{ height: '400px', overflow: 'auto' }">
    <li
      className="idesign-demo-itemy"
      v-for="(item, index) in data"
      :key="index"
    >
      {{ item }}
    </li>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const data = Array(24).fill('item')
console.log(document.getElementById('idesign-demo-scroll2'),'xxx')
</script>

<style lang="scss">
@import url(../vuepress/docs/.vuepress/styles/index.scss);
</style>
