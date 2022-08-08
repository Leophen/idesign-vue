<template>
  <div class="i-time-picker">
    <Popup
      placement="bottom"
      :trigger="trigger"
      referenceClassName="i-time-popup"
      :visible="popupVisible"
      :disabled="disabled"
      @trigger="switchPopup"
      noPadding
    >
      <TimeInput
        :value="valueToObj(innerValue)"
        :format="format"
        :disabled="disabled"
        @change="updateValue"
      />
      <template #content>
        <TimePanel
          :value="valueToObj(innerValue)"
          :format="format"
          :steps="steps"
          :onNow="handleNow"
          @close="switchPopup"
          @change="selectTime"
          @confirm="handleConfirm"
        />
      </template>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { Popup } from '../popup'
import TimePanel from './time-panel.vue'
import TimeInput from './time-input.vue'
import { DEFAULT_STEPS, DEFAULT_FORMAT, TimesType } from './type'
import { computed, ref, watch } from 'vue'

interface TimePickerProps {
  /**
   * 固定时间值（受控）
   */
  value?: string
  /**
   * 默认时间值（非受控）
   * @default 当前时间
   */
  defaultValue?: string
  /**
   * 触发方式
   * @default click
   */
  trigger?: 'hover' | 'click' | 'context-menu'
  /**
   * 是否禁用选择器
   * @default false
   */
  disabled?: boolean
  /**
   * 用于格式化时间，[详细文档](https://day.js.org/docs/en/display/format)
   * @default HH:mm:ss
   */
  format?: string
  /**
   * [时, 分, 秒] 时间间隔步数
   * @default () => [1, 1, 1]
   */
  steps?: Array<string | number>
}

interface TimePickerEmits {
  /**
   * 选中时间变化时触发
   */
  (type: 'change', val: string): void
  /**
   * 切换时间面板时触发
   */
  (type: 'trigger', visible: boolean): void
}

const {
  value,
  defaultValue,
  trigger = 'click',
  disabled = false,
  format = DEFAULT_FORMAT,
  steps = DEFAULT_STEPS
} = defineProps<TimePickerProps>()
const emit = defineEmits<TimePickerEmits>()

const mergeDefaultVal = computed(
  () => defaultValue || dayjs().format(format || DEFAULT_FORMAT)
)

const getCurrentTime = (type?: string) => {
  let currentVal = new Date().getHours().toString()
  if (type === 'meridiem') {
    ;/H|h/.test(format) && (currentVal = innerValue.value.split(':')[0])
    Number(currentVal) >= 12 ? (currentVal = 'PM') : (currentVal = 'AM')
  } else {
    type === 'minute' && (currentVal = new Date().getMinutes().toString())
    type === 'second' && (currentVal = new Date().getSeconds().toString())
    currentVal.length === 1 && (currentVal = '0' + currentVal)
  }
  return currentVal
}

const _timeValue = ref(mergeDefaultVal.value)
const innerValue = computed(() => value ?? _timeValue.value)

const timeValue = ref({
  hour: '00',
  minute: '00',
  second: '00',
  meridiem: ''
})

const valueToObj = (val: string) => {
  const result = {
    hour: '00',
    minute: '00',
    second: '00',
    meridiem: ''
  }
  let ifMeridiem = false
  ;/A/.test(format) && (ifMeridiem = true)
  const timeArr = val.split(':')
  if (!/H|h/.test(format) && timeArr.length === 2) {
    timeArr.unshift('00')
  }
  result.hour = timeArr[0]
  result.minute = timeArr[1]
  result.second = String(timeArr[2]).split(' ')[0]
  ifMeridiem &&
    (result.meridiem = val.split(' ')[1] || getCurrentTime('meridiem'))
  return result
}

const objToValue = (obj: TimesType) => {
  let hourVal = `${obj.hour}:`
  let minuteVal = `${obj.minute}`
  let secondVal = `:${obj.second}`
  let meridiemVal = ``

  !/H|h/.test(format) && (hourVal = ``)
  !/s/.test(format) && (secondVal = ``)
  ;/A/.test(format) && (meridiemVal = ` ${timeValue.value.meridiem}`)

  const result = `${hourVal}${minuteVal}${secondVal}${meridiemVal}`
  return result
}

watch(
  () => innerValue.value,
  (newVal) => {
    const newTimeVal = valueToObj(newVal)
    timeValue.value = { ...newTimeVal }
  },
  {
    immediate: true
  }
)

const updateValue = (val?: TimesType) => {
  let currentTime: string
  val
    ? (currentTime = objToValue(val))
    : (currentTime = objToValue(timeValue.value))
  _timeValue.value = currentTime
  emit('change', currentTime)
}

const selectTime = (
  type: 'hour' | 'minute' | 'second' | 'meridiem',
  val: string
) => {
  timeValue.value[type] = val
  updateValue(timeValue.value)
}

const popupVisible = ref(false)
const switchPopup = (visible: boolean) => {
  popupVisible.value = visible
  emit('trigger', visible)
}

const handleNow = () => {
  const currentTime = dayjs().format(format)
  _timeValue.value = currentTime
  emit('change', currentTime)
}

const handleConfirm = () => {
  switchPopup(false)
  updateValue()
}
</script>

<style lang="scss">
@import './index.scss';
</style>
