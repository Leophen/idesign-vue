<template>
  <Input
    placeholder=""
    :readonly="!disabled"
    :disabled="disabled"
    suffixIcon="Clock"
  >
    <template v-if="show.hour">
      <Input
        size="small"
        type="number"
        hideNumberBtn
        :minNumber="0"
        :maxNumber="/^[H]/.test(format) ? 23 : 11"
        placeholder=""
        :disabled="disabled"
        :modelValue="innerValue?.hour || ''"
        @input="inputChangeHour"
        @blur="handleUsualBlur"
      />
      <div :class="['i-time-colon', disabled && 'i-time-colon__disabled']">
        :
      </div>
    </template>
    <template v-if="show.minute">
      <Input
        size="small"
        type="number"
        hideNumberBtn
        :minNumber="0"
        :maxNumber="59"
        placeholder=""
        :disabled="disabled"
        :modelValue="innerValue?.minute || ''"
        @input="inputChangeMinute"
        @blur="handleUsualBlur"
      />
    </template>
    <template v-if="show.second">
      <div :class="['i-time-colon', disabled && 'i-time-colon__disabled']">
        :
      </div>
      <Input
        size="small"
        type="number"
        hideNumberBtn
        :minNumber="0"
        :maxNumber="59"
        placeholder=""
        :disabled="disabled"
        :modelValue="innerValue?.second || ''"
        @input="inputChangeSecond"
        @blur="handleUsualBlur"
      />
    </template>
  </Input>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { reactive, ref, watchEffect } from 'vue'
import { Input } from '../input'
import { DEFAULT_FORMAT, TimesType } from './type'

interface TimeInputProps {
  /**
   * 时间值
   */
  value?: TimesType
  /**
   * 是否禁用输入框
   * @default false
   */
  disabled?: boolean
  /**
   * 用于格式化时间，[详细文档](https://day.js.org/docs/en/display/format)
   * @default HH:mm:ss
   */
  format?: string
}

interface TimeInputEmits {
  /**
   * 输入时间变化时触发
   */
  (type: 'change', value: TimesType): void
}

const {
  value = { hour: '00', minute: '00', second: '00', meridiem: 'AM' },
  disabled = false,
  format = DEFAULT_FORMAT
} = defineProps<TimeInputProps>()
const emit = defineEmits<TimeInputEmits>()

const innerValue = ref(value)
const show = reactive({
  hour: false,
  minute: false,
  second: false
})

watchEffect(() => {
  ;/H|h/.test(format) && (show.hour = true)
  ;/m/.test(format) && (show.minute = true)
  ;/s/.test(format) && (show.second = true)

  let newHour = /^[H]/.test(format) ? value.hour : Number(value.hour) % 12
  newHour = _.padStart(String(newHour), 2, '0')
  value.hour = newHour
  innerValue.value = { ...value }
})

const inputChangeHour = (val: string) => {
  val = _.padStart(String(val), 2, '0')
  innerValue.value.hour = val
  emit('change', innerValue.value)
}

const inputChangeMinute = (val: string) => {
  val = _.padStart(String(val), 2, '0')
  innerValue.value.minute = val
  emit('change', innerValue.value)
}

const inputChangeSecond = (val: string) => {
  val = _.padStart(String(val), 2, '0')
  innerValue.value.second = val
  emit('change', innerValue.value)
}

const handleUsualBlur = () => {
  innerValue.value.hour = _.padStart(String(innerValue.value.hour), 2, '0')
  innerValue.value.minute = _.padStart(String(innerValue.value.minute), 2, '0')
  innerValue.value.second = _.padStart(String(innerValue.value.second), 2, '0')
}
</script>

<style lang="scss">
@import './index.scss';
</style>
