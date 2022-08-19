<template>
  <Teleport :to="drawerWrapper?? 'body'">
    <Transition name="i-fade">
      <div
        class="i-drawer__mask"
        v-if="visible && showMask"
        @click="closeDrawer"
      />
    </Transition>

    <Transition :name="`drawer-${placement}`">
      <div
        ref="drawerRef"
        :class="[
          'i-drawer',
          placement !== 'right' && `i-drawer--placement-${placement}`
        ]"
        v-if="visible"
        :style="{ width: turnValue(width), height: turnValue(height) }"
      >
        <div class="i-drawer__close" @click="closeDrawer">
          <Icon name="Close" />
        </div>
        <div class="i-drawer__header">
          <slot name="header" />
        </div>
        <div class="i-drawer__body">
          <slot />
        </div>
        <div class="i-drawer__footer" v-if="!hideFooter">
          <template v-if="$slots.footer">
            <slot name="footer" />
          </template>
          <template v-else>
            <Button variant="outline" @click="closeDrawer">取消</Button>
            <Button>确认</Button>
          </template>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { Icon } from '../icon'
import { Button } from '../Button'
import {
  hasParent,
  isBrowser,
  positionType,
  turnValue,
  useContainer
} from '../common'
import { nextTick, ref, watch } from 'vue'

// 获取触发抽屉打开的 DOM 节点原位置
let clickOpenTarget: EventTarget | null
const getClickPosition = (e: MouseEvent) => {
  clickOpenTarget = e.target
}
isBrowser() &&
  document.documentElement.addEventListener('click', getClickPosition, true)

// 创建抽屉容器
let drawerWrapper: Element
if (isBrowser()) {
  const popupWrapper = useContainer('i-popup-wrapper', document.body)
  drawerWrapper = useContainer('i-drawer-wrapper', popupWrapper)
}

interface DrawerProps {
  /**
   * 控制抽屉显示隐藏
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
   * 是否显示底部内容
   * @default false
   */
  hideFooter?: boolean
  /**
   * 抽屉展开位置
   * @default right
   */
  placement?: positionType
  /**
   * 抽屉宽度
   */
  width?: string | number
  /**
   * 抽屉高度
   */
  height?: string | number
}

interface DrawerEmits {
  /**
   * 抽屉框关闭时触发事件
   */
  (type: 'close'): void
}

const {
  visible = false,
  closeOnEsc = true,
  showMask = true,
  hideFooter = false,
  placement = 'right',
  width,
  height
} = defineProps<DrawerProps>()
const emit = defineEmits<DrawerEmits>()

const handleKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    emit('close')
  }
}

const closeDrawer = () => {
  emit('close')
  closeOnEsc && document.removeEventListener('keydown', handleKeyDown)
}

const drawerRef = ref<HTMLElement>()

const handleClick = (e: MouseEvent) => {
  if (
    !hasParent(e.target as HTMLElement, drawerRef.value as HTMLElement) &&
    e.target !== clickOpenTarget
  ) {
    closeDrawer()
    document.removeEventListener('click', handleClick, true)
  }
}

// 打开抽屉时禁止背景滚动，对原 overflow 进行备份
let defaultOverFlow = ''
isBrowser() && (defaultOverFlow = document.body.style.overflow)
const bodyOverflow = ref<string>(defaultOverFlow)

watch(
  () => visible,
  (visible) => {
    if (visible) {
      nextTick(() => {
        // 打开抽屉时禁止背景滚动
        isBrowser() && (document.body.style.overflow = 'hidden')
        // 退出键功能
        closeOnEsc && document.addEventListener('keydown', handleKeyDown)
        // 无遮罩层时点击关闭功能
        !showMask && document.addEventListener('click', handleClick, true)
      })
    } else {
      // 关闭抽屉时恢复背景滚动
      isBrowser() && (document.body.style.overflow = bodyOverflow.value)
    }
  },
  { immediate: true }
)
</script>

<style lang="scss">
@import './index.scss';
</style>
