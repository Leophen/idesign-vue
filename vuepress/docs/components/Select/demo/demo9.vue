<template>
  <div className="idesign-demo-block-row">
    <i-select
      :value="currentValue"
      :options="options"
      multiple
      @change="handleChange"
    />
    <i-select
      :value="currentValue"
      :options="options"
      multiple
      @change="handleChange"
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
    value: 'item2'
  },
  {
    content: '选项三',
    value: 'item3'
  }
]

const currentValue = ref('item1')

const handleChange = (val) => {
  console.log(val)
  currentValue.value = val
}
</script>
