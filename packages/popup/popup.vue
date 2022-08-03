<template>
  <div
    class="i-popup__reference"
    ref="referenceRef"
    @click="handleClickReference"
    @mouseenter="handleHoverReference"
    @contextmenu="handleRClickReference"
  >
    <slot />
  </div>
  <Teleport to="#i-popup-wrapper">
    <Transition name="i-fade">
      <div
        :class="['i-popup', portalClassName]"
        ref="contentRef"
        v-show="!disabled && innerVisible"
      >
        <slot name="content" />
        <div class="i-popup__arrow" ref="arrowRef" />
      </div>
    </Transition>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref, onMounted, nextTick, onUnmounted, computed, watch } from 'vue'
import { createPopper } from '@popperjs/core'
import { hasParent, placementType, triggerType } from '../common'

// 创建气泡提示容器
let popupWrapper = document.querySelector('#i-popup-wrapper')
if (!popupWrapper) {
  popupWrapper = document.createElement('div')
  popupWrapper.className = 'i-popup-wrapper'
  popupWrapper.id = 'i-popup-wrapper'
  document.body.append(popupWrapper)
}

interface PopupProps {
  /**
   * 弹窗内容类名
   */
  portalClassName?: string
  /**
   * 气泡提示位置
   * @default top
   */
  placement?: placementType
  /**
   * 触发气泡出现的方式
   * @default hover
   */
  trigger?: triggerType
  /**
   * 手动显示气泡
   */
  visible?: boolean
  /**
   * 气泡默认显示
   * @default false
   */
  defaultVisible?: boolean
  /**
   * 是否禁用气泡
   * @default false
   */
  disabled?: boolean
}

interface PopupEmits {
  /**
   * 切换显示隐藏时触发
   */
  (type: 'trigger', visible: boolean): void
}

const {
  portalClassName,
  placement = 'top',
  trigger = 'hover',
  visible = undefined,
  defaultVisible = false,
  disabled = false
} = defineProps<PopupProps>()
const emit = defineEmits<PopupEmits>()

const _popupVisible = ref(defaultVisible)
const innerVisible = computed(() => visible ?? _popupVisible.value)

const referenceRef = ref<HTMLElement>()
const contentRef = ref<HTMLElement>()
const arrowRef = ref<HTMLElement>()

let popperInstance: any = null
// 创建 popper 实例
const createPopperInstance = () => {
  nextTick(() => {
    popperInstance = createPopper(
      referenceRef.value?.children[0] as HTMLElement,
      contentRef.value as HTMLElement,
      {
        placement: placement,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: [0, 16]
            }
          }
        ]
      }
    )
    popperInstance.update()
    // 异步更新
    nextTick(() => {
      popperInstance.update()
    })
  })
}

onMounted(() => {
  createPopperInstance()
})

// 通用方法 - 切换气泡显示隐藏
const switchPopupShow = (show: boolean) => {
  if (disabled) {
    return
  }
  show && createPopperInstance()
  _popupVisible.value = show
  emit('trigger', show)
}

// 通用方法 - 判断该位置是否在气泡外
const ifOutContent = (target: HTMLElement) => {
  return !hasParent(target, contentRef.value as HTMLElement)
}

// 通用方法 - 判断该位置是否在触发节点外
const ifOutReference = (target: HTMLElement) => {
  return !hasParent(target, referenceRef.value as HTMLElement)
}

const listenClick = ref(false)
const listenContextMenu = ref(false)

// 悬浮后的操作
const hoverHandle = (e: any) => {
  e.preventDefault()
  // 悬浮位置在气泡外
  if (ifOutContent(e.target)) {
    // 悬浮位置既在气泡外 又在触发节点外
    if (ifOutReference(e.target)) {
      switchPopupShow(false)
    }
    window.removeEventListener('mouseover', hoverHandle)
  }
}

// 鼠标点击后的操作
const clickHandle = (e: MouseEvent) => {
  // 点击位置在气泡外
  if (ifOutContent(e.target as HTMLElement)) {
    // 点击位置既在气泡外 又在触发节点外
    if (ifOutReference(e.target as HTMLElement)) {
      switchPopupShow(false)
    }
    listenClick.value = false
    window.removeEventListener('click', clickHandle)
  }
}

// 鼠标右键后的操作
const rClickHandle = (e: MouseEvent) => {
  e.preventDefault()
  if (ifOutContent(e.target as HTMLElement)) {
    // 点击位置既在气泡外 又在触发节点外
    if (ifOutReference(e.target as HTMLElement)) {
      switchPopupShow(false)
    }
    listenContextMenu.value = false
    window.removeEventListener('click', rClickHandle)
    window.removeEventListener('contextmenu', rClickHandle)
  }
}

watch(
  () => listenClick.value,
  (newVal) => {
    newVal && window.addEventListener('click', clickHandle)
  }
)

watch(
  () => listenContextMenu.value,
  (newVal) => {
    if (newVal) {
      window.addEventListener('click', rClickHandle)
      window.addEventListener('contextmenu', rClickHandle)
    }
  }
)

// 触发节点 - 悬浮
const handleHoverReference = () => {
  if (trigger !== 'hover') {
    return
  }
  const newVal = !innerVisible.value
  switchPopupShow(newVal)
  setTimeout(() => window.addEventListener('mouseover', hoverHandle))
}

// 触发节点 - 点击
const handleClickReference = () => {
  if (trigger !== 'click') {
    return
  }
  const newVal = !innerVisible.value
  switchPopupShow(newVal)
  // 气泡在关闭状态下点击 则监听下一次全局点击事件
  if (newVal) {
    setTimeout(() => (listenClick.value = true))
  }
}

// 触发节点 - 右键
const handleRClickReference = (e: MouseEvent) => {
  if (trigger !== 'context-menu') {
    return
  }
  e.preventDefault()
  const newVal = !innerVisible.value
  switchPopupShow(newVal)
  // 气泡在关闭状态下点击 则监听下一次全局点击事件
  if (newVal) {
    setTimeout(() => (listenContextMenu.value = true))
  }
}

// 销毁时的操作
const removeListen = () => {
  window.removeEventListener('click', clickHandle)
  window.removeEventListener('click', rClickHandle)
  window.removeEventListener('contextmenu', rClickHandle)
}

onUnmounted(() => {
  popperInstance?.destroy?.()
  popperInstance = null
  removeListen()
})
</script>

<style lang="scss">
@import './index.scss';
</style>
