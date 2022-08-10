<template>
  <div class="i-message">
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
    <slot />
  </div>
</template>

<script setup lang="ts">
import { Icon } from '../icon'

interface MessageProps {
  /**
   * 全局提示类型
   * @default info
   */
  type: 'info' | 'success' | 'warning' | 'error'
}

const {
  type = 'info',
} = defineProps<MessageProps>()
</script>

<style lang="scss">
@import './index.scss';
</style>
