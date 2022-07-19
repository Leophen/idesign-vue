<template>
  <ul className="i-design-demo-icon-list">
    <li
      v-for="item in sortedIconArr"
      :class="getCls(item.name)"
      :key="item.icon_id"
      @click="handleCopyName(item.name)"
    >
      <Icon :name="item.name" :size="32" />
      <div>{{ item.name }}</div>
    </li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed } from 'vue'
import axios from 'axios'
import _ from 'lodash'

export default defineComponent({
  name: 'Icon',
  props: {
    /**
     * 图标名称
     */
    name: {
      type: String,
      default: 'UserAvatar'
    },
    /**
     * 图标名称
     */
    size: [Number, String],
    /**
     * 图标颜色
     */
    color: String,
    /**
     * 是否禁用按钮
     */
    disabled: {
      type: Boolean,
      default: false
    }
  },
  emits: {
    /**
     * @zh 点击按钮时触发
     * @en Emitted when the button is clicked
     * @property {MouseEvent} ev
     */
    click: (ev: MouseEvent) => true
  },
  setup() {
    const api =
      'https://at.alicdn.com/t/font_3161433_glke53nnqws.json?spm=a313x.7781069.1998910419.80&file=font_3161433_glke53nnqws.json'

    let sortedIconArr: any = []

    onMounted(() => {
      axios
        .get(api)
        .then((res) => {
          sortedIconArr = _.sortBy(res.data.glyphs, (item) => item.name)
        })
        .finally(() => {})
    })

    const copyed = ref(false)
    const curName = ref('')

    const handleCopyName = (value) => {
      navigator.clipboard.writeText(`<Icon name="${value}" />`)
      copyed.value = true
      curName.value = value
      setTimeout(resetCopyTip, 500)
    }

    const resetCopyTip = () => {
      copyed.value = false
      curName.value = ''
      // clearTimeout(resetCopyTip)
    }

    const getCls = (itemName) => {
      return computed(() => [
        'i-design-demo-icon-item',
        curName === itemName && copyed && '-copyed'
      ])
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
