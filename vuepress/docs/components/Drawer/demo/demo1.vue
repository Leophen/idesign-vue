<template>
  <i-button @click="handleShow">打开抽屉框</i-button>
  <i-drawer :visible="visible" @close="handleHide">
    <span>抽屉内容</span>
    <template #header>
      抽屉标题
    </template>
  </i-drawer>
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
