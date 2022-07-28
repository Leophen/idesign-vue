<template>
  <div className="idesign-demo-block-column">
    <i-checkbox>无默认值</i-checkbox>
    <i-checkbox :defaultChecked="checked">有默认值（非受控）</i-checkbox>
    <i-checkbox :checked="checked">有固定值（受控）</i-checkbox>
    <i-checkbox :checked="checked" @change="handleChange">
      通用方法
    </i-checkbox>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref(true)

const handleChange = (val, e) => {
  console.log(val, e)
  checked.value = val
}
</script>
