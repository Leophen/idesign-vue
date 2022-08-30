<template>
  <i-input :maxLength="15" />
  <br />
  <i-input v-model="currentVal" :maxLength="20" />
</template>

<script setup>
import { ref } from 'vue'
const currentVal = ref('iDesign')
</script>
