<template>
  <i-scrollbar :height="360">
    <div
      class="idesign-demo-itemy"
      v-for="(item, index) in Array(24).fill('item')"
      :key="index"
    >
      {{ item }}
    </div>
  </i-scrollbar>
</template>
