<template>
  <i-dropdown :options="options" @click="handleSelect">
    <i-button>限制级联子项高度</i-button>
  </i-dropdown>
</template>

<script setup>
const options = [
  {
    content: '操作 1',
    value: 1
  },
  {
    content: '操作 2',
    value: 2,
    maxHeight: 300,
    children: Array(24).fill({
      content: '操作项',
      value: Math.random()
    })
  },
  {
    content: '操作 3',
    value: 3
  }
]

const handleSelect = (val) => {
  console.log(val)
}
</script>
