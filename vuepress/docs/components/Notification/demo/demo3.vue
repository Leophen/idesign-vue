<template>
  <i-button
    @click="
      () =>
        this.$notification.info({
          title: '这是标题',
          content:
            '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知'
        })
    "
  >
    有标题的通知
  </i-button>
</template>

<script setup></script>
