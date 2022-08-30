<template>
  <h4>无默认值</h4>
  <i-menu>
    <i-menu-item>菜单1</i-menu-item>
    <i-menu-item>菜单2</i-menu-item>
    <i-menu-item>菜单3</i-menu-item>
    <i-menu-item>菜单4</i-menu-item>
  </i-menu>

  <h4>有默认值（非受控）</h4>
  <i-menu :defaultActive="active">
    <i-menu-item>菜单1</i-menu-item>
    <i-menu-item>菜单2</i-menu-item>
    <i-menu-item>菜单3</i-menu-item>
    <i-menu-item>菜单4</i-menu-item>
  </i-menu>

  <h4>有固定值（受控）</h4>
  <i-menu :modelValue="active">
    <i-menu-item>菜单1</i-menu-item>
    <i-menu-item>菜单2</i-menu-item>
    <i-menu-item>菜单3</i-menu-item>
    <i-menu-item>菜单4</i-menu-item>
  </i-menu>

  <h4>一般用法</h4>
  <i-menu :modelValue="active" @change="handleChange">
    <i-menu-item>菜单1</i-menu-item>
    <i-menu-item>菜单2</i-menu-item>
    <i-menu-item>菜单3</i-menu-item>
    <i-menu-item>菜单4</i-menu-item>
  </i-menu>

  <h4>v-model 用法</h4>
  <i-menu v-model="active">
    <i-menu-item>菜单1</i-menu-item>
    <i-menu-item>菜单2</i-menu-item>
    <i-menu-item>菜单3</i-menu-item>
    <i-menu-item>菜单4</i-menu-item>
  </i-menu>
</template>

<script setup>
import { ref } from 'vue'

const active = ref('1')

const handleChange = (val) => {
  console.log(val)
  active.value = val
}
</script>
