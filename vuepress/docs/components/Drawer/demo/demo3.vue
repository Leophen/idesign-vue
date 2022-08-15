<template>
  <i-button @click="handleShow">隐藏遮罩层</i-button>
  <i-drawer :visible="visible" :showMask="false" @close="handleHide">
    <span>抽屉框内容</span>
    <template #header>
      抽屉框标题
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
