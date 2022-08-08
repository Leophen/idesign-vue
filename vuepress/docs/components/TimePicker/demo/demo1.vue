<template>
  <h4>无默认值</h4>
  <i-time-picker />
  <h4>有默认值（非受控）</h4>
  <i-time-picker :defaultValue="currentValue" />
  <h4>有固定值（受控）</h4>
  <i-time-picker :value="currentValue" />
  <h4>一般用法</h4>
  <i-time-picker :value="currentValue" @change="handleChange" />
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref('12:34:56')

const handleChange = (val) => {
  console.log(val)
  currentValue.value = val
}
</script>
