<template>
  <h4>onInput 输入时触发</h4>
  <i-textarea @input="handleUsual" />
  <h4>onFocus 聚焦时触发</h4>
  <i-textarea @focus="handleUsual" />
  <h4>onBlur 失焦时触发</h4>
  <i-textarea @blur="handleUsual" />
</template>

<script setup>
const handleUsual = (val, e) => {
  console.log(val, e)
}
</script>