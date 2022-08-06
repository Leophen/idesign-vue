<template>
  <div class="i-date__year-select-panel" @click="handleClickStop">
    <header class="i-date__year-select-title">
      <div class="i-date-panel__header-icon" @click="handleLastTenYears">
        <Icon name="ArrowDoubleLeft" />
      </div>
      <div class="i-date-panel__header-title">
        {{ yearList[0] }} - {{ yearList[yearList.length - 1] }}
      </div>
      <div class="i-date-panel__header-icon" @click="handleNextTenYears">
        <Icon name="ArrowDoubleRight" />
      </div>
    </header>
    <section class="i-date__year-select-list">
      <div
        v-for="item in yearList"
        :class="[
          'i-date__year-select-item',
          innerYear === item && 'i-date__year-select-item__selected',
          new Date().getFullYear() === item &&
            'i-date__year-select-item__current'
        ]"
        :key="item"
        @click="(e) => handleClickItem(e, item)"
      >
        {{ item }}
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { onMounted, ref, watch } from 'vue'
import { Icon } from '../icon'

interface YearSelectPanelProps {
  /**
   * 年份
   */
  year: number
}

interface YearSelectPanelEmits {
  /**
   * 变化时触发
   */
  (type: 'change', val: number): void
}

const { year = 2022 } = defineProps<YearSelectPanelProps>()
const emit = defineEmits<YearSelectPanelEmits>()

const innerYear = ref(year)

watch(
  () => year,
  (newYear) => {
    innerYear.value = year
  },
  {
    immediate: true
  }
)

const yearList = ref(_.range(2020, 2030))

const yearToRangeList = (curYear: number) => {
  const year = String(curYear)
  const startNum = Number(`${year.substring(0, 3)}0`)
  const endNum = Number(`${Number(year.substring(0, 3)) + 1}0`)
  const list = _.range(startNum, endNum)
  yearList.value = list
}

onMounted(() => {
  yearToRangeList(year)
})

const handleClickStop = (e: MouseEvent) => {
  e.stopPropagation()
}

const handleLastTenYears = (e: MouseEvent) => {
  e.stopPropagation()
  const subTenYear = yearList.value[0] - 10
  yearToRangeList(subTenYear)
}

const handleNextTenYears = (e: MouseEvent) => {
  e.stopPropagation()
  const subTenYear = yearList.value[0] + 10
  yearToRangeList(subTenYear)
}

const handleClickItem = (e: MouseEvent, item: number) => {
  e.stopPropagation()
  emit('change', item)
}
</script>

<style lang="scss">
@import './index.scss';
</style>
