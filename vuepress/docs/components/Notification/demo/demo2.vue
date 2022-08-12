<template>
  <div className="idesign-demo-block-row">
    <i-button
      type="primary"
      @click="
        () =>
          this.$notification.info({
            content:
              '这是一条消息通知这是一条消息通知这是一条消息通知这是一条消息通这是一条消息通知'
          })
      "
    >
      默认通知
    </i-button>
    <i-button
      type="success"
      @click="
        () =>
          this.$notification.success({
            content:
              '这是一条成功通知这是一条成功通知这是一条成功通知这是一条成功通知这是一条成功通知'
          })
      "
    >
      成功通知
    </i-button>
    <i-button
      type="warning"
      @click="
        () =>
          this.$notification.warning({
            content:
              '这是一条警告通知这是一条警告通知这是一条警告通知这是一条警告通知这是一条警告通知'
          })
      "
    >
      警告通知
    </i-button>
    <i-button
      type="error"
      @click="
        () =>
          this.$notification.error({
            content:
              '这是一条错误通知这是一条错误通知这是一条错误通知这是一条错误通知这是一条错误通知'
          })
      "
    >
      错误通知
    </i-button>
  </div>
</template>

<script setup></script>
