<template>
  <div class="i-color-picker">
    <Popup
      :visible="visible"
      :disabled="disabled"
      trigger="click"
      placement="bottom-start"
      noPadding
      @trigger="popupChange"
    >
      <div
        :class="[
          'i-color',
          disabled && 'i-color__disabled',
          size && `i-color--size-${size}`,
          triggerClassName
        ]"
        :style="{ ...triggerStyle, background: innerValue }"
      ></div>
      <template #content>
        <ColorPanel
          :value="innerValue"
          :colorList="colorList"
          @change="handleChange"
          @close="handleClose"
        />
      </template>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import { computed, CSSProperties, ref } from 'vue'
import { Popup } from '../Popup'
import ColorPanel from './color-panel.vue'
// @ts-ignore
import { colorListType, defaultColor } from './type'

interface ColorPickerProps {
  /**
   * 触发颜色块类名
   */
  triggerClassName?: string
  /**
   * 触发颜色块样式
   */
  triggerStyle?: CSSProperties
  /**
   * 触发颜色块尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 固定颜色值（受控）
   */
  value?: string
  /**
   * 默认颜色值（非受控）
   * @default #5e62ea
   */
  defaultValue?: string
  /**
   * 底部预设颜色
   */
  colorList?: colorListType[]
  /**
   * 是否禁用颜色选择器
   * @default false
   */
  disabled?: boolean
}

interface ColorPickerEmits {
  /**
   * 修改颜色值时触发
   */
  (type: 'change', val: string): void
  /**
   * 切换颜色面板时触发
   */
  (type: 'trigger', val: string, visible: boolean): void
}

const {
  triggerClassName,
  triggerStyle,
  size,
  value,
  defaultValue = '#5e62ea',
  colorList = defaultColor,
  disabled = false
} = defineProps<ColorPickerProps>()
const emit = defineEmits<ColorPickerEmits>()

const _colorPickerValue = ref(defaultValue)
const innerValue = computed(() => value ?? _colorPickerValue.value)

const visible = ref(false)

const currentColor = ref<any>(innerValue)
const handleChange = (val: string) => {
  if (currentColor.value !== val) {
    _colorPickerValue.value = val
    emit('change', val)
    currentColor.value = val
  }
}

const popupChange = (val: boolean) => {
  visible.value = val
  emit('trigger', currentColor.value, val)
}

const handleClose = () => {
  visible.value = false
  emit('trigger', currentColor.value, false)
}
</script>

<style lang="scss">
@import './index.scss';
</style>
