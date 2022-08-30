<template>
  <h4>无默认值</h4>
  <i-switch />
  <h4>有默认值（非受控）</h4>
  <i-switch :defaultValue="currentVal" />
  <h4>有固定值（受控）</h4>
  <i-switch :modelValue="currentVal" />
  <h4>一般用法</h4>
  <i-switch :modelValue="currentVal" @change="handleChange" />
  <h4>v-model 用法</h4>
  <i-switch v-model="currentVal" />
</template>

<script setup>
import { ref } from 'vue'

const currentVal = ref(true)

const handleChange = (val) => {
  console.log(val)
  currentVal.value = val
}
</script>
