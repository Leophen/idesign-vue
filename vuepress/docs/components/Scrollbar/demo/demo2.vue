<template>
  <i-scrollbar width="100%">
    <div class="idesign-demo-itemx-wrap">
      <div
        class="idesign-demo-itemx"
        v-for="n in 36"
        :key="n"
      >
        {{ n }}
      </div>
    </div>
  </i-scrollbar>
</template>
