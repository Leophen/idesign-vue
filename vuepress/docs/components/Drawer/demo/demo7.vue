<template>
  <div className="idesign-demo-block-row">
    <i-button @click="handleShow1">自定义底部</i-button>
    <i-button @click="handleShow2">隐藏底部内容</i-button>
  </div>

  <i-drawer :visible="visible1" @close="handleHide1">
    <span>自定义底部</span>
    <template #header>
      抽屉框标题
    </template>
    <template #footer>
      <i-button variant="outline" @click="handleHide1">我再想想</i-button>
      <i-button>去意已决</i-button>
    </template>
  </i-drawer>
  <i-drawer :visible="visible2" :hideFooter="true" @close="handleHide2">
    <span>隐藏底部内容</span>
    <template #header>
      抽屉框标题
    </template>
  </i-drawer>
</template>

<script setup>
import { ref } from 'vue'

const visible1 = ref(false)
const visible2 = ref(false)

const handleShow1 = () => {
  visible1.value = true
}
const handleShow2 = () => {
  visible2.value = true
}

const handleHide1 = () => {
  visible1.value = false
}
const handleHide2 = () => {
  visible2.value = false
}
</script>
