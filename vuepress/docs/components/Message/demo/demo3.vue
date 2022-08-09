<template>
  <div className="idesign-demo-block-row">
    <i-button @click="() => Message.info('这是一条默认提示', 3, 'top')">
      顶部的提示
    </i-button>
    <i-button @click="() => Message.info('这是一条成功提示', 3, 'bottom')">
      底部的提示
    </i-button>
  </div>
</template>

<script setup>
import { Message } from '../../../../../dist/idesign-vue'
</script>
