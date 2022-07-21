<template>
  <div :class="cls">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, provide } from 'vue'

export default defineComponent({
  name: 'Layout',
  setup() {
    const asideIds = ref<string[]>([])

    const cls = computed(() => [
      'i-layout',
      asideIds.value.length > 0 && 'i-layout-has-aside'
    ])

    provide('layoutProvide', {
      onAsideMount: (id: string) => asideIds.value.push(id),
      onAsideUnMount: (id: string) => {
        asideIds.value = asideIds.value.filter((_id) => _id !== id)
      }
    })

    return {
      cls
    }
  }
})
</script>

<style lang="scss">
@import './index.scss';
</style>
