<template>
  <i-popup content="提示内容">
    <i-button>悬浮提示</i-button>
  </i-popup>
  <i-popup content="提示内容" trigger="click">
    <i-button>点击提示</i-button>
  </i-popup>
  <i-popup content="提示内容" trigger="context-menu">
    <i-button>右击提示</i-button>
  </i-popup>
</template>

<script setup lang="ts"></script>

<style lang="scss">
@import url(../vuepress/docs/.vuepress/styles/index.scss);
</style>
