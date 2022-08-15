<template>
  <i-button @click="handleShow">自定义头部</i-button>
  <i-dialog :visible="visible" @close="handleHide">
    <span>对话框内容</span>
    <template #header>
      <i-icon name="TipWarningFill" />
      <span>这是一个自定义标题</span>
    </template>
  </i-dialog>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref(false)

const handleShow = () => {
  visible.value = true
}

const handleHide = () => {
  visible.value = false
}
</script>
