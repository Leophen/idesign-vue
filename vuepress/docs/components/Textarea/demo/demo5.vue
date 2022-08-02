<template>
  <i-textarea :maxLength="15" />
  <br />
  <i-textarea
    :value="currentVal"
    :maxLength="20"
    @input="handleInput"
  />
</template>

<script setup>
import { ref } from 'vue'
const currentVal = ref('iDesign')

const handleInput = (val, e) => {
  console.log(val, e)
  currentVal.value = val
}
</script>
