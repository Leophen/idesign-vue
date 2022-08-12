<template>
  <div className="idesign-demo-block-row">
    <i-button
      @click="() => this.$message.info({ content: '这是一条默认提示' })"
    >
      默认提示
    </i-button>
    <i-button
      @click="
        () =>
          this.$message.info({
            content: '这是一条持续 10 秒的提示',
            duration: 10,
            position: 'bottom'
          })
      "
    >
      提示 10 秒后关闭
    </i-button>
  </div>
</template>

<script setup></script>
