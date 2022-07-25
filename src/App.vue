<template>
  <i-button @click="handleClick">悬浮提示</i-button>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const handleClick = (e: MouseEvent) => {
  console.log('click', e)
}
</script>

<style lang="scss">
@import url(../vuepress/docs/.vuepress/styles/index.scss);
</style>
