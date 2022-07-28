<template>
  <h4>无默认值</h4>
  <i-checkbox-group>
    <i-checkbox value="bj">北京</i-checkbox>
    <i-checkbox value="sh">上海</i-checkbox>
    <i-checkbox value="gz">广州</i-checkbox>
    <i-checkbox value="sz">深圳</i-checkbox>
  </i-checkbox-group>
  <h4>有默认值（非受控）</h4>
  <i-checkbox-group :defaultValue="currentValue">
    <i-checkbox value="bj">北京</i-checkbox>
    <i-checkbox value="sh">上海</i-checkbox>
    <i-checkbox value="gz">广州</i-checkbox>
    <i-checkbox value="sz">深圳</i-checkbox>
  </i-checkbox-group>
  <h4>有固定值（受控）</h4>
  <i-checkbox-group :value="currentValue">
    <i-checkbox value="bj">北京</i-checkbox>
    <i-checkbox value="sh">上海</i-checkbox>
    <i-checkbox value="gz">广州</i-checkbox>
    <i-checkbox value="sz">深圳</i-checkbox>
  </i-checkbox-group>
  <h4>通用方法</h4>
  <i-checkbox-group :value="currentValue" @change="handleChange">
    <i-checkbox value="bj">北京</i-checkbox>
    <i-checkbox value="sh">上海</i-checkbox>
    <i-checkbox value="gz">广州</i-checkbox>
    <i-checkbox value="sz">深圳</i-checkbox>
  </i-checkbox-group>
</template>

<script setup>
import { ref } from 'vue'
const currentValue = ref(['gz'])

const handleChange = (val, e) => {
  console.log(val, e)
  currentValue.value = val
}
</script>
