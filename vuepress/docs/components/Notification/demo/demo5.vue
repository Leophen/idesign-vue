<template>
  <div className="idesign-demo-block-row">
    <i-button
      @click="
        () =>
          this.$notification.info(
            '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知',
            3,
            'top-left'
          )
      "
    >
      展示在左上角的通知
    </i-button>
    <i-button
      @click="
        () =>
          this.$notification.info(
            '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知',
            3,
            'top-right'
          )
      "
    >
      展示在右上角的通知
    </i-button>
    <i-button
      @click="
        () =>
          this.$notification.info({
            title: '默认通知',
            content:
              '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知',
            position: 'bottom-right'
          })
      "
    >
      展示在右下角的通知
    </i-button>
    <i-button
      @click="
        () =>
          this.$notification.info({
            title: '默认通知',
            content:
              '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通知',
            position: 'bottom-left'
          })
      "
    >
      展示在左下角的通知
    </i-button>
  </div>
</template>

<script setup></script>
