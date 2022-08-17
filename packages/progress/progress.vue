<template>
  <div class="i-progress">
    <div
      :class="[
        'i-progress-circle',
        innerLabel && 'i-progress-circle__has-label'
      ]"
      :style="{
        width: turnValue(width),
        height: turnValue(width)
      }"
      v-if="type !== 'bar'"
    >
      <svg :width="circle.d" :height="circle.d">
        <circle
          :cx="circle.d / 2"
          :cy="circle.d / 2"
          :r="circle.r"
          fill="none"
          class="i-progress-circle__bg"
          :style="{
            stroke: backColor,
            strokeWidth: turnValue(strokeWidth)
          }"
        />
        <circle
          :cx="circle.d / 2"
          :cy="circle.d / 2"
          :r="circle.r"
          fill="none"
          class="i-progress-circle__inner"
          :style="{
            stroke: color,
            strokeWidth: turnValue(strokeWidth),
            strokeLinecap: 'round',
            strokeDasharray: circle.l,
            strokeDashoffset: !indeterminate
              ? circle.l - (circle.l * percentage) / 100
              : circle.l * 2,
            animation: indeterminate ? animateCircle : 'unset'
          }"
        />
      </svg>
      <div class="i-progress__info" v-if="labelTxt || $slots.label">
        <slot name="label" v-if="$slots.label" />
        {{ !$slots.label ? `${percentage}%` : '' }}
      </div>
    </div>
    <template v-else>
      <div
        :class="['i-progress-bar', innerLabel && 'i-progress-bar__has-label']"
        :style="{
          width: turnValue(width),
          height: turnValue(strokeWidth),
          background: backColor
        }"
      >
        <div
          class="i-progress-bar__inner"
          :style="{
            width: `${percentage}%`,
            background: color,
            animation: indeterminate ? animateBar : 'unset'
          }"
        />
        <div
          class="i-progress__info"
          v-if="innerLabel && (labelTxt || $slots.label)"
        >
          {{ !$slots.label ? `${percentage}%` : '' }}
          <slot name="label" v-if="$slots.label" />
        </div>
      </div>
      <div
        class="i-progress__info"
        v-if="!innerLabel && (labelTxt || $slots.label)"
      >
        {{ !$slots.label ? `${percentage}%` : '' }}
        <slot name="label" v-if="$slots.label" />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { turnValue } from '../common'

interface ProgressProps {
  /**
   * 进度条百分比
   * @default 0
   */
  percentage?: number
  /**
   * 进度条类型
   * @default bar
   */
  type?: 'bar' | 'circle'
  /**
   * 是否显示进度提示文本
   * @default true
   */
  labelTxt?: boolean
  /**
   * 提示是否在进度条内部
   * @default false
   */
  innerLabel?: boolean
  /**
   * 进度条颜色
   */
  color?: string
  /**
   * 进度条底色
   */
  backColor?: string
  /**
   * 进度条长度/环形直径
   * @default 300
   */
  width?: string | number
  /**
   * 进度条粗细度
   * @default 6
   */
  strokeWidth?: number
  /**
   * 触发进度加载动画
   * @default false
   */
  indeterminate?: boolean
  /**
   * 进度加载动画速度
   * @default 3
   */
  duration?: number
}

const {
  percentage = 0,
  type = 'bar',
  labelTxt = true,
  innerLabel = false,
  color,
  backColor,
  width = 200,
  strokeWidth = 6,
  indeterminate = false,
  duration = 3
} = defineProps<ProgressProps>()

const animateBar = `indeterminate_bar ${duration}s infinite ease-in-out`

const getStyleNum = (val: string | number) => {
  return parseInt(String(width))
}

const circle = {
  d: getStyleNum(width),
  r: getStyleNum(width) / 2 - strokeWidth / 2,
  l: getStyleNum(width) * Math.PI
}

const animateCircle = `indeterminate_circle ${duration}s infinite linear`
</script>

<style lang="scss">
@import './index.scss';
</style>
