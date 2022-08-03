<template>
  <div className="idesign-demo-block-row">
    <i-dropdown :options="options" @click="handleSelect">
      <i-button>级联菜单</i-button>
    </i-dropdown>
    <i-dropdown
      :options="options"
      :value="currentValue"
      :multiple="true"
      @click="handleSelect"
    >
      <i-button>级联多选菜单</i-button>
    </i-dropdown>
    <i-dropdown
      :options="options"
      cascaderDirection="left"
      @click="handleSelect"
    >
      <i-button>向左展开的级联菜单</i-button>
    </i-dropdown>
    <i-dropdown
      :options="options"
      :value="currentValue"
      cascaderDirection="left"
      :multiple="true"
      @click="handleSelect"
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

const currentValue = ref([])

const handleSelect = (val) => {
  console.log(val)
  currentValue.value = val
}
</script>
