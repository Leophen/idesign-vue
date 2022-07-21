<template>
  <i-scrollbar :height="360" @scrollY="handleScroll">
    <div
      className="idesign-demo-itemy"
      v-for="(item, index) in data"
      :key="index"
    >
      {{ item }}
    </div>
  </i-scrollbar>
  <i-scrollbar width="100%" @scrollX="handleScroll">
    <div className="idesign-demo-itemx-wrap">
      <div
        className="idesign-demo-itemx"
        v-for="(item, index) in data"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </i-scrollbar>
</template>

<script setup>
const data = Array(36).fill('item')
const handleScroll = (val) => {
  console.log(val)
}
</script>
