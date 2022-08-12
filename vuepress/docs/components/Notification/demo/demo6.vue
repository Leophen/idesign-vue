<template>
  <div className="idesign-demo-block-row">
    <i-button
      @click="
        () =>
          this.$notification.info(
            '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知',
            0,
            'top-right',
            true
          )
      "
    >
      显示关闭按钮的通知（默认）
    </i-button>
    <i-button
      @click="
        () =>
          this.$notification.info({
            content: '这是一个没有标题的纯内容通知',
            duration: 0,
            position: 'bottom-right',
            closeable: true
          })
      "
    >
      显示关闭按钮的通知（配置项）
    </i-button>
  </div>
</template>

<script setup>
import { h } from 'vue'
import { Button } from 'idesign-vue'

const a = h('button', '这是通知的内容')
const b = h(Button, '自定义组件内容')
</script>
