<template>
  <i-button @click="handleShow">隐藏遮罩层</i-button>
  <i-dialog :visible="visible" :showMask="false" @close="handleHide">
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
