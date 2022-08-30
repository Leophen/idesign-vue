<template>
  <div className="idesign-demo-block-row">
    <i-select v-model="currentValue">
      <i-select-item value="item1">选项一</i-select-item>
      <i-select-item value="item2" divider>选项二</i-select-item>
      <i-select-item value="item3">选项三</i-select-item>
    </i-select>
    <i-select
      v-model="currentValue"
      :options="options"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const options = [
  {
    content: '选项一',
    value: 'item1'
  },
  {
    content: '选项二',
    value: 'item2',
    divider: true
  },
  {
    content: '选项三',
    value: 'item3'
  }
]

const currentValue = ref('item1')
</script>
