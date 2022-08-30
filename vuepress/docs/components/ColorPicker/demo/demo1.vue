<template>
  <h4>无默认值</h4>
  <i-color-picker />
  <h4>有默认值（非受控）</h4>
  <i-color-picker :defaultValue="currentValue" />
  <h4>有固定值（受控）</h4>
  <i-color-picker :modelValue="currentValue" />
  <h4>一般用法</h4>
  <i-color-picker
    :modelValue="currentValue"
    @change="handleChange"
    @trigger="handleTrigger"
  />
  <h4>v-model 用法</h4>
  <i-color-picker
    v-model="currentValue"
    @trigger="handleTrigger"
  />
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref('rgb(92, 192, 131)')

const handleChange = (val) => {
  console.log(val)
  currentValue.value = val
}

const handleTrigger = (val, visible) => {
  console.log(val, visible)
}
</script>
