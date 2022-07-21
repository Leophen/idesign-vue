<template>
  <i-scrollbar width="100%">
    <div class="idesign-demo-itemx-wrap">
      <div
        class="idesign-demo-itemx"
        v-for="(item, index) in Array(36).fill('item')"
        :key="index"
      >
        {{ item }}
      </div>
    </div>
  </i-scrollbar>
</template>
