<template>
  <Popup
    trigger="hover"
    :visible="!hideTip && (downSlider || enterShowTip)"
    :placement="placement"
  >
    <div
      className="i-slider__button"
      ref="btnRef"
      :style="getBtnStyle()"
      @mouseenter="() => setEnterShowTip(true)"
      @mouseleave="() => setEnterShowTip(false)"
    />
    <template #content>
      {{ currentVal }}
    </template>
  </Popup>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { placementType } from '../common'
import { Popup } from '../popup'

interface SliderBtnProps {
  /**
   * 滑块布局方向
   * @default horizontal
   */
  layout?: 'vertical' | 'horizontal'
  /**
   * 当前值
   * @default 0
   */
  currentVal?: number
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
   * 是否正选中滑条
   * @default false
   */
  downSlider?: boolean
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

const {
  layout = 'horizontal',
  currentVal = 0,
  max = 100,
  min = 0,
  downSlider = false,
  hideTip = false,
  placement = 'top'
} = defineProps<SliderBtnProps>()

const enterShowTip = ref(false)
const setEnterShowTip = (show: boolean) => {
  enterShowTip.value = show
}

const btnRef = ref<HTMLDivElement>()
const rect = ref({
  width: 0,
  height: 0
})
onMounted(() => {
  rect.value.width = btnRef.value?.getBoundingClientRect().width || 0
  rect.value.height = btnRef.value?.getBoundingClientRect().height || 0
})

const getBtnStyle = () => {
  if (layout === 'horizontal') {
    return {
      left: `calc(${((currentVal - min) / (max - min)) * 100}% - ${
        rect.value.width / 2
      }px)`
    }
  } else {
    return {
      top: `calc(${((currentVal - min) / (max - min)) * 100}% - ${
        rect.value.height / 2
      }px)`
    }
  }
}
</script>

<style lang="scss">
@import './index.scss';
</style>
