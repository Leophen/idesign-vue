<template>
  <div :style="{ width: '600px' }">
    <h4>无默认值</h4>
    <i-slider />
    <h4>有默认值（非受控）</h4>
    <i-slider :defaultValue="currentVal" />
    <h4>有固定值（受控）</h4>
    <i-slider :modelValue="currentVal" />
    <h4>一般用法</h4>
    <i-slider :modelValue="currentVal" @change="handleChange" />
    <h4>v-model 用法</h4>
    <i-slider v-model="currentVal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentVal = ref(30)

const handleChange = (val) => {
  console.log(val)
  currentVal.value = val
}
</script>
