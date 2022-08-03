<template>
  <h4>无默认值</h4>
  <i-popup placement="right">
    <i-button>悬浮提示</i-button>
    <template #content>提示内容</template>
  </i-popup>
  <h4>有默认值（非受控）</h4>
  <i-popup placement="right" :defaultVisible="visible">
    <i-button>悬浮提示</i-button>
    <template #content>提示内容</template>
  </i-popup>
  <h4>有固定值（受控）</h4>
  <i-popup placement="right" :visible="visible">
    <i-button>悬浮提示</i-button>
    <template #content>提示内容</template>
  </i-popup>
  <h4>通用方法</h4>
  <i-popup placement="right" :visible="visible" @trigger="handleTrigger">
    <i-button>悬浮提示</i-button>
    <template #content>提示内容</template>
  </i-popup>
</template>

<script setup>
import { ref } from 'vue'
const visible = ref(true)

const handleTrigger = (val) => {
  visible.value = val
}
</script>
