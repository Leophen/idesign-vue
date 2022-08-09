<template>
  <div className="idesign-demo-block-row">
    <i-button @click="() => Message.info('这是一条不关闭的提示', 0)">
      提示不关闭
    </i-button>
    <i-button @click="() => Message.success('这是一条持续 2 秒的提示', 2)">
      提示 2 秒后关闭
    </i-button>
    <i-button @click="() => Message.closeAll()">
      关闭所有提示
    </i-button>
  </div>
</template>

<script setup>
import { Message } from '../../../../../dist/idesign-vue'
</script>
