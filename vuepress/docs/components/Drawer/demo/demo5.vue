<template>
  <div className="idesign-demo-block-row">
    <i-button @click="() => handleShow('right')">自定义宽度</i-button>
    <i-button @click="() => handleShow('top')">自定义高度</i-button>
  </div>

  <i-drawer
    :visible="visible.right"
    :width="400"
    @close="() => handleHide('right')"
  >
    <span>自定义宽度的抽屉</span>
    <template #header>抽屉标题</template>
  </i-drawer>
  <i-drawer
    :visible="visible.top"
    placement="top"
    :height="400"
    @close="() => handleHide('top')"
  >
    <span>自定义高度的抽屉</span>
    <template #header>抽屉标题</template>
  </i-drawer>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref({
  right: false,
  top: false
})

const handleShow = (placement) => {
  visible.value[placement] = true
}

const handleHide = (placement) => {
  visible.value[placement] = false
}
</script>
