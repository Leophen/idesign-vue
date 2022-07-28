<template>
  <h4>无默认值</h4>
  <i-radio-group>
    <i-radio value="1">选项一</i-radio>
    <i-radio value="2">选项二</i-radio>
    <i-radio value="3">选项三</i-radio>
    <i-radio value="4">选项四</i-radio>
  </i-radio-group>
  <h4>有默认值（非受控）</h4>
  <i-radio-group :defaultChecked="checked">
    <i-radio value="1">选项一</i-radio>
    <i-radio value="2">选项二</i-radio>
    <i-radio value="3">选项三</i-radio>
    <i-radio value="4">选项四</i-radio>
  </i-radio-group>
  <h4>有固定值（受控）</h4>
  <i-radio-group :checked="checked">
    <i-radio value="1">选项一</i-radio>
    <i-radio value="2">选项二</i-radio>
    <i-radio value="3">选项三</i-radio>
    <i-radio value="4">选项四</i-radio>
  </i-radio-group>
  <h4>通用方法</h4>
  <i-radio-group :checked="checked" @change="handleChange">
    <i-radio value="1">选项一</i-radio>
    <i-radio value="2">选项二</i-radio>
    <i-radio value="3">选项三</i-radio>
    <i-radio value="4">选项四</i-radio>
  </i-radio-group>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref('2')

const handleChange = (val, e) => {
  console.log(val, e)
  checked.value = val
}
</script>
