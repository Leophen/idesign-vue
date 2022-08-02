<template>
  <h4>onInput 输入时触发</h4>
  <i-input @input="handleUsual" />
  <h4>onFocus 聚焦时触发</h4>
  <i-input @focus="handleUsual" />
  <h4>onBlur 失焦时触发</h4>
  <i-input @blur="handleUsual" />
  <h4>onKeyDown 键盘按下时触发</h4>
  <i-input @keyDown="handleUsual" />
  <h4>onEnter 键盘按下回车时触发</h4>
  <i-input @enter="handleUsual" />
  <h4>onKeyUp 键盘释放时触发</h4>
  <i-input @keyUp="handleUsual" />
  <h4>onClear 清空按钮点击时触发</h4>
  <i-input clearable @clear="handleUsual" />
</template>

<script setup>
const handleUsual = (val, e) => {
  console.log(val, e)
}
</script>
