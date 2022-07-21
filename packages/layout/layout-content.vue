<template>
  <main class="i-layout--content">
    <slot />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LayoutContent'
})
</script>

<style lang="scss">
@import './index.scss';
</style>
