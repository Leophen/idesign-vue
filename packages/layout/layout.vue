<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, ref, provide } from 'vue'

const asideIds = ref<string[]>([])

const cls = computed(() => [
  'i-layout',
  asideIds.value.length > 0 && 'i-layout-has-aside'
])

provide('layoutCtx', {
  onAsideMount: (id: string) => asideIds.value.push(id),
  onAsideUnMount: (id: string) => {
    asideIds.value = asideIds.value.filter((_id) => _id !== id)
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
