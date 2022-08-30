<template>
  <i-menu
    :width="200"
    direction="vertical"
    :modelValue="active"
    @change="handleChange"
  >
    <i-menu-item>菜单1</i-menu-item>
    <i-menu-group title="菜单2">
      <i-menu-item>菜单2-1</i-menu-item>
      <i-menu-group title="菜单2-2">
        <i-menu-item>菜单2-2-1</i-menu-item>
        <i-menu-item>菜单2-2-2</i-menu-item>
        <i-menu-item>菜单2-2-3</i-menu-item>
        <i-menu-item value="menu2-2-4">菜单2-2-4</i-menu-item>
      </i-menu-group>
      <i-menu-item value="menu2-3">菜单2-3</i-menu-item>
    </i-menu-group>
    <i-menu-item>菜单3</i-menu-item>
    <i-menu-item>菜单4</i-menu-item>

    <template #prefixContent>
      <img src="/images/logo.svg" />
    </template>
    <template #suffixContent>
      <div>个人中心</div>
    </template>
  </i-menu>
</template>

<script setup>
import { ref } from 'vue'

const active = ref('menu2-2-4')

const handleChange = (val) => {
  console.log(val)
  active.value = val
}
</script>
