<template>
  <Teleport to="#i-popup-wrapper">
    <button>按钮</button>
  </Teleport>
</template>

<script setup lang="ts">
// 创建气泡提示容器
let popupWrapper = document.querySelector('#i-popup-wrapper')
if (!popupWrapper) {
  popupWrapper = document.createElement('div')
  popupWrapper.className = 'i-popup-wrapper'
  popupWrapper.id = 'i-popup-wrapper'
  document.body.append(popupWrapper)
}
</script>
