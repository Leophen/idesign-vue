<template>
  <div class="i-date-panel">
    <header class="i-date-panel__header">
      <section class="i-date-panel__header-title-wrapper">
        <Popup
          :visible="yearPanelVisible"
          trigger="click"
          noPadding
          @trigger="changeYearPanelVisible"
        >
          <div class="i-date-panel__header-title">
            {{ `${dayjs(displayVal).year()}年` }}
          </div>
          <template #content>
            <YearSelectPanel
              :year="dayjs(displayVal).year()"
              @change="handleSelectYear"
            />
          </template>
        </Popup>
        <Popup
          :visible="monthPanelVisible"
          trigger="click"
          noPadding
          @trigger="changeMonthPanelVisible"
        >
          <div class="i-date-panel__header-title">
            {{ `${dayjs(displayVal).month() + 1}月` }}
          </div>
          <template #content>
            <MonthSelectPanel
              :month="dayjs(displayVal).month()"
              @change="handleSelectMonth"
            />
          </template>
        </Popup>
      </section>

      <section class="i-date-panel__header-handle">
        <DateHeaderBtn
          icon="ArrowDoubleLeft"
          :disabled="false"
          @click="() => handleSwitchDate('sub', 'year')"
        />
        <DateHeaderBtn
          icon="ArrowLeft"
          :disabled="false"
          @click="() => handleSwitchDate('sub', 'month')"
        />
        <div class="i-date-panel__header-today" @click="handleToday" />
        <DateHeaderBtn
          icon="ArrowRight"
          :disabled="false"
          @click="() => handleSwitchDate('add', 'month')"
        />
        <DateHeaderBtn
          icon="ArrowDoubleRight"
          :disabled="false"
          @click="() => handleSwitchDate('add', 'year')"
        />
      </section>
    </header>

    <div class="i-date-panel__content">
      <header class="i-date-panel__week-wrapper">
        <template v-if="firstDayOfWeek === 0">
          <div
            v-for="item in WEEK_HEAD_0"
            class="i-date-panel__week-item"
            :key="item"
          >
            {{ item }}
          </div>
        </template>
        <template v-else>
          <div
            v-for="item in WEEK_HEAD_1"
            class="i-date-panel__week-item"
            :key="item"
          >
            {{ item }}
          </div>
        </template>
      </header>
      <section class="i-date-panel__day-wrapper">
        <div
          v-for="item in getMonthPanelDays()"
          :class="[
            'i-date-panel__day-item',
            item.range && 'i-date-panel__day-item__in-range',
            item.rangeStart && '-range__start',
            item.rangeSame && '-range__same',
            item.rangeEnd && '-range__end',
            item.type !== 'current' && 'i-date-panel__day-item__blur',
            (item.value === dateVal || rangeValue?.includes(item.value)) &&
              'i-date-panel__day-item__selected',
            item.value === dayjs().format(DATE_FORMAT) &&
              'i-date-panel__day-item__current'
          ]"
          :key="item.value"
          @click="() => handleSelectDay(item.type, item.value)"
          @mouseenter="() => handleEnterMonth(item.value)"
        >
          <div class="i-date-panel__day-item-txt">
            {{ item.label }}
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { Popup } from '../popup'
import YearSelectPanel from './year-select-panel.vue'
import MonthSelectPanel from './month-select-panel.vue'
import DateHeaderBtn from './date-header-btn.vue'
import { DATE_FORMAT, WEEK_HEAD_0, WEEK_HEAD_1 } from './type'
import { ref, watch } from 'vue'

dayjs.extend(isBetween)

interface DatePanelProps {
  /**
   * value
   */
  value?: string
  /**
   * defaultDisplayVal
   */
  defaultDisplayVal?: string
  /**
   * rangeValue
   */
  rangeValue?: string[]
  /**
   * firstDayOfWeek
   */
  firstDayOfWeek?: number
}

interface DatePanelEmits {
  /**
   * 变化时触发
   */
  (type: 'change', val: string): void
  /**
   * 悬浮时触发
   */
  (type: 'hover', val: string): void
  /**
   * 关闭时触发
   */
  (type: 'close'): void
}

const { firstDayOfWeek, value, rangeValue, defaultDisplayVal } =
  defineProps<DatePanelProps>()
