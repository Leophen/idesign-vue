<template>
  <div className="idesign-demo-block-column">
    <div className="idesign-demo-block-row">
      <i-checkbox size="small">small</i-checkbox>
      <i-checkbox size="medium">medium</i-checkbox>
      <i-checkbox size="large">large</i-checkbox>
    </div>

    <div className="idesign-demo-block-row">
      <i-checkbox-group
        size="small"
        v-model="currentValue"
      >
        <i-checkbox value="bj">北京</i-checkbox>
        <i-checkbox value="sh">上海</i-checkbox>
        <i-checkbox value="gz">广州</i-checkbox>
        <i-checkbox value="sz">深圳</i-checkbox>
      </i-checkbox-group>
    </div>

    <div className="idesign-demo-block-row">
      <i-checkbox-group
        size="medium"
        v-model="currentValue"
      >
        <i-checkbox value="bj">北京</i-checkbox>
        <i-checkbox value="sh">上海</i-checkbox>
        <i-checkbox value="gz">广州</i-checkbox>
        <i-checkbox value="sz">深圳</i-checkbox>
      </i-checkbox-group>
    </div>

    <div className="idesign-demo-block-row">
      <i-checkbox-group
        size="large"
        v-model="currentValue"
      >
        <i-checkbox value="bj">北京</i-checkbox>
        <i-checkbox value="sh">上海</i-checkbox>
        <i-checkbox value="gz">广州</i-checkbox>
        <i-checkbox value="sz">深圳</i-checkbox>
      </i-checkbox-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const currentValue = ref(['gz'])
</script>
