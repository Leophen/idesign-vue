# Icon 图标

iDesign 提供了一套常用的图标集合，可直接使用。

## 基本用法

使用 `name` 属性选择展示的图标。

::: demo
Icon/demo/demo1
:::

## 不同尺寸

提供 `size` 属性自定义图标大小。

::: demo
Icon/demo/demo2
:::

## 不同颜色

提供 `color` 属性自定义图标大小。

::: demo
Icon/demo/demo3
:::

## 全部图标

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

<script lang="ts">
import { defineComponent, ref, onMounted } from 'vue'
import axios from 'axios'
import _ from 'lodash'

export default defineComponent({
  setup() {
    const api =
      'https://at.alicdn.com/t/font_3161433_glke53nnqws.json?spm=a313x.7781069.1998910419.80&file=font_3161433_glke53nnqws.json'

    const sortedIconArr: any = ref(null)

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

## Icon API

| 属性     | 说明             | 类型                       | 默认值  |
| -------- | ---------------- | -------------------------- | ------- |
| name     | 图标名称         | `string`                   | `--`    |
| size     | 图标尺寸         | `string〡number`           | `16`    |
| color    | 图标颜色         | `string`                   | `--`    |
| disabled | 是否禁用图标     | `boolean`                  | `false` |
| @click   | 点击图标触发事件 | `(ev: MouseEvent) => true` | `--`    |
