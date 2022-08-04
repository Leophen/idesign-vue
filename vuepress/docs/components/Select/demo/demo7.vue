<template>
  <div className="idesign-demo-block-row">
    <i-select :value="currentValue" @change="handleChange">
      <i-select-item value="item1" title="分组 1">选项一</i-select-item>
      <i-select-item value="item2" divider>选项二</i-select-item>
      <i-select-item value="item3" title="分组 2">选项三</i-select-item>
    </i-select>
    <i-select
      :value="currentValue"
      :options="options"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const options = [
  {
    content: '选项一',
    value: 'item1',
    title: '分组 1'
  },
  {
    content: '选项二',
    value: 'item2',
    divider: true
  },
  {
    content: '选项三',
    value: 'item3',
    title: '分组 2'
  }
]

const currentValue = ref('item1')

const handleChange = (val) => {
  console.log(val)
  currentValue.value = val
}
</script>
