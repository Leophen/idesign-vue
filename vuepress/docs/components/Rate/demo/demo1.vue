<template>
  <h4>无默认值</h4>
  <i-rate />
  <h4>有默认值（非受控）</h4>
  <i-rate :defaultValue="rate" />
  <h4>有固定值（受控）</h4>
  <i-rate :modelValue="rate" />
  <h4>一般用法</h4>
  <i-rate :modelValue="rate" @change="handleChange" />
  <h4>v-model 用法</h4>
  <i-rate v-model="rate" />
</template>

<script setup>
import { ref } from 'vue'

const rate = ref(3)

const handleChange = (val) => {
  console.log(val)
  rate.value = val
}
</script>
