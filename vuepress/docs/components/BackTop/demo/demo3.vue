<template>
  <i-back-top :visibleHeight="100" target="#idesign-demo-scroll2" />
  <div id="idesign-demo-scroll2" :style="{ height: '400px', overflow: 'auto' }">
    <li
      className="idesign-demo-itemy"
      v-for="(item, index) in data"
      :key="index"
    >
      {{ item }}
    </li>
  </div>
</template>

<script setup>
const data = Array(24).fill('item')
</script>
