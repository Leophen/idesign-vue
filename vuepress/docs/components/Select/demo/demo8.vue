<template>
  <div className="idesign-demo-block-row">
    <i-select
      :options="options"
      prefixIcon="Search"
    />
    <i-select
      :options="options"
      suffixIcon="Search"
    />
  </div>
</template>

<script setup>
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
</script>
