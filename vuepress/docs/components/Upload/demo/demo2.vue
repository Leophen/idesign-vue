<template>
  <div className="idesign-demo-block-row">
    <i-upload theme="button" @change="handleChange" />
    <i-upload theme="block" @change="handleChange" />
    <i-upload theme="drag" @change="handleChange" />
  </div>
</template>

<script setup>
const handleChange = (file) => {
  console.log(file)
}
</script>
