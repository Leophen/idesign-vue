<template>
  <h4>无默认值</h4>
  <i-input />
  <h4>有默认值（非受控）</h4>
  <i-input :defaultValue="currentVal" />
  <h4>有固定值（受控）</h4>
  <i-input :value="currentVal" />
  <h4>一般用法</h4>
  <i-input :value="currentVal" @input="handleInput" />
</template>

<script setup>
import { ref } from 'vue'
const currentVal = ref('iDesign')

const handleInput = (val, e) => {
  console.log(val, e)
  currentVal.value = val
}
</script>
