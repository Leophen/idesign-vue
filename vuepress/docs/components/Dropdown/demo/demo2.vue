<template>
  <div className="idesign-demo-block-row">
    <i-dropdown size="small" :options="options" @click="handleSelect">
      <i-button>small</i-button>
    </i-dropdown>
    <i-dropdown size="medium" :options="options" @click="handleSelect">
      <i-button>medium</i-button>
    </i-dropdown>
    <i-dropdown size="large" :options="options" @click="handleSelect">
      <i-button>large</i-button>
    </i-dropdown>
  </div>
</template>

<script setup>
const options = [
  {
    content: '操作一',
    value: 1
  },
  {
    content: '操作二',
    value: 2
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
