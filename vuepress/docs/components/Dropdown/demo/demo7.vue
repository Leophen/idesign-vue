<template>
  <i-dropdown :options="options" @click="handleSelect">
    <i-button>带分组标题的下拉项</i-button>
  </i-dropdown>
</template>

<script setup>
const options = [
  {
    content: '操作一',
    value: 1,
    title: '分组 1'
  },
  {
    content: '操作二',
    value: 2,
    divider: true
  },
  {
    content: '操作三',
    value: 3,
    title: '分组 2'
  }
]

const handleSelect = (val) => {
  console.log(val)
}
</script>
