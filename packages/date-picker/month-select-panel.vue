<template>
  <div class="i-date__month-select-panel" @click="handleClickStop">
    <header class="i-date__month-select-title">
      <div class="i-date-panel__header-icon" @click="handleLastMonth">
        <Icon name="ArrowLeft" />
      </div>
      <div class="i-date-panel__header-title">{{ innerMonth + 1 }} 月</div>
      <div class="i-date-panel__header-icon" @click="handleNextMonth">
        <Icon name="ArrowRight" />
      </div>
    </header>
    <section class="i-date__month-select-list">
      <div
        v-for="item in _.range(0, 12)"
        :class="[
          'i-date__month-select-item',
          innerMonth === item && 'i-date__month-select-item__selected',
          new Date().getMonth() === item && 'i-date__month-select-item__current'
        ]"
        :key="item"
        @click="(e) => handleClickItem(e, item)"
      >
        {{ item + 1 }}
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { ref, watch } from 'vue'
import { Icon } from '../Icon'

interface MonthSelectPanelProps {
  /**
   * 月份
   */
  month: number
}

interface MonthSelectPanelEmits {
  /**
   * 变化时触发
   */
  (type: 'change', val: number): void
}

const { month = 6 } = defineProps<MonthSelectPanelProps>()
const emit = defineEmits<MonthSelectPanelEmits>()

const innerMonth = ref(month)

watch(
  () => month,
  (newMonth) => {
    innerMonth.value = month
  },
  {
    immediate: true
  }
)

const handleClickStop = (e: MouseEvent) => {
  e.stopPropagation()
}

const handleLastMonth = (e: MouseEvent) => {
  e.stopPropagation()
  innerMonth.value > 0 && (innerMonth.value = innerMonth.value - 1)
}

const handleNextMonth = (e: MouseEvent) => {
  e.stopPropagation()
  innerMonth.value < 11 && (innerMonth.value = innerMonth.value + 1)
}

const handleClickItem = (e: MouseEvent, item: number) => {
  e.stopPropagation()
  emit('change', item)
}
</script>

<style lang="scss">
@import './index.scss';
</style>
