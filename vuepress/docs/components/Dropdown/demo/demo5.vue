<template>
  <i-dropdown :options="options" @click="handleSelect">
    <i-button>禁用操作二</i-button>
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
    disabled: true
  },
  {
    content: '操作三',
    value: 3
  }
]

const handleSelect = (val) => {
  console.log(val)
}
</script>
