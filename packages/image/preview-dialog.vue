<template>
  <div class="i-preview-dialog-wrapper">
    <Transition name="i-fade">
      <div
        class="i-preview-dialog__mask"
        @mousedown="closePreviewDialog"
        @scroll="
          () => {
            return
          }
        "
        v-if="visible"
      >
        <div class="i-preview-dialog__close" @mousedown="closePreviewDialog">
          <Icon name="Close" :size="20" color="#fff" />
        </div>
        <div class="i-preview-dialog__handle" @mousedown="clickHandleBar">
          <section>
            <Icon
              name="SearchSub"
              :size="24"
              color="#fff"
              @click="() => clickHandle('reScale')"
            />
            <Icon
              name="SearchPlus"
              :size="24"
              color="#fff"
              @click="() => clickHandle('scale')"
            />
          </section>
          <Icon
            name="FullScreen"
            :size="24"
            color="#fff"
            @click="() => clickHandle('full')"
          />
          <section>
            <Icon
              name="RefreshLeft"
              :size="24"
              color="#fff"
              @click="() => clickHandle('reRotate')"
            />
            <Icon
              name="RefreshRight"
              :size="24"
              color="#fff"
              @click="() => clickHandle('rotate')"
            />
          </section>
        </div>
        <img
          :style="{
            transform: `scale(${scale}) translate(${position.x}, ${position.y}) rotate(${rotate}deg)`,
            transformOrigin: `${origin.x} ${origin.y}`
          }"
          class="i-preview-img"
          :draggable="false"
          :src="image"
          ref="dialog"
          @wheel="handleWheel"
          @mousedown.stop="handleDown"
          @mouseup="handleUp"
        />
      </div>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import { nextTick, onUnmounted, ref, watch } from 'vue'
import { Icon } from '../icon'

interface PreviewDialogProps {
  /**
   * 显示隐藏
   * @default false
   */
  visible?: boolean
  /**
   * 按下 ESC 是否关闭
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * 图片地址
   */
  image?: string
  /**
   * x 值
   * @default 0
   */
  x?: number
  /**
   * y 值
   * @default 0
   */
  y?: number
}

interface PreviewDialogEmits {
  /**
   * 关闭时触发
   */
  (type: 'close'): void
}

const {
  visible = false,
  closeOnEsc = true,
  image,
  x = 0,
  y = 0
} = defineProps<PreviewDialogProps>()
const emit = defineEmits<PreviewDialogEmits>()

const dialog = ref<HTMLElement>()

const origin = ref({ x: `0px`, y: `0px` })

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

const closePreviewDialog = (e: MouseEvent) => {
  e.stopPropagation()
  emit('close')
  closeOnEsc && document.removeEventListener('keydown', handleKeyDown)
}

const scale = ref(1)
const handleWheel = (e: WheelEvent) => {
  origin.value.x = `${e.clientX - (dialog.value as HTMLElement).offsetLeft}px`
  origin.value.y = `${e.clientY - (dialog.value as HTMLElement).offsetTop}px`

  let newScale = scale.value
  if (e.deltaY > 0) {
    newScale > 0.4 && (newScale -= 0.1)
  } else {
    newScale < 3 && (newScale += 0.1)
  }
  scale.value = newScale
}

const position = ref({ x: '-50%', y: '-50%' })
const start = ref({ x: 0, y: 0 })
const handleDown = (e: MouseEvent) => {
  start.value.x = e.clientX
  start.value.y = e.clientY
  window.addEventListener('mousemove', handleMove)
}
const handleMove = (e: MouseEvent) => {
  position.value.x = `calc(-50% + ${e.clientX - start.value.x}px)`
  position.value.y = `calc(-50% + ${e.clientY - start.value.y}px)`
  window.addEventListener('mouseup', handleUp)
}
const handleUp = () => {
  position.value.x = `-50%`
  position.value.y = `-50%`

  window.removeEventListener('mousemove', handleMove)
  window.removeEventListener('mouseup', handleUp)
}

// 打开对话框时禁止背景滚动，对原 overflow 进行备份
const bodyOverflow = ref<string>(document.body.style.overflow)

const handleCloseImg = () => {
  closeOnEsc && window.removeEventListener('keydown', handleKeyDown)

  // 关闭对话框时恢复背景滚动
  document.body.style.overflow = bodyOverflow.value
}

watch(
  () => visible,
  (visible) => {
    if (visible) {
      // 退出键功能
      closeOnEsc && document.addEventListener('keydown', handleKeyDown)

      // 初始缩放位置
      nextTick(() => {
        origin.value.x = `${x - (dialog.value as HTMLElement).offsetLeft}px`
        origin.value.y = `${y - (dialog.value as HTMLElement).offsetTop}px`
      })
      scale.value = 1

      // 打开对话框时禁止背景滚动
      document.body.style.overflow = 'hidden'
    } else {
      handleCloseImg()
    }
  }
)

onUnmounted(() => {
  handleCloseImg()
})

const clickHandleBar = (e: MouseEvent) => {
  e.stopPropagation()
}

const rotate = ref(0)
const clickHandle = (
  type: 'reScale' | 'scale' | 'full' | 'reRotate' | 'rotate'
) => {
  if (type === 'reScale') {
    let newScale = scale.value
    newScale > 0.4 && (newScale -= 0.1)
    scale.value = newScale
    origin.value.x = `0px`
    origin.value.y = `0px`
  }
  if (type === 'scale') {
    let newScale = scale.value
    newScale < 3 && (newScale += 0.1)
    scale.value = newScale
    origin.value.x = `0px`
    origin.value.y = `0px`
  }
  if (type === 'full') {
    let newScale = 1
    scale.value = newScale
  }
  if (type === 'reRotate') {
    let newRotate = rotate.value - 90
    rotate.value = newRotate
    origin.value.x = `center`
    origin.value.y = `center`
  }
  if (type === 'rotate') {
    let newRotate = rotate.value + 90
    rotate.value = newRotate
    origin.value.x = `center`
    origin.value.y = `center`
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
