<template>
  <div class="i-date-picker" :data-type="type">
    <Popup
      placement="bottom"
      :trigger="trigger"
      class="i-date-popup"
      :visible="popupVisible"
      :disabled="disabled"
      noPadding
      @trigger="switchPopup"
    >
      <Input
        readonly
        :disabled="disabled"
        :value="
          !_.isArray(innerValue)
            ? innerValue
            : `${innerValue[0]} ${rangeSeparator} ${innerValue[1]}`
        "
        placeholder="请选择日期"
        suffixIcon="Calendar"
      />
      <template #content>
        <DatePanel
          :value="_.isString(innerValue) ? innerValue : ''"
          :firstDayOfWeek="firstDayOfWeek"
          @change="handleChange"
          @close="handleClose"
          v-if="type === 'date'"
        />
        <DateRangePanel
          :rangeValue="_.isArray(innerValue) ? innerValue : []"
          :firstDayOfWeek="firstDayOfWeek"
          @change="handleChange"
          @close="handleClose"
          v-else
        />
      </template>
    </Popup>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import dayjs from 'dayjs'
import isBetween from 'dayjs/plugin/isBetween'
import { Popup } from '../Popup'
import { Input } from '../Input'
import DatePanel from './date-panel.vue'
import DateRangePanel from './date-range-panel.vue'
import { DATE_FORMAT } from './type'
import { ref, computed } from 'vue'

dayjs.extend(isBetween)

const getDefaultVal = (type: string) => {
  if (type === 'range') {
    return [
      dayjs().format(DATE_FORMAT),
      dayjs().add(1, 'month').format(DATE_FORMAT)
    ]
  } else {
    return dayjs().format(DATE_FORMAT)
  }
}

interface DatePickerProps {
  /**
   * 固定选中值（受控）
   */
  value?: string
  /**
   * 默认选中值（非受控）
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
   * 日期选择器类型
   * @default date
   */
  type?: 'date' | 'range'
  /**
   * 占位符
   * @default date
   */
  placeholder?: 'date' | 'range'
  /**
   * 范围日期分隔符
   * @default -
   */
  rangeSeparator?: string
  /**
   * 每周的第一天，0 为周日，1 为周一
   * @default 1
   */
  firstDayOfWeek?: 0 | 1
}

interface DatePickerEmits {
  /**
   * 选中值发生变化时触发
   */
  (type: 'change', val: string | string[]): void
}

const {
  value,
  defaultValue,
  trigger = 'click',
  disabled = false,
  type = 'date',
  rangeSeparator = '~',
  firstDayOfWeek = 1
} = defineProps<DatePickerProps>()

const mergeDefaultVal = computed(
  () => defaultValue || getDefaultVal(type || 'date')
)

const emit = defineEmits<DatePickerEmits>()

const popupVisible = ref(false)
const switchPopup = (visible: boolean) => {
  popupVisible.value = visible
}

const _dateValue = ref(mergeDefaultVal.value)
const innerValue = computed(() => value ?? _dateValue.value)

const handleChange = (val: string | string[]) => {
  _dateValue.value = val
  emit('change', val)
}

const handleClose = () => {
  popupVisible.value = false
}
</script>

<style lang="scss">
@import './index.scss';
</style>
