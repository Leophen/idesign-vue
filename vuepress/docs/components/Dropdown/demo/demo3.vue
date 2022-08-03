<template>
  <i-dropdown :options="options" :maxHeight="300" @click="handleSelect">
    <i-button>限制最大高度</i-button>
  </i-dropdown>
</template>

<script setup>
const options = Array(24).fill({
  content: '操作项',
  value: Math.random()
})

const handleSelect = (val) => {
  console.log(val)
}
</script>
