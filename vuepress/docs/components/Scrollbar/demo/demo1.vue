<template>
  <i-scrollbar :height="360">
    <div
      class="idesign-demo-itemy"
      v-for="n in 24"
      :key="n"
    >
      {{ n }}
    </div>
  </i-scrollbar>
</template>
