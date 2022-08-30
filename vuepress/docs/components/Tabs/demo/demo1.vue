<template>
  <h4>无默认值</h4>
  <i-tabs>
    <i-tabs-item>选项卡1</i-tabs-item>
    <i-tabs-item>选项卡22</i-tabs-item>
    <i-tabs-item>选项卡333</i-tabs-item>
  </i-tabs>

  <h4>有默认值（非受控）</h4>
  <i-tabs :defaultActive="active">
    <i-tabs-item>选项卡1</i-tabs-item>
    <i-tabs-item>选项卡22</i-tabs-item>
    <i-tabs-item>选项卡333</i-tabs-item>
  </i-tabs>

  <h4>有固定值（受控）</h4>
  <i-tabs :modelValue="active">
    <i-tabs-item>选项卡1</i-tabs-item>
    <i-tabs-item>选项卡22</i-tabs-item>
    <i-tabs-item>选项卡333</i-tabs-item>
  </i-tabs>

  <h4>一般用法</h4>
  <i-tabs :modelValue="active" @change="handleChange">
    <i-tabs-item>选项卡1</i-tabs-item>
    <i-tabs-item>选项卡22</i-tabs-item>
    <i-tabs-item>选项卡333</i-tabs-item>
  </i-tabs>

  <h4>v-model 用法</h4>
  <i-tabs v-model="active">
    <i-tabs-item>选项卡1</i-tabs-item>
    <i-tabs-item>选项卡22</i-tabs-item>
    <i-tabs-item>选项卡333</i-tabs-item>
  </i-tabs>
</template>

<script setup>
import { ref } from 'vue'

const active = ref(1)

const handleChange = (val) => {
  console.log(val)
  active.value = val
}
</script>
