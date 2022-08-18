<template>
  <i-rate allowHalf />
  <br />
  <i-rate
    :value="rate"
    allowHalf
    @change="handleChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const rate = ref(2.5)

const handleChange = (val) => {
  console.log(val)
  rate.value = val
}
</script>
