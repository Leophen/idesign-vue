<template>
  <div
    :class="[
      'i-slider',
      layout === 'vertical' && `i-slider__layout-${layout}`,
      disabled && 'i-slider__disabled'
    ]"
    ref="slider"
    @mousedown="handleSliderDown"
  >
    <template v-if="!range && !_.isArray(innerValue)">
      <div class="i-slider__bar">
        <div
          class="i-slider__bar-active"
          :style="{
            left:
              layout === 'horizontal'
                ? `${((innerValue - min) / (max - min)) * 100}%`
                : 0,
            top:
              layout === 'vertical'
                ? `${((innerValue - min) / (max - min)) * 100}%`
                : 0
          }"
        />
      </div>
      <SliderBtn
        :layout="layout"
        :currentVal="innerValue"
        :max="max"
        :min="min"
        :downSlider="downStatus"
        :hideTip="hideTip"
        :placement="placement"
      />
    </template>
    <template v-if="range && _.isArray(innerValue)">
      <div class="i-slider__bar">
        <div
          class="i-slider__bar-active"
          :style="{
            left: 0,
            top: 0,
            width:
              layout === 'horizontal'
                ? `${((innerValue[0] - min) / (max - min)) * 100}%`
                : '6px',
            height:
              layout === 'vertical'
                ? `${((innerValue[0] - min) / (max - min)) * 100}%`
                : '6px'
          }"
        />
        <div
          class="i-slider__bar-active"
          :style="{
            left:
              layout === 'horizontal'
                ? `${((innerValue[1] - min) / (max - min)) * 100}%`
                : 0,
            top:
              layout === 'vertical'
                ? `${((innerValue[1] - min) / (max - min)) * 100}%`
                : 0
          }"
        ></div>
      </div>
      <SliderBtn
        :layout="layout"
        :currentVal="innerValue[0]"
        :max="max"
        :min="min"
        :downSlider="downStatus"
        :hideTip="hideTip"
        :placement="placement"
      />
      <SliderBtn
        :layout="layout"
        :currentVal="innerValue[1]"
        :max="max"
        :min="min"
        :downSlider="downStatus"
        :hideTip="hideTip"
        :placement="placement"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { computed, onMounted, ref } from 'vue'
import { placementType } from '../common'
import SliderBtn from './slider-btn.vue'

// 取数组中 最接近传入值的数
const getNearNum = (numArr: number[], num: number) => {
  const newArr = _.cloneDeep(numArr)
  newArr.push(num)
  newArr.sort()
  let nearNum = 0
  for (let i = 0, len = newArr.length; i < len; i++) {
    if (newArr[i] === num) {
      if (i === 0) {
        nearNum = numArr[0]
      } else if (i === len - 1) {
        nearNum = numArr[numArr.length - 1]
      } else {
        if (Math.abs(newArr[i - 1] - num) < Math.abs(newArr[i + 1] - num)) {
          nearNum = newArr[i - 1]
        } else {
          nearNum = newArr[i + 1]
        }
      }
    }
  }
  return nearNum
}

interface SliderProps {
  /**
   * 滑块布局方向
   * @default horizontal
   */
  layout?: 'vertical' | 'horizontal'
  /**
   * 滑块固定值（受控）
   */
  value?: number | number[]
  /**
   * 滑块默认值（非受控）
   */
  defaultValue?: number | number[]
  /**
   * 是否禁用滑块
   * @default false
   */
  disabled?: boolean
  /**
   * 滑块范围最大值
   * @default 100
   */
  max?: number
  /**
   * 滑块范围最小值
   * @default 0
   */
  min?: number
  /**
   * 步长
   * @default 1
   */
  step?: number
  /**
   * 是否为范围滑块
   * @default false
   */
  range?: boolean
  /**
   * 是否隐藏数值提示
   * @default false
   */
  hideTip?: boolean
  /**
   * 数值提示出现位置
   * @default top
   */
  placement?: placementType
}

interface SliderEmits {
  /**
   * 滑块值变化时触发
   */
  (type: 'change', val: number): void
}

const {
  layout = 'horizontal',
  value,
  defaultValue,
  disabled = false,
  max = 100,
  min = 0,
  step = 1,
  range = false,
  hideTip = false,
  placement = 'top'
} = defineProps<SliderProps>()
const emit = defineEmits<SliderEmits>()

const _sliderValue = ref(
  defaultValue ?? (!range ? min || 0 : [min || 0, max || 0])
)
const innerValue = computed(() => value ?? _sliderValue.value)

const slider = ref<HTMLDivElement>()
const rect = ref({
  left: 0,
  top: 0,
  width: 0,
  height: 0
})

const downStatus = ref(false)

// 是否为移动状态
const setMoving = (ifMoving: boolean) => {
  downStatus.value = ifMoving
  if (ifMoving) {
    document.body.style.userSelect = 'none'
  } else {
    document.body.style.userSelect = ''
  }
}

// 精度
const stepPrecision = ref(0)

onMounted(() => {
  stepPrecision.value = String(step).split('.')[1]?.length
})

// 所有可取值的位置
const positionArr = () => {
  const result: number[] = []
  for (let i = min; i <= max; i = _.add(i, step)) {
    result.push((i - min) / (max - min))
  }
  return result
}

const positTurnVal = (movePercent: number) => {
  return (
    min +
    _.round(
      (max - min) * getNearNum(positionArr(), movePercent),
      stepPrecision.value
    )
  )
}

const lastVal = ref(0)
const handleSliderMove = _.throttle((e: MouseEvent) => {
  let move = 0
  let minMove = 0
  let maxMove = 0

  if (layout === 'horizontal') {
    move = e.clientX - rect.value.left
    maxMove = rect.value.width
  } else {
    move = e.clientY - rect.value.top
    maxMove = rect.value.height
  }
  move < minMove && (move = minMove)
  move > maxMove && (move = maxMove)

  const movePercent = move / maxMove
  const newVal = positTurnVal(movePercent)

  if (newVal === lastVal.value) return
  updateInnerValue(newVal)
  lastVal.value = newVal
}, 16)

const handleSliderUp = () => {
  setMoving(false)
  window.removeEventListener('mousemove', handleSliderMove)
  window.removeEventListener('mouseup', handleSliderUp)
}

const getBtnRect = () => {
  const curRect = slider.value?.getBoundingClientRect()
  rect.value.left = curRect?.left || 0
  rect.value.top = curRect?.top || 0
  rect.value.width = curRect?.width || 0
  rect.value.height = curRect?.height || 0
}

const updateInnerValue = (val: number) => {
  if (!range) {
    _sliderValue.value = val
    emit('change', val)
  } else {
    if (
      Math.abs(val - (innerValue.value as number[])[0]) <
      Math.abs(val - (innerValue.value as number[])[1])
    ) {
      ;(innerValue.value as number[])[0] = val
    } else {
      ;(innerValue.value as number[])[1] = val
    }
    _sliderValue.value = innerValue.value
    emit('change', innerValue.value as number)
  }
}

const handleSliderDown = (e: MouseEvent) => {
  if (!disabled) {
    setMoving(true)
    getBtnRect()

    let movePercent = 0
    if (layout === 'horizontal') {
      movePercent = (e.clientX - rect.value.left) / rect.value.width
    } else {
      movePercent = (e.clientY - rect.value.top) / rect.value.height
    }
    const newVal = positTurnVal(movePercent)
    lastVal.value = newVal
    updateInnerValue(newVal)

    window.addEventListener('mousemove', handleSliderMove)
    window.addEventListener('mouseup', handleSliderUp)
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
