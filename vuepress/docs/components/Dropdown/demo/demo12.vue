<template>
  <div className="idesign-demo-block-row">
    <i-dropdown
      :options="options"
      :value="singleVal"
      @click="handleSingleSelect"
    >
      <i-button>级联单选菜单</i-button>
    </i-dropdown>

    <i-dropdown
      :options="options"
      :value="multiVal"
      :multiple="true"
      @click="handleMultiSelect"
    >
      <i-button>级联多选菜单</i-button>
    </i-dropdown>

    <i-dropdown
      :options="options"
      cascaderDirection="left"
      @click="handleSingleSelect"
    >
      <i-button>向左展开的级联单选菜单</i-button>
    </i-dropdown>

    <i-dropdown
      :options="options"
      :value="multiVal"
      cascaderDirection="left"
      :multiple="true"
      @click="handleMultiSelect"
    >
      <i-button>向左展开的级联多选菜单</i-button>
    </i-dropdown>
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

const singleVal = ref([])
const multiVal = ref([])

const handleMultiSelect = (val) => {
  console.log(val)
  multiVal.value = val
}
const handleSingleSelect = (val) => {
  console.log(val)
  singleVal.value = val
}
</script>
