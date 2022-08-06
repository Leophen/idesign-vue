<template>
  <i-color-picker :colorList="defaultColor" />
</template>

<script setup>
const defaultColor = [
  {
    value: 'rgb(206, 55, 46)'
  },
  {
    value: 'rgb(245, 192, 66)'
  },
  {
    value: 'rgb(92, 192, 131)'
  },
  {
    value: 'rgb(86, 116, 245)'
  },
  {
    value: 'rgb(103, 98, 192)'
  }
]
</script>
