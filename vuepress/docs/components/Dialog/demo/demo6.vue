<template>
  <i-button @click="handleShow">自定义底部</i-button>
  <i-dialog :visible="visible" @close="handleHide">
    <span>对话框内容</span>
    <template #header>
      对话框标题
    </template>
    <template #footer>
      <i-button variant="outline" @click="handleHide">
        我再想想
      </i-button>
      <i-button>去意已决</i-button>
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
