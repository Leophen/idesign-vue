<template>
  <div className="idesign-demo-block-row">
    <i-button @click="() => this.$message.closeAll()">
      关闭所有提示
    </i-button>
    <i-button @click="() => this.$message.closeAll('top')">
      关闭所有顶部提示
    </i-button>
    <i-button @click="() => this.$message.closeAll('bottom')">
      关闭所有底部提示
    </i-button>
  </div>
</template>

<script setup></script>
