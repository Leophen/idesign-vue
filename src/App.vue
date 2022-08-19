<template>
  <Test />
  <!-- <Test :defaultValue="val" />
  <Test :value="val" />
  <Test :value="val" @input="handleInput" /> -->
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Test from './testx'

const val = ref('iDesign')

const handleInput = (value: string | number) => {
  val.value = value as string
}
</script>

<style lang="scss">
@import url(../vuepress/docs/.vuepress/styles/index.scss);
</style>
