<template>
  <i-carousel :defaultCurrent="1" @change="handleChange">
    <i-carousel-item>
      <div :style="{ background: 'var(--i-primary)', height: '100%' }">1</div>
    </i-carousel-item>
    <i-carousel-item>
      <div :style="{ background: 'var(--i-primary-disabled)', height: '100%' }">2</div>
    </i-carousel-item>
    <i-carousel-item>
      <div :style="{ background: 'var(--i-primary)', height: '100%' }">3</div>
    </i-carousel-item>
    <i-carousel-item>
      <div :style="{ background: 'var(--i-primary-disabled)', height: '100%' }">4</div>
    </i-carousel-item>
  </i-carousel>
</template>

<script setup>
const handleChange = (val) => {
  console.log(val)
}
</script>
