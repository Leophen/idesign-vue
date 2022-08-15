<template>
  <i-button @click="handleShow">自定义宽度</i-button>
  <i-dialog :visible="visible" :width="800" @close="handleHide">
    <span>对话框内容</span>
    <template #header>
      对话框标题
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
