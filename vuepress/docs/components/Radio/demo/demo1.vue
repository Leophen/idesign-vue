<template>
  <div className="idesign-demo-block-column">
    <i-radio>无默认值</i-radio>
    <i-radio :defaultChecked="checked">有默认值（非受控）</i-radio>
    <i-radio :modelValue="checked">有固定值（受控）</i-radio>
    <i-radio :modelValue="checked" @change="handleChange">
      通用方法
    </i-radio>
    <i-radio v-model="checked">v-model 用法</i-radio>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(false)

const handleChange = (val, e) => {
  console.log(val, e)
  checked.value = val
}
</script>
