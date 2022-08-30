<template>
  <h4>无默认值</h4>
  <i-collapse>
    <i-collapse-item title="折叠标题1">
      折叠内容 1111111111111111111111
    </i-collapse-item>
    <i-collapse-item title="折叠标题2">
      折叠内容 2222222222222222222222
    </i-collapse-item>
    <i-collapse-item title="折叠标题3">
      折叠内容 3333333333333333333333
    </i-collapse-item>
  </i-collapse>

  <h4>有默认值（非受控）</h4>
  <i-collapse :defaultActive="value">
    <i-collapse-item title="折叠标题1">
      折叠内容 1111111111111111111111
    </i-collapse-item>
    <i-collapse-item title="折叠标题2">
      折叠内容 2222222222222222222222
    </i-collapse-item>
    <i-collapse-item title="折叠标题3">
      折叠内容 3333333333333333333333
    </i-collapse-item>
  </i-collapse>

  <h4>有固定值（受控）</h4>
  <i-collapse :modelValue="value">
    <i-collapse-item title="折叠标题1">
      折叠内容 1111111111111111111111
    </i-collapse-item>
    <i-collapse-item title="折叠标题2">
      折叠内容 2222222222222222222222
    </i-collapse-item>
    <i-collapse-item title="折叠标题3">
      折叠内容 3333333333333333333333
    </i-collapse-item>
  </i-collapse>

  <h4>一般用法</h4>
  <i-collapse :modelValue="value" @change="handleChange">
    <i-collapse-item title="折叠标题1">
      折叠内容 1111111111111111111111
    </i-collapse-item>
    <i-collapse-item title="折叠标题2">
      折叠内容 2222222222222222222222
    </i-collapse-item>
    <i-collapse-item title="折叠标题3">
      折叠内容 3333333333333333333333
    </i-collapse-item>
  </i-collapse>

  <h4>v-model 用法</h4>
  <i-collapse v-model="value">
    <i-collapse-item title="折叠标题1">
      折叠内容 1111111111111111111111
    </i-collapse-item>
    <i-collapse-item title="折叠标题2">
      折叠内容 2222222222222222222222
    </i-collapse-item>
    <i-collapse-item title="折叠标题3">
      折叠内容 3333333333333333333333
    </i-collapse-item>
  </i-collapse>
</template>

<script setup>
import { ref } from 'vue'
const value = ref([1])

const handleChange = (val) => {
  console.log(val)
  value.value = val
}
</script>
