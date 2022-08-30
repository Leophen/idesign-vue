<template>
  <div
    :class="['i-rate', readonly && 'i-rate__readonly']"
    @mouseenter="handleEnterRate"
    @mouseleave="handleLeaveRate"
  >
    <template v-if="!allowHalf">
      <div
        v-for="(item, index) in Array(count).fill('star')"
        :key="`${item}${index}`"
        class="i-rate-star"
        @mouseenter="() => handleEnterRateItem(index)"
        @mousedown="() => handleDownRateItem(index)"
      >
        <Icon
          :name="getStar(index, 'name')"
          :color="getStar(index, 'color')"
          :size="20"
        />
      </div>
    </template>
    <template v-else>
      <div
        v-for="(item, index) in Array(count).fill('star')"
        :key="`${item}${index}`"
        class="i-rate-star"
      >
        <div
          class="i-rate-star__first"
          @mouseenter="() => handleEnterRateItem(index)"
          @mousedown="() => handleDownRateItem(index)"
        >
          <Icon
            :name="getStar(index, 'name')"
            :color="getStar(index, 'color')"
            :size="20"
          />
        </div>
        <div
          class="i-rate-star__second"
          @mouseenter="() => handleEnterRateItem(index + 0.5)"
          @mousedown="() => handleDownRateItem(index + 0.5)"
        >
          <Icon
            :name="getStar(index + 0.5, 'name')"
            :color="getStar(index + 0.5, 'color')"
            :size="20"
          />
        </div>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { Icon } from '../icon'

interface RateProps {
  /**
   * 固定分值（受控）
   */
  modelValue?: number
  /**
   * 默认分值（非受控）
   * @default 0
   */
  defaultValue?: number
  /**
   * 是否只读
   * @default false
   */
  readonly?: boolean
  /**
   * 是否可清除
   * @default false
   */
  allowClear?: boolean
  /**
   * 是否支持半星
   * @default false
   */
  allowHalf?: boolean
  /**
   * 最大分值
   * @default 5
   */
  count?: number
  /**
   * 选中颜色
   * @default #f5db4d
   */
  activeColor?: string
  /**
   * 未选中颜色
   * @default #e5e6ea | #333336
   */
  voidColor?: string
  /**
   * 选中图标
   * @default StarFill
   */
  activeIcon?: string
  /**
   * 未选中图标
   * @default StarFill
   */
  voidIcon?: string
}

interface RateEmits {
  /**
   * 选择评分时触发 v-model
   */
  (type: 'update:modelValue', val: number): void
  /**
   * 选择评分时触发
   */
  (type: 'change', val: number): void
}

const {
  modelValue,
  defaultValue = 0,
  readonly = false,
  allowClear = false,
  allowHalf = false,
  count = 5,
  activeColor = '#f5db4d',
  voidColor = 'var(--i-bg-back)',
  activeIcon = 'StarFill',
  voidIcon = 'StarFill'
} = defineProps<RateProps>()
const emit = defineEmits<RateEmits>()

const _rateValue = ref(defaultValue)
const innerValue = computed(() => modelValue ?? _rateValue.value)
const hoverValue = ref(modelValue || defaultValue)
const ifHover = ref(false)

const handleEnterRate = () => {
  !readonly && (ifHover.value = true)
}

const handleLeaveRate = () => {
  !readonly && (ifHover.value = false)
}

const handleEnterRateItem = (index: number) => {
  const step = !allowHalf ? 1 : 0.5
  !readonly && (hoverValue.value = index + step)
}

const handleDownRateItem = (index: number) => {
  const step = !allowHalf ? 1 : 0.5
  if (!readonly) {
    if (innerValue.value !== index + step) {
      const newVal = index + step
      _rateValue.value = newVal
      emit('change', newVal)
      emit('update:modelValue', newVal)
    } else {
      if (allowClear) {
        _rateValue.value = 0
        emit('change', 0)
        emit('update:modelValue', 0)
      }
    }
  }
}

const getStar = (index: number, type: 'name' | 'color') => {
  let result = type === 'name' ? voidIcon : voidColor
  const compareValue = ifHover.value ? hoverValue.value : innerValue.value
  if (compareValue > index) {
    result = type === 'name' ? activeIcon : activeColor
  }
  return result
}
</script>

<style lang="scss">
@import './index.scss';
</style>
