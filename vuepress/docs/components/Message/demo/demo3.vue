<template>
  <div className="idesign-demo-block-row">
    <i-button @click="() => this.$message.info('这是一条顶部提示', 3, 'top')">
      顶部的提示
    </i-button>
    <i-button @click="() => this.$message.info('这是一条底部提示', 3, 'bottom')">
      底部的提示
    </i-button>
  </div>
</template>

<script setup></script>
