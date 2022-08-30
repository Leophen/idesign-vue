<template>
  <h4>24小时制 - 时分秒选择器</h4>
  <i-time-picker
    format="HH:mm:ss"
    v-model="currentValue"
  />
  <h4>24小时制 - 时分选择器</h4>
  <i-time-picker
    format="HH:mm"
    v-model="currentValue"
  />
  <h4>12小时制 - 时分秒选择器</h4>
  <i-time-picker
    format="hh:mm:ss A"
    v-model="currentValue"
  />
  <h4>12小时制 - 时分选择器</h4>
  <i-time-picker
    format="hh:mm"
    v-model="currentValue"
  />
  <h4>分秒选择器</h4>
  <i-time-picker
    format="mm:ss"
    v-model="currentValue"
  />
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref('12:34:56')
</script>
