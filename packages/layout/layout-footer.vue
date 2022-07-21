<template>
  <footer class="i-layout--footer">
    <slot />
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutFooter'
})
</script>

<style lang="scss">
@import './index.scss';
</style>