const emit = defineEmits<DatePanelEmits>()

const dateVal = ref(value)
const displayVal = ref(value)
watch(
  () => value,
  (newVal) => {
    if (defaultDisplayVal) {
      displayVal.value = defaultDisplayVal
    } else {
      displayVal.value = newVal
    }
  },
  {
    immediate: true
  }
)

const handleSwitchDate = (
  mode: 'add' | 'sub',
  type: 'year' | 'month',
  step = 1
) => {
  let newDateVal
  if (mode === 'add') {
    newDateVal = dayjs(displayVal.value).add(step, type).format(DATE_FORMAT)
  } else {
    newDateVal = dayjs(displayVal.value)
      .subtract(step, type)
      .format(DATE_FORMAT)
  }
  displayVal.value = newDateVal
}

const handleToday = () => {
  displayVal.value = dayjs().format(DATE_FORMAT)
}

const yearPanelVisible = ref(false)
const monthPanelVisible = ref(false)

const changeYearPanelVisible = (visible: boolean) => {
  yearPanelVisible.value = visible
}

const changeMonthPanelVisible = (visible: boolean) => {
  monthPanelVisible.value = visible
}

const handleSelectYear = (val: number) => {
  const newDateVal = dayjs(displayVal.value).year(val).format(DATE_FORMAT)
  displayVal.value = newDateVal
  yearPanelVisible.value = false
}

const handleSelectMonth = (val: number) => {
  const newDateVal = dayjs(displayVal.value).month(val).format(DATE_FORMAT)
  displayVal.value = newDateVal
  monthPanelVisible.value = false
}

const handleSelectDay = (type: string, val: string) => {
  value && type !== 'current' && (displayVal.value = val)
  value && (dateVal.value = val)
  emit('change', val)
  emit('close')
}

const handleEnterMonth = (val: string) => {
  emit('hover', val)
}

const getMonthPanelDays = () => {
  const currentMonthStart = dayjs(displayVal.value).startOf('month').day()
  let startIndex = 0
  // 每周第一天
  if (firstDayOfWeek === 1) {
    currentMonthStart === 0
      ? (startIndex = 6)
      : (startIndex = currentMonthStart - 1)
  } else {
    startIndex = currentMonthStart
  }

  interface panelDaysType {
    label: number
    type: string
    value: string
    range?: boolean
    rangeStart?: boolean
    rangeSame?: boolean
    rangeEnd?: boolean
  }

  const panelDays: panelDaysType[] = []

  const lastMonthDays = dayjs(displayVal.value)
    .subtract(1, 'month')
    .daysInMonth()
  for (let i = lastMonthDays - startIndex + 1; i < lastMonthDays + 1; i++) {
    panelDays.push({
      label: i,
      type: 'last',
      value: dayjs(displayVal.value)
        .subtract(1, 'month')
        .set('date', i)
        .format(DATE_FORMAT)
    })
  }

  const currentMonthDays = dayjs(displayVal.value).daysInMonth()
  const currentDayVal = (index: number) =>
    dayjs(displayVal.value).set('date', index).format(DATE_FORMAT)
  const rangeValid = rangeValue?.length === 2
  for (let i = 1; i < currentMonthDays + 1; i++) {
    panelDays.push({
      label: i,
      type: 'current',
      range:
        rangeValid &&
        (dayjs(currentDayVal(i)).isBetween(
          dayjs(rangeValue[0]),
          dayjs(rangeValue[1]),
          'day'
        ) ||
          currentDayVal(i) === rangeValue[0] ||
          currentDayVal(i) === rangeValue[1]),
      rangeStart: rangeValid && currentDayVal(i) === rangeValue[0],
      rangeSame: rangeValid && rangeValue[0] === rangeValue[1],
      rangeEnd: rangeValid && currentDayVal(i) === rangeValue[1],
      value: currentDayVal(i)
    })
  }

  const remainLen = 42 - startIndex + 1 - currentMonthDays
  for (let i = 1; i < remainLen; i++) {
    panelDays.push({
      label: i,
      type: 'next',
      value: dayjs(displayVal.value)
        .add(1, 'month')
        .set('date', i)
        .format(DATE_FORMAT)
    })
  }

  return panelDays
}
</script>

<style lang="scss">
@import './index.scss';
</style>
