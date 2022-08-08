<template>
  <h4>24小时制 - 时分秒选择器</h4>
  <i-time-picker
    format="HH:mm:ss"
    :value="currentValue"
    @change="handleChange"
  />
  <h4>24小时制 - 时分选择器</h4>
  <i-time-picker
    format="HH:mm"
    :value="currentValue"
    @change="handleChange"
  />
  <h4>12小时制 - 时分秒选择器</h4>
  <i-time-picker
    format="hh:mm:ss A"
    :value="currentValue"
    @change="handleChange"
  />
  <h4>12小时制 - 时分选择器</h4>
  <i-time-picker
    format="hh:mm"
    :value="currentValue"
    @change="handleChange"
  />
  <h4>分秒选择器</h4>
  <i-time-picker
    format="mm:ss"
    :value="currentValue"
    @change="handleChange"
  />
</template>

<script setup>
import { ref } from 'vue'

const currentValue = ref('12:34:56')

const handleChange = (val) => {
  console.log(val)
  currentValue.value = val
}
</script>
