<template>
  <div class="i-upload" @click="handleClickInput">
    <input
      type="file"
      :style="{ display: 'none' }"
      ref="inputRef"
      @change="handleUpload"
    />
    <template v-if="$slots.default">
      <slot />
    </template>
    <template v-else>
      <Button
        type="info"
        variant="outline"
        icon="ArrowLineUpload"
        v-if="theme === 'button'"
      >
        {{ uploadTxt }}
      </Button>
      <div className="i-upload__block" v-if="theme === 'block'">
        <Icon name="ThePlus" :size="20" />
        {{ uploadTxt }}
      </div>
      <div
        :class="['i-upload__drag', ifDragIn && 'i-upload__dragging']"
        draggable
        @dragover="handleDragOver"
        @dragleave="handleDragLeave"
        @drop="handleDragDrop"
        v-if="theme === 'drag'"
      >
        <Icon name="ArrowLineUpload" :size="20" />
        <span class="i-upload-placeholder">{{ uploadTxt }}</span>
        <span class="i-upload-tip">支持不超过 10M 的 excel 类型文件</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Button } from '../button'
import { Icon } from '../icon'
import { Message } from '../message'

interface UploadProps {
  /**
   * 占位符
   */
  placeholder?: string
  /**
   * 上传组件风格
   * @default button
   */
  theme?: 'button' | 'block' | 'drag'
  /**
   * 文件大小限制，单位 M
   * @default 10
   */
  maxSize?: number
}

interface UploadEmits {
  /**
   * 上传时触发
   */
  (type: 'change', file: File): void
}

const {
  placeholder,
  theme = 'button',
  maxSize = 10
} = defineProps<UploadProps>()
const emit = defineEmits<UploadEmits>()

const uploadTxt = ref(
  placeholder ?? (theme === 'drag' ? '点击或拖动到框内上传' : '点击上传')
)

const MAX_SIZE = computed(() => maxSize * 1024 * 1024)

const inputRef = ref<HTMLInputElement>()

const handleClickInput = () => {
  inputRef.value?.click()
}

const uploadFile = (file: File) => {
  if (file) {
    if (file.size > MAX_SIZE.value) {
      const unit = MAX_SIZE.value > 1 * 1024 ? 'M' : 'kb'
      const size = MAX_SIZE.value > 1 * 1024 ? maxSize : maxSize * 1024
      Message.error(`文件大小不得超过 ${size} ${unit}`)
    } else {
      emit('change', file)
    }
  }
}

const handleUpload = (e: Event) => {
  const file = ((e.target as HTMLInputElement).files || [])[0]
  uploadFile(file)
}

const ifDragIn = ref(false)
const setIfDragIn = (ifDrag: boolean) => {
  ifDragIn.value = ifDrag
}

const handleDragOver = (e: MouseEvent) => {
  e.preventDefault()
  setIfDragIn(true)
}

const handleDragLeave = (e: MouseEvent) => {
  setIfDragIn(false)
}

const handleDragDrop = (e: DragEvent) => {
  e.preventDefault()
  const file = e.dataTransfer?.files[0]
  file && uploadFile(file)
  setIfDragIn(false)
}
</script>

<style lang="scss">
@import './index.scss';
</style>
