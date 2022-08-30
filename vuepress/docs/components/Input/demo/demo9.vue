<template>
  <h4>默认数字输入框</h4>
  <i-input type="number" />
  <h4>隐藏调整控件的数字输入框</h4>
  <i-input type="number" hideNumberBtn />
  <h4>受控且有最大最小值的数字输入框</h4>
  <i-input
    v-model="currentVal"
    type="number"
    :minNumber="1"
    :maxNumber="50"
  />
  <h4>受控且有最大最小值并锁定空值的数字输入框</h4>
  <i-input
    v-model="currentVal"
    type="number"
    :minNumber="1"
    :maxNumber="50"
    minNumberLock
  />
  <h4>慢速拖拽控件且有最大值的数字输入框</h4>
  <i-input
    placeholder="speed 设为 slow + 最大值 100"
    speed="slow"
    type="number"
    :maxNumber="100"
  />
  <h4>快速拖拽控件且有最小值的数字输入框</h4>
  <i-input
    placeholder="speed 设为 fast + 最小值 0"
    speed="fast"
    type="number"
    :minNumber="0"
  />
  <h4>设置精度及数字间隔的数字输入框</h4>
  <i-input
    placeholder="保留 2 位有效数字 + 间隔 0.5"
    type="number"
    :precision="2"
    :step="0.5"
    @input="handleInput"
  />
  <h4>带前后缀图标的数字输入框</h4>
  <i-input
    type="number"
    prefixIcon="TagCollection"
    suffixIcon="Search"
    @clickSuffixIcon="
      () => {
        alert('Search')
      }
    "
  />
</template>

<script setup>
import { ref } from 'vue'
const currentVal = ref('1')

const handleInput = (val, e) => {
  console.log(val, e)
}
</script>
