<template>
  <i-scrollbar :height="360" @scrollY="handleScroll">
    <div
      className="idesign-demo-itemy"
      v-for="n in 36"
      :key="n"
    >
      {{ n }}
    </div>
  </i-scrollbar>
  <i-scrollbar width="100%" @scrollX="handleScroll">
    <div className="idesign-demo-itemx-wrap">
      <div
        className="idesign-demo-itemx"
        v-for="n in 36"
        :key="n"
      >
        {{ n }}
      </div>
    </div>
  </i-scrollbar>
</template>

<script setup>
const handleScroll = (val) => {
  console.log(val)
}
</script>
