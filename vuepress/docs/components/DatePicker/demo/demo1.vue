<template>
  <h4>无默认值</h4>
  <i-date-picker />
  <h4>有默认值（非受控）</h4>
  <i-date-picker :defaultValue="currentValue" />
  <h4>有固定值（受控）</h4>
  <i-date-picker :modelValue="currentValue" />
  <h4>一般用法</h4>
  <i-date-picker :modelValue="currentValue" @change="handleChange" />
  <h4>v-model 用法</h4>
  <i-date-picker v-model="currentValue" />
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref('2022-05-20')

const handleChange = (val) => {
  console.log(val)
  currentValue.value = val
}
</script>
