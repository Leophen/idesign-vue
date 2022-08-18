<template>
  <i-upload @change="handleChange" />
</template>

<script setup>
const handleChange = (file) => {
  console.log(file)
}
</script>
