<template>
  <div class="i-popup__reference">
    <section
      @click="handleClick"
      @mouseenter="handleEnter"
      @contextmenu="handleContextMenu"
      ref="triggerNode"
    >
      <slot />
    </section>

    <Portal
      :contentStyle="portalStyle"
      :contentClass="portalClassName"
      :visible="innerVisible && !disabled"
      :placement="placement"
      :top="state.top"
      :left="state.left"
      :width="state.width"
      :height="state.height"
      @getRef="getPopupRef"
    >
      {{ content }}
    </Portal>
  </div>
</template>

<script setup lang="ts">
import {
  CSSProperties,
  reactive,
  ref,
  computed,
  watch,
  onMounted,
  onUnmounted
} from 'vue'
import { placementType, triggerType } from '../common'
import Portal from './portal.vue'

interface PopupProps {
  /**
   * 弹窗内容类名
   */
  portalClassName?: string
  /**
   * 弹窗内容样式
   */
  portalStyle?: CSSProperties
  /**
   * 气泡提示内容
   */
  content?: string | HTMLElement
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
  /**
   * 这个值变化时手动更新位置
   */
  updateLocation?: string | number | boolean
}

interface PopupEmits {
  /**
   * 切换显示隐藏时触发
   */
  (type: 'trigger', visible: boolean): void
}

const {
  portalClassName,
  portalStyle,
  content,
  placement = 'top',
  trigger = 'hover',
  visible = undefined,
  defaultVisible = false,
  disabled = false,
  updateLocation
} = defineProps<PopupProps>()
const emit = defineEmits<PopupEmits>()

const state = reactive({
  top: 0,
  left: 0,
  width: 0,
  height: 0
})

const setTargetLocation = (target: HTMLElement) => {
  const rect = target.getBoundingClientRect()
  state.top = (rect?.top || 0) + window.scrollY
  state.left = (rect?.left || 0) + window.scrollX
  state.width = rect?.width || 0
  state.height = rect?.height || 0
}

const _popupVisible = ref(defaultVisible)
const innerVisible = computed(() => visible ?? _popupVisible.value)
// const [innerVisible, setInnerVisible] = useDefault(visible, defaultVisible)

// 触发节点是否在指定包裹层中
const hasParent = (node: any, parent: HTMLElement | null) => {
  while (node) {
    if (node === parent) {
      return true
    }
    node = node.parentNode
  }
  return false
}

// 初始化更新一次位置
onMounted(() => {
  const currentTriggerNode = (triggerNode.value as any).children[0]
  setTargetLocation(currentTriggerNode)
})

// 手动更新实时位置
const triggerNode = ref(null)
watch(
  () => updateLocation,
  () => {
    const currentTriggerNode = (triggerNode.value as any).children[0]
    setTargetLocation(currentTriggerNode)
  }
)

// 打开气泡通用方法
const switchPopup = (e: MouseEvent, show: boolean) => {
  const currentTriggerNode = (triggerNode.value as any).children[0]
  if (show) {
    setTargetLocation(currentTriggerNode)
  }
  // 设置气泡显示隐藏
  _popupVisible.value = show
  emit('trigger', show)
}

// 关闭气泡通用方法
const closePopup = () => {
  _popupVisible.value = false
  emit('trigger', false)
}

const popupRef = ref(null)
const getPopupRef = (ref: any) => {
  popupRef.value = ref.value
}

// 全局监听事件，判断点击节点是否在气泡内，以确定是否关闭气泡
const listenClick = ref(false)
const ifClickInPopup = (e: any) => {
  // 点击位置在气泡外
  if (!hasParent(e.target, popupRef.value)) {
    // 点击位置既在气泡外 又在触发节点外
    if (!hasParent(e.target, triggerNode.value)) {
      closePopup()
    }
    listenClick.value = false
    window.removeEventListener('click', ifClickInPopup)
  }
}
watch(listenClick, (listenClick) => {
  if (listenClick) {
    window.addEventListener('click', ifClickInPopup)
    return () => window.removeEventListener('click', ifClickInPopup)
  }
})
// 点击触发节点
const handleClick = (e: MouseEvent) => {
  if (trigger === 'click') {
    switchPopup(e, !innerVisible.value)
    // 气泡在关闭状态下点击 则监听下一次全局点击事件
    if (innerVisible.value) {
      setTimeout(() => (listenClick.value = true))
    }
  }
  return
}

// 判断点击和右击节点是否在气泡内
const listenContextMenu = ref(false)
const ifHandleInPopup = (e: any) => {
  e.preventDefault()
  if (!hasParent(e.target, popupRef.value as any)) {
    closePopup()
    listenContextMenu.value = false
    window.removeEventListener('click', ifHandleInPopup)
    window.removeEventListener('contextmenu', ifHandleInPopup)
  }
}
watch(listenContextMenu, (listenContextMenu) => {
  if (listenContextMenu) {
    window.addEventListener('click', ifHandleInPopup)
    window.addEventListener('contextmenu', ifHandleInPopup)
    return () => {
      window.removeEventListener('click', ifHandleInPopup)
      window.removeEventListener('contextmenu', ifHandleInPopup)
    }
  }
})
// 右击触发节点
const handleContextMenu = (e: MouseEvent) => {
  if (trigger === 'context-menu') {
    e.preventDefault()
    switchPopup(e, !innerVisible.value)
    if (innerVisible.value) {
      setTimeout(() => (listenContextMenu.value = true))
    }
  }
  return
}

// 判断悬浮节点是否在气泡内
const ifHoverInPopup = (e: any) => {
  e.preventDefault()
  // 悬浮位置在气泡外
  if (!hasParent(e.target, popupRef.value)) {
    // 悬浮位置既在气泡外 又在触发节点外
    if (!hasParent(e.target, triggerNode.value)) {
      closePopup()
    }
    window.removeEventListener('click', ifClickInPopup)
  }
}

// 悬浮触发节点
const handleEnter = (e: MouseEvent) => {
  if (trigger === 'hover') {
    switchPopup(e, !innerVisible.value)
    setTimeout(() => {
      window.addEventListener('mouseover', ifHoverInPopup)
    })
  }
  return
}

// 触发节点宽高变化时重定位
const resizeObserver = new ResizeObserver((entries) => {
  state.width = entries[0].contentRect.width || 0
  state.height = entries[0].contentRect.height || 0
})
onMounted(() => {
  resizeObserver.observe(triggerNode.value as any)
})
onUnmounted(() => {
  resizeObserver.disconnect()
})
</script>

<style lang="scss">
@import './index.scss';
</style>
