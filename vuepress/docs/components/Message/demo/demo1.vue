<template>
  <div className="idesign-demo-block-row">
    <i-button type="primary" @click="() => this.$message.info('这是一条默认提示')">
      默认提示
    </i-button>
    <i-button type="success" @click="() => this.$message.success('这是一条成功提示')">
      成功提示
    </i-button>
    <i-button type="warning" @click="() => this.$message.warning('这是一条警告提示')">
      警告提示
    </i-button>
    <i-button type="error" @click="() => this.$message.error('这是一条错误提示')">
      错误提示
    </i-button>
  </div>
</template>

<script setup></script>
