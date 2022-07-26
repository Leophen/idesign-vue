<template>
  <div>
    <Teleport to="#i-popup-wrapper">
      <Transition name="i-fade">
        <div
          ref="popupRef"
          :class="cls"
          :style="popupStyle"
          v-if="visible"
          :data-popper-placement="state.currentPlacement"
        >
          <div
            class="i-popup__arrow"
            :data-popper-placement="state.currentPlacement"
          />
          <div class="i-popup__text">
            <slot />
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import {
  reactive,
  ref,
  computed,
  watchEffect,
  CSSProperties
} from 'vue'
import { placementType } from '../common'
import { turnValue } from '../common'

interface PortalProps {
  contentClass?: string
  contentStyle?: CSSProperties
  visible?: boolean
  placement?: placementType
  top: number
  left: number
  width: number
  height: number
}

// 创建气泡提示容器
let popupWrapper = document.querySelector('#i-popup-wrapper')
if (!popupWrapper) {
  popupWrapper = document.createElement('div')
  popupWrapper.className = 'i-popup-wrapper'
  popupWrapper.id = 'i-popup-wrapper'
  document.body.append(popupWrapper)
}

const {
  contentClass,
  contentStyle,
  visible = false,
  placement = 'top',
  top,
  left,
  width,
  height
} = defineProps<PortalProps>()

const emit = defineEmits<{
  (type: 'getRef', ref: any): void
}>()

const getLocationStyle = (
  placement: placementType,
  trigger: any,
  popup: any
) => {
  let popupWidth = popup?.width || 0
  let popupHeight = popup?.height || 0
  const xMap = {
    top: turnValue(trigger.left + (trigger.width - popupWidth) / 2),
    'top-left': turnValue(trigger.left),
    'top-right': turnValue(trigger.left + (trigger.width - popupWidth)),
    bottom: turnValue(trigger.left + (trigger.width - popupWidth) / 2),
    'bottom-left': turnValue(trigger.left),
    'bottom-right': turnValue(trigger.left + (trigger.width - popupWidth)),
    left: turnValue(trigger.left - popupWidth - 16),
    'left-top': turnValue(trigger.left - popupWidth - 16),
    'left-bottom': turnValue(trigger.left - popupWidth - 16),
    right: turnValue(trigger.left + trigger.width + 16),
    'right-top': turnValue(trigger.left + trigger.width + 16),
    'right-bottom': turnValue(trigger.left + trigger.width + 16)
  }
  const yMap = {
    top: turnValue(trigger.top - popupHeight - 16),
    'top-left': turnValue(trigger.top - popupHeight - 16),
    'top-right': turnValue(trigger.top - popupHeight - 16),
    bottom: turnValue(trigger.top + trigger.height + 16),
    'bottom-left': turnValue(trigger.top + trigger.height + 16),
    'bottom-right': turnValue(trigger.top + trigger.height + 16),
    left: turnValue(trigger.top + (trigger.height - popupHeight) / 2),
    'left-top': turnValue(trigger.top),
    'left-bottom': turnValue(trigger.top + (trigger.height - popupHeight)),
    right: turnValue(trigger.top + (trigger.height - popupHeight) / 2),
    'right-top': turnValue(trigger.top),
    'right-bottom': turnValue(trigger.top + (trigger.height - popupHeight))
  }
  const result = {
    left: xMap[placement],
    top: yMap[placement]
  }
  return result
}

const popupRef = ref<HTMLDivElement | null>(null)
watchEffect(() => {
  emit('getRef', popupRef)
})

const state = reactive({
  rePlaceNum: 0, // 重置方向次数限制
  styles: {},
  currentPlacement: placement
})

// 更新气泡方向
const updatePlacement = (currentPlacement: placementType) => {
  if (popupRef.value) {
    // 原触发方向
    const direction = currentPlacement.split('-')[0]
    const directionWith = currentPlacement.split('-')[1]
      ? '-' + currentPlacement.split('-')[1]
      : ''
    // 窗口
    const winWidth = window.innerWidth
    const winHeight = window.innerHeight
    // 气泡
    const rect = popupRef.value.getBoundingClientRect()
    const popupWidth = rect.width
    const popupHeight = rect.height
    const popupTop = rect.top
    const popupLeft = rect.left

    let result: string = currentPlacement
    if (popupTop < winHeight && popupLeft < winWidth && state.rePlaceNum < 3) {
      if (direction === 'top' && popupTop < 0) {
        result = 'bottom' + directionWith
      }
      if (direction === 'bottom' && winHeight - popupHeight - popupTop < 0) {
        result = 'top' + directionWith
      }
      if (direction === 'left' && popupLeft < 0) {
        result = 'right' + directionWith
      }
      if (direction === 'right' && winWidth - popupWidth - popupLeft < 0) {
        result = 'left' + directionWith
      }
      state.rePlaceNum += 1
    }

    state.currentPlacement = result as placementType
  }
}

watchEffect(() => {
  updatePlacement(state.currentPlacement)
})

watchEffect(() => {
  const rect = popupRef.value?.getBoundingClientRect()
  state.styles = getLocationStyle(
    state.currentPlacement,
    {
      left: left,
      top: top,
      width: width,
      height: height
    },
    rect
  )
})

const cls = computed(() => ['i-popup', contentClass])

const popupStyle = computed(() => [{ ...contentStyle }, { ...state.styles }])
</script>

<style lang="scss">
@import './index.scss';
</style>
