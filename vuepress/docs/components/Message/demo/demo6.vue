<template>
  <div className="idesign-demo-block-row">
    <i-button @click="() => this.$message.info(a)">
      自定义提示内容（默认）
    </i-button>
    <i-button
      @click="
        () =>
          this.$message.info({
            content: b
          })
      "
    >
      自定义提示内容（配置项）
    </i-button>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { Button } from 'idesign-vue'

const a = h('button', '这是提示的内容')
const b = h(Button, '自定义组件内容')
</script>
