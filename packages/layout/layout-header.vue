<template>
  <header class="i-layout--header">
    <slot />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutHeader'
})
</script>

<style lang="scss">
@import './index.scss';
</style>
