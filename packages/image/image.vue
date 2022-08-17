<template>
  <div class="i-image" :style="{ width: turnValue(width) }" ref="iImage">
    <Loading v-if="imgUrl === ''" />
    <img class="i-image-img" :src="imgUrl" v-else />
    <div class="i-image-mask" @click="() => setPreviewShow(true)">
      <Icon name="View" color="#fff" />
      预览
    </div>
    <PreviewDialog
      :visible="previewShow"
      :image="imgUrl"
      :x="dialogPosition.x"
      :y="dialogPosition.y"
      @close="() => setPreviewShow(false)"
    />
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { turnValue } from '../common'
import { Icon } from '../icon'
import { Loading } from '../loading'
import PreviewDialog from './preview-dialog.vue'

interface ImageProps {
  /**
   * 图片地址
   */
  src?: string
  /**
   * 图片宽度
   * @default 200
   */
  width?: string | number
}

const { src, width } = defineProps<ImageProps>()

const previewShow = ref(false)
const setPreviewShow = (show: boolean) => {
  previewShow.value = show
}

const iImage = ref<HTMLElement>()
const dialogPosition = ref({ x: 0, y: 0 })

const imgUrl = ref('')
const urlToBase64 = (url: string) => {
  const Img = new Image()
  Img.src = url + '?v=' + Math.random()
  Img.setAttribute('crossOrigin', 'Anonymous')
  Img.onload = function () {
    const canvas = document.createElement('canvas'),
      width = Img.width,
      height = Img.height
    canvas.width = width
    canvas.height = height
    canvas.getContext('2d')?.drawImage(Img, 0, 0, width, height)
    const dataURL = canvas.toDataURL('image/jpeg')
    imgUrl.value = dataURL
  }
}

onMounted(() => {
  src && urlToBase64(src)
  const rect = (iImage.value as HTMLElement).getBoundingClientRect()
  dialogPosition.value.x = rect.left
  dialogPosition.value.y = rect.top
})
</script>

<style lang="scss">
@import './index.scss';
</style>
