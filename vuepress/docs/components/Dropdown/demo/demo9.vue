<template>
  <div className="idesign-demo-block-row">
    <i-dropdown trigger="click" :options="options" @click="handleSelect">
      <i-button>点击触发</i-button>
    </i-dropdown>
    <i-dropdown trigger="hover" :options="options" @click="handleSelect">
      <i-button>悬浮触发</i-button>
    </i-dropdown>
    <i-dropdown trigger="context-menu" :options="options" @click="handleSelect">
      <i-button>右击触发</i-button>
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
