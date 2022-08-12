<template>
  <div className="idesign-demo-block-row">
    <i-button @click="() => this.$notification.info(b)">
      自定义通知内容（默认）
    </i-button>
    <i-button
      @click="
        () =>
          this.$notification.info({
            title: a,
            content: b
          })
      "
    >
      自定义通知内容（配置项）
    </i-button>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { Button } from 'idesign-vue'

const a = h('button', '这是通知的标题')
const b = h(Button, '自定义组件内容')
</script>
