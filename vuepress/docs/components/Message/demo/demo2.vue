<template>
  <div className="idesign-demo-block-row">
    <i-button @click="() => this.$message.info('这是一条不关闭的提示', 0)">
      提示不关闭
    </i-button>
    <i-button @click="() => this.$message.success('这是一条持续 2 秒的提示', 2)">
      提示 2 秒后关闭
    </i-button>
    <i-button @click="() => this.$message.warning('这是一条持续 10 秒的提示', 10)">
      提示 10 秒后关闭
    </i-button>
  </div>
</template>

<script setup></script>
