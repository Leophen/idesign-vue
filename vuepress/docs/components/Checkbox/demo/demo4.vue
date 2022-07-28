<template>
  <div className="idesign-demo-block-column">
    <h3>单项禁用</h3>

    <div className="idesign-demo-block-row">
      <i-checkbox disabled>未选中</i-checkbox>
    </div>

    <h3>多选框组局部禁用</h3>

    <div className="idesign-demo-block-row">
      <i-checkbox-group :value="currentValue" @change="handleChange">
        <i-checkbox value="bj">北京</i-checkbox>
        <i-checkbox value="sh">上海</i-checkbox>
        <i-checkbox value="gz">广州</i-checkbox>
        <i-checkbox value="sz" disabled> 深圳 </i-checkbox>
      </i-checkbox-group>
    </div>

    <h3>多选框组全局禁用</h3>

    <div className="idesign-demo-block-row">
      <i-checkbox-group
        disabled
        :value="currentValue"
        @change="handleChange"
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

const handleChange = (val, e) => {
  console.log(val, e)
  currentValue.value = val
}
</script>
