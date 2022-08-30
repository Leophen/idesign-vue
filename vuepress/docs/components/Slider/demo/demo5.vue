<template>
  <div class="idesign-demo-block-row vertical" :style="{ height: '200px' }">
    <h4>无默认值 →</h4>
    <i-slider layout="vertical" />
    <h4>有默认值（非受控）→</h4>
    <i-slider layout="vertical" :defaultValue="currentVal" />
    <h4>有固定值（受控）→</h4>
    <i-slider layout="vertical" :modelValue="currentVal" />
    <h4>一般用法 →</h4>
    <i-slider
      layout="vertical"
      :modelValue="currentVal"
      :onChange="handleChange"
    />
    <h4>v-model 用法 →</h4>
    <i-slider layout="vertical" v-model="currentVal" />
  </div>
</template>

<script setup>
import { ref } from 'vue'

const currentVal = ref(30)

const handleChange = (val) => {
  console.log(val)
  currentVal.value = val
}
</script>
