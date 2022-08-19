<template>
  <Teleport :to="dialogWrapper?? 'body'">
    <Transition name="i-fade">
      <div
        class="i-dialog__mask"
        v-if="visible && showMask"
        @click="closeDialog"
        @scroll="
          () => {
            return
          }
        "
      />
    </Transition>

    <Transition name="i-fade">
      <div
        ref="dialogRef"
        class="i-dialog"
        v-if="visible"
        :style="{ width: turnValue(width) }"
      >
        <div class="i-dialog__close" @click="closeDialog">
          <Icon name="Close" />
        </div>
        <div class="i-dialog__header">
          <slot name="header" />
        </div>
        <div class="i-dialog__body">
          <slot />
        </div>
        <div class="i-dialog__footer">
          <template v-if="$slots.footer">
            <slot name="footer" />
          </template>
          <template v-else>
            <Button variant="outline" @click="closeDialog">取消</Button>
            <Button>确认</Button>
          </template>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Icon } from '../icon'
import { Button } from '../button'
import { hasParent, useContainer, turnValue, isBrowser } from '../common'
import { nextTick, ref, watch } from 'vue'

// 获取触发对话框打开的 DOM 节点原位置
let clickOpenTarget: EventTarget | null
let mousePosition: { x: number; y: number } | null
const getClickPosition = (e: MouseEvent) => {
  clickOpenTarget = e.target
  mousePosition = {
    x: e.clientX,
    y: e.clientY
  }
  setTimeout(() => {
    mousePosition = null
  }, 100)
}
isBrowser() &&
  document.documentElement.addEventListener('click', getClickPosition, true)

// 创建对话框容器
let dialogWrapper: Element
if (isBrowser()) {
  const popupWrapper = useContainer('i-popup-wrapper', document.body)
  dialogWrapper = useContainer('i-dialog-wrapper', popupWrapper)
}

interface DialogProps {
  /**
   * 控制对话框显示隐藏
   * @default false
   */
  visible?: boolean
  /**
   * 按下退出键是否触发关闭事件
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * 是否显示遮罩层
   * @default true
   */
  showMask?: boolean
  /**
   * 对话框宽度
   */
  width?: string | number
}

interface DialogEmits {
  /**
   * 对话框关闭时触发事件
   */
  (type: 'close'): void
}

const {
  visible = false,
  closeOnEsc = true,
  showMask = true,
  width
} = defineProps<DialogProps>()
const emit = defineEmits<DialogEmits>()

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

const closeDialog = () => {
  emit('close')
  closeOnEsc && document.removeEventListener('keydown', handleKeyDown)
}

const dialogRef = ref<HTMLElement>()

const handleClick = (e: MouseEvent) => {
  if (
    !hasParent(e.target as HTMLElement, dialogRef.value as HTMLElement) &&
    e.target !== clickOpenTarget
  ) {
    closeDialog()
    document.removeEventListener('click', handleClick, true)
  }
}

// 打开对话框时禁止背景滚动，对原 overflow 进行备份
let defaultOverFlow = ''
isBrowser() && (defaultOverFlow = document.body.style.overflow)
const bodyOverflow = ref<string>(defaultOverFlow)

watch(
  () => visible,
  (visible) => {
    if (visible) {
      nextTick(() => {
        // 打开对话框时禁止背景滚动
        isBrowser() && (document.body.style.overflow = 'hidden')
        // 退出键功能
        closeOnEsc && document.addEventListener('keydown', handleKeyDown)
        // 展开动画出发点
        if (mousePosition && dialogRef.value) {
          dialogRef.value.style.transformOrigin = `${
            mousePosition.x - dialogRef.value.offsetLeft
          }px ${mousePosition.y - dialogRef.value.offsetTop}px`
        }
        // 无遮罩层时点击关闭功能
        !showMask && document.addEventListener('click', handleClick, true)
      })
    } else {
      // 关闭对话框时恢复背景滚动
      isBrowser() && (document.body.style.overflow = bodyOverflow.value)
    }
  },
  { immediate: true }
)
</script>

<style lang="scss">
@import './index.scss';
</style>
