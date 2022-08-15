<template>
  <i-button @click="handleShow">禁用抽屉退出键功能</i-button>
  <i-drawer :visible="visible" :closeOnEsc="false" @close="handleHide">
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
