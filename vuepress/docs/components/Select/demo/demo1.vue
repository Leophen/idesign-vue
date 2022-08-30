<template>
  <h4>无默认值</h4>
  <i-select>
    <i-select-item value="item1">选项一</i-select-item>
    <i-select-item value="item2">选项二</i-select-item>
    <i-select-item value="item3">选项三</i-select-item>
  </i-select>
  <h4>有默认值（非受控）</h4>
  <i-select :defaultValue="currentValue">
    <i-select-item value="item1">选项一</i-select-item>
    <i-select-item value="item2">选项二</i-select-item>
    <i-select-item value="item3">选项三</i-select-item>
  </i-select>
  <h4>有固定值（受控）</h4>
  <i-select :modelValue="currentValue">
    <i-select-item value="item1">选项一</i-select-item>
    <i-select-item value="item2">选项二</i-select-item>
    <i-select-item value="item3">选项三</i-select-item>
  </i-select>
  <h4>一般用法</h4>
  <i-select :modelValue="currentValue" @change="handleChange">
    <i-select-item value="item1">选项一</i-select-item>
    <i-select-item value="item2">选项二</i-select-item>
    <i-select-item value="item3">选项三</i-select-item>
  </i-select>
  <h4>v-model 用法</h4>
  <i-select v-model="currentValue">
    <i-select-item value="item1">选项一</i-select-item>
    <i-select-item value="item2">选项二</i-select-item>
    <i-select-item value="item3">选项三</i-select-item>
  </i-select>
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref('item1')

const handleChange = (val) => {
  currentValue.value = val
}
</script>
