<template>
  <ul class="i-design-demo-icon-list" v-if="iconShow">
    <li
      v-for="item in sortedIconArr"
      :class="getCls(item.name)"
      :key="item.icon_id"
      @click="handleCopyName(item.name)"
    >
      <i-icon :name="item.name" :size="32" />
      <div>{{ item.name }}</div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from 'vue'
import axios from 'axios'
import _ from 'lodash'

const api =
  'https://at.alicdn.com/t/font_3161433_glke53nnqws.json?spm=a313x.7781069.1998910419.80&file=font_3161433_glke53nnqws.json'

const sortedIconArr = ref(null)

const iconShow = ref(false)

onMounted(async () => {
  iconShow.value = true
  const data = await axios.get(api).then((res) => {
    return _.sortBy(res.data.glyphs, (item) => item.name)
  })
  sortedIconArr.value = data
})

onUnmounted(() => {
  iconShow.value = false
})

const copyed = ref(false)
const curName = ref('')

const handleCopyName = (name) => {
  navigator.clipboard.writeText(`<i-icon name="${name}" />`)
  copyed.value = true
  curName.value = name
  setTimeout(resetCopyTip, 500)
}

const resetCopyTip = () => {
  copyed.value = false
  curName.value = ''
  // @ts-ignore
  clearTimeout(resetCopyTip)
}

const getCls = (itemName) => {
  return {
    'i-design-demo-icon-item': true,
    '-copyed': curName.value === itemName && copyed.value
  }
}
</script>

<style lang="scss">
.i-design-demo-icon-list {
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  box-sizing: border-box;
  padding: 0;
  overflow: hidden;
  color: var(--i-font-3);
  border: 1px solid var(--i-border);
  border-radius: 10px;
  text-size-adjust: 100%;
}

.i-design-demo-icon-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  height: 125px;
  color: var(--i-font-2);
  font-size: 15px;
  line-height: 1.8;
  text-align: center;
  list-style: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background 0.2s;
  text-size-adjust: 100%;
  &:hover {
    background: var(--i-bg-hover);
  }
  &::after {
    position: absolute;
    top: 4px;
    color: var(--i-font-3);
    font-size: 14px;
    opacity: 0;
    transition: all 0.1s ease-out;
    content: '已复制组件';
  }
  &.-copyed {
    &::after {
      opacity: 1;
    }
  }
}
</style>
