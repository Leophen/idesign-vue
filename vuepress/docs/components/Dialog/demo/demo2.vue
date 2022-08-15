<template>
  <i-button @click="handleShow">禁用对话框退出键功能</i-button>
  <i-dialog :visible="visible" :closeOnEsc="false" @close="handleHide">
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
