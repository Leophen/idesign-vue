<template>
  <div className="idesign-demo-block-row">
    <i-button @click="() => this.$notification.clear()">关闭所有通知</i-button>
    <i-button @click="() => this.$notification.clear('top-left')">
      关闭左上角通知
    </i-button>
    <i-button @click="() => this.$notification.clear('top-right')">
      关闭右上角通知
    </i-button>
    <i-button @click="() => this.$notification.clear('bottom-left')">
      关闭左下角通知
    </i-button>
    <i-button @click="() => this.$notification.clear('bottom-right')">
      关闭右下角通知
    </i-button>
  </div>
</template>

<script setup></script>
