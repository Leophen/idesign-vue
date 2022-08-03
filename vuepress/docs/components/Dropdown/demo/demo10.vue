<template>
  <div className="idesign-demo-block-row">
    <i-dropdown :value="currentValue" :options="options" @click="handleSelect">
      <i-button>可选中</i-button>
    </i-dropdown>
    <i-dropdown :value="currentValue" :options="options" @click="handleSelect">
      <i-button>同步对照组</i-button>
    </i-dropdown>
  </div>
</template>

<script setup>
import { ref } from 'vue'

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

const currentValue = ref(2)

const handleSelect = (val) => {
  console.log(val)
  currentValue.value = val
}
</script>
