<template>
  <div className="idesign-demo-block-column">
    <h4>单项禁用</h4>
    <div className="idesign-demo-block-row">
      <i-radio disabled>未选中</i-radio>
      <i-radio type="radio-button" disabled> 未选中 </i-radio>
    </div>

    <h4>单选框组局部禁用</h4>
    <div className="idesign-demo-block-row">
      <i-radio-group :checked="checked" @change="handleChange">
        <i-radio value="1">选项一</i-radio>
        <i-radio value="2" disabled> 选项二 </i-radio>
        <i-radio value="3">选项三</i-radio>
      </i-radio-group>
    </div>
    <div className="idesign-demo-block-row">
      <i-radio-group
        type="radio-button"
        :checked="checked"
        @change="handleChange"
      >
        <i-radio value="1">选项一</i-radio>
        <i-radio value="2">选项二</i-radio>
        <i-radio value="3" disabled> 选项三 </i-radio>
      </i-radio-group>
    </div>

    <h4>单选框组全局禁用</h4>
    <div className="idesign-demo-block-row">
      <i-radio-group disabled>
        <i-radio value="1">选项一</i-radio>
        <i-radio value="2">选项二</i-radio>
        <i-radio value="3">选项三</i-radio>
      </i-radio-group>
    </div>
    <div className="idesign-demo-block-row">
      <i-radio-group disabled type="radio-button">
        <i-radio value="1">选项一</i-radio>
        <i-radio value="2">选项二</i-radio>
        <i-radio value="3">选项三</i-radio>
      </i-radio-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const checked = ref('2')

const handleChange = (val, e) => {
  console.log(val, e)
  checked.value = val
}
</script>
