<template>
  <i-alert type="info" message="这是一条普通的消息提示" />
  <i-alert type="success" message="这是一条成功的消息提示" />
  <i-alert type="warning" message="这是一条警示消息" />
  <i-alert type="error" message="高危操作 / 出错信息提示" />
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
