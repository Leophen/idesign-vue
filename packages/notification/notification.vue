<template>
  <div class="i-notification">
    <Icon
      :name="
        {
          info: 'TipInfo',
          success: 'TipCheckFill',
          warning: 'TipWarningFill',
          error: 'TipCloseFill'
        }[type]
      "
      :size="20"
    />
    <div
      :class="[
        'i-notification__main',
        closeable && 'i-notification__main-closeable'
      ]"
    >
      <div class="i-notification__title" v-if="$slots.title">
        <slot name="title" />
      </div>
      <div class="i-notification__content">
        <slot />
      </div>
    </div>
    <div
      class="i-notification__close"
      v-if="closeable"
      @click="() => emit('close')"
    >
      <Icon name="Close" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '../icon'
import { NotificationType } from './type'

interface NotificationProps {
  /**
   * 全局通知类型
   * @default info
   */
  type: NotificationType
  /**
   * 是否可关闭
   * @default false
   */
  closeable?: boolean
}

interface BackTopEmits {
  /**
   * 点击关闭按钮触发
   */
  (type: 'close'): void
}

const { type = 'info', closeable = false } = defineProps<NotificationProps>()
const emit = defineEmits<BackTopEmits>()
</script>

<style lang="scss">
@import './index.scss';
</style>
