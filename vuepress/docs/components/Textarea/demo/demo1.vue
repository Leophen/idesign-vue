<template>
  <h4>无默认值</h4>
  <i-textarea />
  <h4>有默认值（非受控）</h4>
  <i-textarea :defaultValue="currentVal" />
  <h4>有固定值（受控）</h4>
  <i-textarea :modelValue="currentVal" />
  <h4>一般用法</h4>
  <i-textarea :modelValue="currentVal" @input="handleInput" />
  <h4>v-model 用法</h4>
  <i-textarea v-model="currentVal" />
</template>

<script setup>
import { ref } from 'vue'
const currentVal = ref('iDesign')

const handleInput = (val, e) => {
  console.log(val, e)
  currentVal.value = val
}
</script>