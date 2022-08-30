<template>
  <i-rate allowHalf />
  <br />
  <i-rate
    v-model="rate"
    allowHalf
  />
</template>

<script setup>
import { ref } from 'vue'

const rate = ref(2.5)
</script>
