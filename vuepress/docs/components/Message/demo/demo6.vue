<template>
  <div className="idesign-demo-block-row">
    <i-button @click="() => this.$message.info(a)">
      自定义提示内容（默认）
    </i-button>
    <i-button
      @click="
        () =>
          this.$message.info({
            content: a
          })
      "
    >
      自定义提示内容（配置项）
    </i-button>
  </div>
</template>

<script setup>
import { h } from 'vue'

const a = h('button', '这是提示的内容')
</script>
