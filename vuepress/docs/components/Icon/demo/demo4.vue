<template>
  <ul class="i-design-demo-icon-list">
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

<script>
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import _ from 'lodash'

export default defineComponent({
  setup() {
    const api =
      'https://at.alicdn.com/t/font_3161433_glke53nnqws.json?spm=a313x.7781069.1998910419.80&file=font_3161433_glke53nnqws.json'

    const sortedIconArr = ref(null)

    onMounted(async () => {
      const data = await axios.get(api).then((res) => {
        return _.sortBy(res.data.glyphs, (item) => item.name)
      })
      sortedIconArr.value = data
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

    return {
      curName,
      sortedIconArr,
      copyed,
      handleCopyName,
      getCls
    }
  }
})
</script>
