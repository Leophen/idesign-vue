<template>
  <div class="i-time-panel">
    <section class="i-time-panel-content">
      <ul
        v-for="(col, index) in cols"
        class="i-time-panel-item"
        :key="col + index"
        :ref="getRef(col)"
      >
        <li
          v-for="item in getColList(col)"
          :class="[
            'i-time-spinner-item',
            value[col] === item && 'i-time-spinner-item__selected'
          ]"
          :key="item"
          @click="() => clickItem(col, item)"
        >
          {{ item }}
        </li>
      </ul>
    </section>
    <footer class="i-time-panel-footer">
      <Button
        size="small"
        variant="text"
        @click="handleNow"
        v-if="!steps.filter((v) => v > 1).length"
      >
        此刻
      </Button>
      <div class="i-time-panel-footer__handle">
        <Button size="small" variant="outline" @click="closePanel">取消</Button>
        <Button size="small" @click="handleConfirm">确认</Button>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import dayjs from 'dayjs'
import { Button } from '../Button'
import {
  DEFAULT_FORMAT,
  DEFAULT_STEPS,
  MERIDIEM_LIST,
  timeArr,
  EPickerCols,
  TimesType
} from './type'
import { computed, onMounted, ref, watch } from 'vue'

interface TimePanelProps {
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean
  /**
   * 占位符
   * @default ''
   */
  placeholder?: string
  /**
   * 尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 选中值
   */
  value?: TimesType
  /**
   * 时间间隔步数，数组排列 [小时, 分钟, 秒]，示例：[2, 1, 1] 或者 ['2', '1', '1']
   * @default () => [1, 1, 1]
   */
  steps?: Array<string | number>
  /**
   * 禁用时间项
   */
  disableTime?: (h: number, m: number, s: number) => boolean
  /**
   * 用于格式化时间，[详细文档](https://day.js.org/docs/en/display/format)
   * @default 'HH:mm:ss'
   */
  format?: string
  /**
   * 是否隐藏禁用状态的时间项
   * @default true
   */
  hideDisabledTime?: boolean
}

interface TimePanelEmits {
  /**
   * 点击此刻按钮时触发
   */
  (type: 'now'): void
  /**
   * 选中值发生变化时触发
   */
  (
    type: 'change',
    tp: 'hour' | 'minute' | 'second' | 'meridiem',
    value: string
  ): void
  /**
   * 面板关闭时触发
   */
  (type: 'close', visible: boolean): void
  /**
   * 点击确认按钮时触发
   */
  (type: 'confirm'): void
}

const {
  value = { hour: '00', minute: '00', second: '00', meridiem: '' },
  format = DEFAULT_FORMAT,
  steps = DEFAULT_STEPS,
  hideDisabledTime = true,
  disableTime
} = defineProps<TimePanelProps>()
const emit = defineEmits<TimePanelEmits>()

const cols = ref<Array<EPickerCols>>([])

// 初始化 -> 渲染时间数据
watch(
  () => format,
  (newFormat) => {
    const match = newFormat.match(
      /(a\s+|A\s+)?(h+|H+)?:?(m+)?:?(s+)?(\s+a|\s+A)?/
    )
    const [, startCol, hourCol, minuteCol, secondCol, endCol] = match as any
    const { meridiem, hour, minute, second } = EPickerCols
    const renderCol = [
      startCol && meridiem,
      hourCol && hour,
      minuteCol && minute,
      secondCol && second,
      endCol && meridiem
    ].filter((v) => !!v)
    cols.value = renderCol
  },
  {
    immediate: true
  }
)
const dayjsValue = computed(() => {
  const isStepsSet = !!steps.filter((v) => v > 1).length
  if (value) {
    return dayjs(`${value.hour}-${value.minute}-${value.second}`, format)
  }
  if (isStepsSet) {
    return dayjs()
      .hour(Number(steps[0]) - 1)
      .minute(Number(steps[1]) - 1)
      .second(Number(steps[2]) - 1)
  }
  return dayjs()
})
const getColList = (col: EPickerCols) => {
  let count = 0
  if (timeArr.includes(col)) {
    // hour/minute/second column scroll render
    const colIdx = timeArr.indexOf(col)
    const colStep = steps[colIdx]
    if (col === EPickerCols.hour) {
      count = /[h]{1}/.test(format) ? 11 : 23
    } else {
      count = 59
    }
    const colList =
      _.range(0, count + 1, Number(colStep)).map((v) =>
        _.padStart(String(v), 2, '0')
      ) || []
    return hideDisabledTime && !!disableTime
      ? colList.filter((t) => {
          const params: [number, number, number] = [
            dayjsValue.value.hour(),
            dayjsValue.value.minute(),
            dayjsValue.value.second()
          ]
          params[colIdx] = Number(t)
          return !disableTime?.(...params)
        })
      : colList
  }
  // meridiem column scroll render
  return MERIDIEM_LIST
}

// 同步滚动
const hourPanelRef = ref<HTMLUListElement[]>(null as any)
const minutePanelRef = ref<HTMLUListElement[]>(null as any)
const secondPanelRef = ref<HTMLUListElement[]>(null as any)
const meridiemPanelRef = ref<HTMLUListElement[]>(null as any)
const getRef = (type: string) => {
  let ref = meridiemPanelRef
  type === 'hour' && (ref = hourPanelRef)
  type === 'minute' && (ref = minutePanelRef)
  type === 'second' && (ref = secondPanelRef)
  return ref
}
const updateScroll = (mode?: ScrollBehavior) => {
  hourPanelRef.value &&
    hourPanelRef.value[0].scrollTo({
      top: 32 * (Number(value.hour) / Number(steps[0])),
      behavior: mode
    })
  minutePanelRef.value &&
    minutePanelRef.value[0].scrollTo({
      top: 32 * (Number(value.minute) / Number(steps[1])),
      behavior: mode
    })
  secondPanelRef.value &&
    secondPanelRef.value[0].scrollTo({
      top: 32 * (Number(value.second) / Number(steps[2])),
      behavior: mode
    })
}
onMounted(() => {
  setTimeout(() => {
    updateScroll()
  })
})
watch(
  () => value,
  () => {
    updateScroll('smooth')
  }
)

const clickItem = (
  type: 'hour' | 'minute' | 'second' | 'meridiem',
  val: string
) => {
  emit('change', type, val)
}

const handleNow = () => {
  emit('now')
}

const closePanel = () => {
  emit('close', false)
}

const handleConfirm = () => {
  closePanel()
  emit('confirm')
}
</script>

<style lang="scss">
@import './index.scss';
</style>
