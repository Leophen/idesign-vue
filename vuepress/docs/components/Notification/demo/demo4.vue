<template>
  <div className="idesign-demo-block-row">
    <i-button
      @click="
        () =>
          this.$notification.info(
            '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知',
            0
          )
      "
    >
      通知不关闭（默认）
    </i-button>
    <i-button
      @click="
        () =>
          this.$notification.info({
            title: '这是一条不关闭的通知',
            content:
              '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知',
            duration: 0,
            closeable: true
          })
      "
    >
      通知不关闭（配置项）
    </i-button>
    <i-button
      @click="
        () =>
          this.$notification.info(
            '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知',
            2
          )
      "
    >
      2秒后关闭的通知
    </i-button>
    <i-button
      @click="
        () =>
          this.$notification.info({
            title: '这是一条持续 10 秒的通知',
            content:
              '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知',
            duration: 10
          })
      "
    >
      10秒后关闭的通知
    </i-button>
  </div>
</template>

<script setup></script>
