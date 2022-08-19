<template>
  <div class="i-date-panel__range">
    <DatePanel
      :firstDayOfWeek="firstDayOfWeek"
      :rangeValue="innerRangeValue"
      :defaultDisplayVal="innerRangeValue[0]"
      @change="handleSelect"
      @hover="handleHover"
    />
    <DatePanel
      :firstDayOfWeek="firstDayOfWeek"
      :rangeValue="innerRangeValue"
      :defaultDisplayVal="innerRangeValue[1]"
      @change="handleSelect"
      @hover="handleHover"
    />
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import DatePanel from './date-panel.vue'
import { DATE_FORMAT } from './type'
import { ref } from 'vue'

dayjs.extend(isBetween)

interface DatePickerProps {
  /**
   * rangeValue
   */
  rangeValue?: string[]
  /**
   * 每周的第一天，0 为周日，1 为周一
   * @default 1
   */
  firstDayOfWeek?: 0 | 1
}

interface DatePickerEmits {
  /**
   * 值变化时触发
   */
  (type: 'change', val: string[]): void
  /**
   * 关闭时触发
   */
  (type: 'close'): void
}

const {
  rangeValue = [
    dayjs().format(DATE_FORMAT),
    dayjs().add(1, 'month').format(DATE_FORMAT)
  ],
  firstDayOfWeek
} = defineProps<DatePickerProps>()
const emit = defineEmits<DatePickerEmits>()

const innerRangeValue = ref<string[]>(rangeValue)
const rangeLock = ref<boolean>(true)
const hoverStartVal = ref('')

const handleSelect = (val: string) => {
  if (rangeLock.value) {
    // 滑选未解锁 -> 解锁
    if (innerRangeValue.value.length === 2) {
      hoverStartVal.value = val
      const newRangeValue = [val, val]
      innerRangeValue.value = [...newRangeValue]
      rangeLock.value = false
    }
  } else {
    // 滑选已解锁 -> 锁定
    emit('change', Array.from(innerRangeValue.value))
    emit('close')
    rangeLock.value = true
  }
}

const valToNum = (val: string) => Number(val.split('-').join(''))

const handleHover = (val: string) => {
  if (!rangeLock.value) {
    if (valToNum(val) > valToNum(hoverStartVal.value)) {
      innerRangeValue.value[0] = hoverStartVal.value
      innerRangeValue.value[1] = val
    } else if (valToNum(val) === valToNum(hoverStartVal.value)) {
      innerRangeValue.value[0] = val
      innerRangeValue.value[1] = val
    } else {
      innerRangeValue.value[0] = val
      innerRangeValue.value[1] = hoverStartVal.value
    }
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
