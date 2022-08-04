<template>
  <div class="idesign-demo-block-column">
    <div class="idesign-demo-block-row">
      <i-tag addable @add="handleAdd">标签一</i-tag>
      <i-tag icon="TagPrice" addable @add="handleAdd">标签二</i-tag>
      <i-tag closeable @close="handleClose">标签三</i-tag>
      <i-tag icon="TagPrice" closeable @close="handleClose">标签四</i-tag>
    </div>
    <div class="idesign-demo-block-row">
      <i-tag type="primary" addable @add="handleAdd">标签一</i-tag>
      <i-tag type="primary" icon="TagPrice" addable @add="handleAdd">标签二</i-tag>
      <i-tag type="primary" closeable @close="handleClose">标签三</i-tag>
      <i-tag type="primary" icon="TagPrice" closeable @close="handleClose">
        标签四
      </i-tag>
    </div>
    <div class="idesign-demo-block-row">
      <i-tag type="primary" theme="dark" addable @add="handleAdd">标签一</i-tag>
      <i-tag type="primary" theme="dark" icon="TagPrice" addable @add="handleAdd">
        标签二
      </i-tag>
      <i-tag type="primary" theme="dark" closeable @close="handleClose">标签三</i-tag>
      <i-tag type="primary" theme="dark" icon="TagPrice" @click="handleAdd" closeable @close="handleClose">
        标签四
      </i-tag>
    </div>
  </div>
</template>

<script setup>
const handleAdd = () => {
  alert('add')
}

const handleClose = () => {
  alert('close')
}
</script>
