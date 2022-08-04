<template>
  <div className="idesign-demo-block-row">
    <i-select
      placeholder="级联选择器"
      :value="currentValue"
      :options="options"
      @change="handleChange"
    />
    <i-select
      placeholder="级联多选选择器"
      :value="currentValue"
      :options="options"
      :multiple="true"
      @change="handleChange"
    />
    <i-select
      placeholder="向左展开的级联选择器"
      :value="currentValue"
      :options="options"
      cascaderDirection="left"
      @change="handleChange"
    />
    <i-select
      placeholder="向左展开的级联多选选择器"
      :value="currentValue"
      :options="options"
      cascaderDirection="left"
      :multiple="true"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const options = [
  {
    content: '操作 1',
    value: 1
  },
  {
    content: '操作 2',
    value: 2,
    children: [
      {
        content: '操作 2-1',
        value: 2.1
      },
      {
        content: '操作 2-2',
        value: 2.2,
        children: [
          {
            content: '操作 2-2-1',
            value: 2.21
          },
          {
            content: '操作 2-2-2',
            value: 2.22
          },
          {
            content: '操作 2-2-3',
            value: 2.23
          }
        ]
      },
      {
        content: '操作 2-3',
        value: 2.3
      }
    ]
  },
  {
    content: '操作 3',
    value: 3
  }
]

const currentValue = ref([])

const handleChange = (val) => {
  console.log(val)
  currentValue.value = val
}
</script>
