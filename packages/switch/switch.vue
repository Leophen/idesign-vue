<template>
  <button
    type="button"
    role="switch"
    :disabled="disabled"
    :class="[
      'i-switch',
      innerValue && 'i-switch-is-checked',
      (disabled || loading) && 'i-switch-is-disabled',
      size === 'small' && 'i-switch--size-small',
      size === 'large' && 'i-switch--size-large'
    ]"
    :style="{
      backgroundColor: innerValue ? activeColor : inactiveColor
    }"
    @click="handleSwitch"
  >
    <span class="i-switch__handle">
      <i-icon
        name="Loading"
        :size="{ small: 12, medium: 16, large: 20 }[size]"
        v-if="loading"
      />
    </span>
    <div class="i-switch__content">
      <slot name="inactiveLabel" v-if="!innerValue" />
      <slot name="activeLabel" v-if="innerValue" />
    </div>
  </button>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

interface SwitchProps {
  /**
   * 开关尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 开关关闭时的颜色
   */
  inactiveColor?: string
  /**
   * 开关打开时的颜色
   */
  activeColor?: string
  /**
   * 开关关闭时的描述
   */
  inactiveLabel?: string | HTMLElement
  /**
   * 开关打开时的描述
   */
  activeLabel?: string | HTMLElement
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean
  /**
   * 是否为加载状态
   * @default false
   */
  loading?: boolean
  /**
   * 开关固定值（受控）
   */
  value?: boolean
  /**
   * 开关默认值（非受控）
   * @default false
   */
  defaultValue?: boolean
}

interface SwitchEmits {
  /**
   * 切换开关时触发
   */
  (type: 'change', val: boolean): void
}

const {
  size = 'medium',
  disabled = false,
  loading = false,
  inactiveColor,
  activeColor,
  value = undefined,
  defaultValue = false
} = defineProps<SwitchProps>()
const emit = defineEmits<SwitchEmits>()

const _switchValue = ref(defaultValue)
const innerValue = computed(() => value ?? _switchValue.value)

const handleSwitch = () => {
  if (disabled || loading) return
  const newVal = !innerValue.value
  _switchValue.value = newVal
  emit('change', newVal)
}
</script>

<style lang="scss">
@import './index.scss';
</style>
