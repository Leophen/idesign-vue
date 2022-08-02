<template>
  <i-input clearable />
  <br />
  <i-input clearable @clear="handleClear" />
</template>

<script setup>
const handleClear = (e) => {
  console.log('clear', e)
}
</script>
