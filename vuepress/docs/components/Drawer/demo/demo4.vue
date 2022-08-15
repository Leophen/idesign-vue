<template>
  <div className="idesign-demo-block-row">
    <i-button @click="() => handleShow('right')">默认方向</i-button>
    <i-button @click="() => handleShow('left')">从左展开</i-button>
    <i-button @click="() => handleShow('top')">从上展开</i-button>
    <i-button @click="() => handleShow('bottom')">从下展开</i-button>
  </div>

  <i-drawer
    :visible="visible.right"
    @close="() => handleHide('right')"
  >
    <span>默认方向的抽屉框</span>
    <template #header>抽屉框标题</template>
  </i-drawer>
  <i-drawer
    :visible="visible.left"
    placement="left"
    @close="() => handleHide('left')"
  >
    <span>从左展开的抽屉框</span>
    <template #header>抽屉框标题</template>
  </i-drawer>
  <i-drawer
    :visible="visible.top"
    placement="top"
    @close="() => handleHide('top')"
  >
    <span>从上展开的抽屉框</span>
    <template #header>抽屉框标题</template>
  </i-drawer>
  <i-drawer
    :visible="visible.bottom"
    placement="bottom"
    @close="() => handleHide('bottom')"
  >
    <span>从下展开的抽屉框</span>
    <template #header>抽屉框标题</template>
  </i-drawer>
</template>

<script setup>
import { ref } from 'vue'

const visible = ref({
  right: false,
  left: false,
  top: false,
  bottom: false
})

const handleShow = (placement) => {
  visible.value[placement] = true
}

const handleHide = (placement) => {
  visible.value[placement] = false
}
</script>
