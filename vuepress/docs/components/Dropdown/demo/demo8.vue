<template>
  <i-dropdown :options="options">
    <i-button>点击操作二触发</i-button>
  </i-dropdown>
</template>

<script setup>
const options = [
  {
    content: '操作一',
    value: 1
  },
  {
    content: '操作二',
    value: 2,
    onClick: (item, e) => {
      console.log(item, e)
    }
  },
  {
    content: '操作三',
    value: 3
  }
]
</script>
