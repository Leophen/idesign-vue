<template>
  <div :class="cls" v-if="!closed">
    <i-icon :name="iconName" :size="16" />

    <div class="i-alert--content">
      <div class="i-alert--title" v-if="!!title">
        {{ title }}
      </div>
      <div class="i-alert--description">
        <slot />
        <div class="i-alert--operation" v-if="$slots.operation">
          <slot name="operation" />
        </div>
      </div>
    </div>

    <div class="i-alert--close-btn" v-if="closable" @click="handleCloseAlert">
      <i-icon name="Close" :size="16" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface AlertAttributes {
  /**
   * 是否显示关闭按钮
   * @default false
   */
  closable?: boolean
  /**
   * 标题
   */
  title?: string | HTMLElement
  /**
   * 提示类型
   * @default info
   */
  type?: 'info' | 'success' | 'warning' | 'error'
}

const {
  closable = false,
  title,
  type = 'info'
} = defineProps<AlertAttributes>()

const closed = ref(false)

const handleCloseAlert = () => {
  closed.value = true
}

const cls = computed(() => ['i-alert', `i-alert--type-${type}`])

const iconName = computed(() => {
  return {
    info: 'TipInfo',
    success: 'TipCheckFill',
    warning: 'TipWarningFill',
    error: 'TipCloseFill'
  }[type]
})
</script>

<style lang="scss">
@import './index.scss';
</style>
