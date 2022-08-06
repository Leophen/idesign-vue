<template>
  <div :class="['i-color-panel', disabled && 'i-color-panel__disabled']">
    <header class="i-color-panel-header">
      <div class="i-color-panel-header-txt">颜色选择器</div>
      <div className="i-color-panel-header-icon" @click="() => emit('close')">
        <Icon name="Close" />
      </div>
    </header>

    <section
      class="i-color-panel-block"
      :style="{ background: `hsl(${colors.h}, 100%, 50%)` }"
    >
      <div class="i-color-panel-block__white" />
      <div
        class="i-color-panel-block__black"
        ref="panelRef"
        @mousedown="handlePanelDown"
      />
      <ColorCursor
        :x="location.panel.x"
        :y="location.panel.y"
        :color="colors.rgbVal"
      />
    </section>

    <section class="i-color-panel-controls">
      <div
        class="i-color-panel-controls__dropper"
        @click="handleClickDropper"
        v-if="ifDropperShow"
      >
        <Icon name="Dropper" />
      </div>
      <div class="i-color-panel-controls__bar">
        <div
          class="i-color-panel-bar__rgb"
          ref="rgbBarRef"
          @mousedown="handleRgbDown"
        >
          <ColorCursor :x="location.rgb.x" mode="x" />
        </div>
        <div
          class="i-color-panel-bar__a"
          ref="aBarRef"
          @mousedown="handleADown"
        >
          <ColorCursor
            mode="x"
            :x="location.a.x"
            :style="{ background: 'rgba(0, 0, 0, 0.4)' }"
          />
          <section
            class="i-color-panel-bar__a-color"
            :style="{
              background: `linear-gradient(
                    90deg,
                    rgba(255, 0, 0, 0) 0%,
                    hsl(${colors.h}, 100%, 50%) 100%
                  )
                  `
            }"
          />
          <section class="i-color-panel-bar__a-bg"></section>
        </div>
      </div>
    </section>

    <section class="i-color-panel-values">
      <Select
        :width="60"
        :value="colorType"
        size="small"
        :disabled="disabled"
        :clearable="false"
        @change="handleSelect"
      >
        <SelectItem value="hex">Hex</SelectItem>
        <SelectItem value="rgb">RGB</SelectItem>
      </Select>
      <div class="i-color-panel-input__wrapper">
        <div class="i-color-panel-input__class">
          <Input
            :value="colors.hexVal"
            size="small"
            :disabled="disabled"
            @focus="inputFocusHex"
            @input="inputChangeHex"
            @blur="inputBlurHex"
            v-if="colorType === 'hex'"
          />
          <template v-else>
            <Input
              :value="colors.r.toFixed(0)"
              type="number"
              size="small"
              :maxNumber="255"
              :minNumber="0"
              selectAll
              hideNumberBtn
              @input="inputChangeR"
            />
            <Input
              :value="colors.g.toFixed(0)"
              type="number"
              size="small"
              :maxNumber="255"
              :minNumber="0"
              selectAll
              hideNumberBtn
              @input="inputChangeG"
            />
            <Input
              :value="colors.b.toFixed(0)"
              type="number"
              size="small"
              :maxNumber="255"
              :minNumber="0"
              selectAll
              hideNumberBtn
              @input="inputChangeB"
            />
          </template>
        </div>
        <div class="i-color-panel-input__alpha">
          <Input
            :value="(colors.a * 100).toFixed(0)"
            type="number"
            size="small"
            :disabled="disabled"
            :maxNumber="100"
            :minNumber="0"
            selectAll
            hideNumberBtn
            @input="inputChangeA"
          />
        </div>
      </div>
    </section>

    <footer class="i-color-panel-footer">
      <ColorItem
        v-for="item in colorList"
        :color="item?.value"
        :key="item?.value"
        @click="
          () => {
            if (disabled) return
            handleUsualUpdate(item?.value)
          }
        "
      />
    </footer>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import tinycolor from 'tinycolor2'
import { colorListType, defaultColor } from './type.js'
import { computed, onMounted, reactive, ref } from 'vue'
import { Input } from '../input'
import { Select, SelectItem } from '../select'
import { Icon } from '../icon'
import ColorCursor from './color-cursor.vue'
import ColorItem from './color-item.vue'

interface ColorPanelProps {
  /**
   * 固定颜色值（受控）
   */
  value?: string
  /**
   * 默认颜色值（非受控）
   * @default #5e62ea
   */
  defaultValue?: string
  /**
   * 底部预设颜色
   */
  colorList?: colorListType[]
  /**
   * 是否禁用颜色选择器
   * @default false
   */
  disabled?: boolean
}

interface ColorPanelEmits {
  /**
   * 修改颜色值时触发
   */
  (type: 'change', val: string): void
  /**
   * 点击关闭按钮时触发
   */
  (type: 'close'): void
}

const {
  value,
  defaultValue = '#5e62ea',
  colorList = defaultColor,
  disabled = false
} = defineProps<ColorPanelProps>()
const emit = defineEmits<ColorPanelEmits>()

const _colorPanelValue = ref(defaultValue)
const innerValue = computed(() => value ?? _colorPanelValue.value)

// @ts-ignore
const ifDropperShow = !!window.EyeDropper

// 颜色值
const colors = reactive({
  rgbVal: tinycolor(innerValue.value).toRgbString(),
  hexVal: tinycolor(innerValue.value).toHexString(),
  r: tinycolor(innerValue.value).toRgb().r,
  g: tinycolor(innerValue.value).toRgb().g,
  b: tinycolor(innerValue.value).toRgb().b,
  h: tinycolor(innerValue.value).toHsv().h,
  s: tinycolor(innerValue.value).toHsv().s,
  v: tinycolor(innerValue.value).toHsv().v,
  a: tinycolor(innerValue.value).getAlpha()
})

// 是否为移动状态
const handleMoving = (ifMoving: boolean) => {
  if (ifMoving) {
    document.body.style.userSelect = 'none'
  } else {
    document.body.style.userSelect = ''
  }
}

// 调色板、色阶柱、透明度柱 节点宽高位置
const rect = reactive({
  panel: {
    width: 0,
    height: 0,
    left: 0,
    top: 0
  },
  rgb: {
    width: 0,
    left: 0
  },
  a: {
    width: 0,
    left: 0
  }
})
const panelRef = ref<HTMLDivElement>(null as any)
const rgbBarRef = ref<HTMLDivElement>(null as any)
const aBarRef = ref<HTMLDivElement>(null as any)

// 调色板、色阶柱、透明度柱 坐标值
const location = reactive({
  panel: {
    x: 0,
    y: 0
  },
  rgb: {
    x: 0
  },
  a: {
    x: 0
  }
})

const updateLocation = () => {
  // 初始化给各节点宽高及位置参数赋值（popup 打开后再执行）
  setTimeout(() => {
    const panelRect = panelRef.value?.getBoundingClientRect()
    rect.panel.width = panelRect?.width || 0
    rect.panel.height = panelRect?.height || 0
    rect.panel.left = panelRect?.left || 0
    rect.panel.top = panelRect?.top || 0
    const rgbRect = rgbBarRef.value?.getBoundingClientRect()
    rect.rgb.width = rgbRect?.width || 0
    rect.rgb.left = rgbRect?.left || 0
    const aRect = aBarRef.value?.getBoundingClientRect()
    rect.a.width = aRect?.width || 0
    rect.a.left = aRect?.left || 0
  }, 100)
}
onMounted(() => {
  updateLocation()
  // 设置初始滑块位置
  const currentColor = tinycolor(colors.rgbVal)
  location.panel.x = currentColor.toHsv().s
  location.panel.y = 1 - currentColor.toHsv().v
  location.rgb.x = currentColor.toHsv().h / 360
  location.a.x = currentColor.getAlpha()
  document.addEventListener('scroll', updateLocation)
  return () => {
    document.removeEventListener('scroll', updateLocation)
  }
})

const emitColor = (tinyObj: any) => {
  let newColor
  if (colorType.value === 'hex') {
    newColor = tinyObj.toHex8String()
  } else {
    newColor = tinyObj.toRgbString()
  }
  _colorPanelValue.value = newColor
  emit('change', newColor)
}

// 通用更新滑块位置函数
const updateCursorLocation = (tinyObj: any) => {
  location.panel.x = tinyObj.toHsv().s
  location.panel.y = 1 - tinyObj.toHsv().v
  location.rgb.x = tinyObj.toHsv().h / 360
  location.a.x = tinyObj.getAlpha()
}

// 传入一种颜色值 -> 更新全部颜色值
const updateColor = (color: string, alpha: number) => {
  const tinyObj = tinycolor(color)
  tinyObj.setAlpha(alpha)

  colors.rgbVal = tinyObj.toRgbString()
  colors.hexVal = tinyObj.toHexString()
  colors.r = tinyObj.toRgb().r
  colors.g = tinyObj.toRgb().g
  colors.b = tinyObj.toRgb().b
  colors.s = tinyObj.toHsv().s
  colors.v = tinyObj.toHsv().v
  colors.a = alpha

  emitColor(tinyObj)
}

// 传入调色板坐标 -> 更新颜色
const updatePanelColor = (x: number, y: number) => {
  const hsv = `hsv(${colors.h.toFixed(0)}, ${(x * 100).toFixed(0)}%, ${(
    (1 - y) *
    100
  ).toFixed(0)}%)`
  updateColor(hsv, colors.a)
  // 更新滑块位置
  location.panel.x = x
  location.panel.y = y
}

// 传入色阶柱坐标 -> 更新颜色
const updateRgbColor = (x: number) => {
  let currentX = x
  currentX === 1 && (currentX = 0) // 左右极限值去重
  const currentHue = Math.round(currentX * 360 * 100) / 100
  // 单独更新色阶
  colors.h = currentHue
  // 更新全部颜色
  const hsv = `hsv(${currentHue}, ${colors.s}, ${colors.v})`
  updateColor(hsv, colors.a)
  // 更新滑块位置
  location.rgb.x = x
}

// 传入透明度柱坐标 -> 更新颜色
const updateAColor = (x: number) => {
  let currentX = Number(x.toFixed(2))
  updateColor(colors.rgbVal, currentX)
  // 更新滑块位置
  location.a.x = x
}

// 移动调色板
const handlePanelMove = (e: any) => {
  let moveX = e.clientX - rect.panel.left
  let moveY = e.clientY - rect.panel.top
  const maxX = rect.panel.width
  const maxY = rect.panel.height
  const minX = 0
  const minY = 0
  moveX < minX && (moveX = minX)
  moveX > maxX && (moveX = maxX)
  moveY < minY && (moveY = minY)
  moveY > maxY && (moveY = maxY)
  updatePanelColor(moveX / maxX, moveY / maxY)
}
const handlePanelDown = (e: MouseEvent) => {
  if (disabled) return
  handleUsualDown(e, 'panel')
}
const handlePanelUp = () => {
  handleMoving(false)
  window.removeEventListener('mousemove', handlePanelMove)
  window.removeEventListener('mouseup', handlePanelUp)
}

// 移动色阶柱
const handleRgbMove = (e: any) => {
  let moveX = e.clientX - rect.rgb.left
  const maxX = rect.rgb.width
  const minX = 0
  moveX < minX && (moveX = minX)
  moveX > maxX && (moveX = maxX)
  updateRgbColor(moveX / maxX)
}
const handleRgbDown = (e: MouseEvent) => {
  if (disabled) return
  handleUsualDown(e, 'rgb')
}
const handleRgbUp = () => {
  handleMoving(false)
  window.removeEventListener('mousemove', handleRgbMove)
  window.removeEventListener('mouseup', handleRgbUp)
}

// 移动透明度柱
const handleAMove = (e: any) => {
  let moveX = e.clientX - rect.a.left
  const maxX = rect.a.width
  const minX = 0
  moveX < minX && (moveX = minX)
  moveX > maxX && (moveX = maxX)
  updateAColor(moveX / maxX)
}
const handleADown = (e: MouseEvent) => {
  if (disabled) return
  handleUsualDown(e, 'a')
}
const handleAUp = () => {
  handleMoving(false)
  window.removeEventListener('mousemove', handleAMove)
  window.removeEventListener('mouseup', handleAUp)
}

const handleUsualDown = (e: MouseEvent, type: 'panel' | 'rgb' | 'a') => {
  let downX = 0
  let downY = 0
  handleMoving(true)
  if (type === 'panel') {
    // 点击调色板 -> 更新颜色
    downX = e.clientX - rect.panel.left
    downY = e.clientY - rect.panel.top
    updatePanelColor(downX / rect.panel.width, downY / rect.panel.height)
    // 移动调色板 -> 更新颜色
    window.addEventListener('mousemove', handlePanelMove)
    window.addEventListener('mouseup', handlePanelUp)
  } else if (type === 'rgb') {
    // 点击色阶柱 -> 更新颜色
    downX = e.clientX - rect.rgb.left
    updateRgbColor(downX / rect.rgb.width)
    // 移动色阶柱 -> 更新颜色
    window.addEventListener('mousemove', handleRgbMove)
    window.addEventListener('mouseup', handleRgbUp)
  } else {
    // 点击透明度柱 -> 更新颜色
    downX = e.clientX - rect.a.left
    updateAColor(downX / rect.a.width)
    // 移动透明度柱 -> 更新颜色
    window.addEventListener('mousemove', handleAMove)
    window.addEventListener('mouseup', handleAUp)
  }
}

// 通过更新颜色函数
const handleUsualUpdate = (val: string) => {
  const currentColor = tinycolor(val)
  updateColor(val, currentColor.getAlpha())
  // 单独更新色阶
  colors.h = currentColor.toHsv().h
  // 更新滑块位置
  updateCursorLocation(currentColor)
}

// 选择颜色值类型
const colorType = ref('hex')
const handleSelect = (val: any) => {
  if (disabled) return
  colorType.value = val
}

// RGBA 输入框变化时触发
const inputChange = (val: string, type: 'r' | 'g' | 'b') => {
  let currentVal = Number(val)
  let color = ''
  if (type === 'r') {
    colors.r = currentVal
    color = `rgba(${val}, ${colors.g}, ${colors.b}, ${colors.a})`
  } else if (type === 'g') {
    colors.g = currentVal
    color = `rgba(${colors.r}, ${val}, ${colors.b}, ${colors.a})`
  } else {
    colors.b = currentVal
    color = `rgba(${colors.r}, ${colors.g}, ${val}, ${colors.a})`
  }
  handleUsualUpdate(color)
}
const inputChangeR = (val: string) => {
  inputChange(val, 'r')
}
const inputChangeG = (val: string) => {
  inputChange(val, 'g')
}
const inputChangeB = (val: string) => {
  inputChange(val, 'b')
}
const inputChangeA = (val: string) => {
  let currentVal = Number(val) / 100
  colors.a = currentVal
  updateAColor(currentVal)
}

const hexBackup = ref('')
const inputFocusHex = (val: string) => {
  hexBackup.value = val
}
const inputChangeHex = (val: string) => {
  colors.hexVal = val
}
const inputBlurHex = (val: string) => {
  const currentColor = tinycolor(val)
  currentColor.setAlpha(colors.a)
  if (currentColor.isValid()) {
    updateColor(val, colors.a)
    // 单独更新色阶
    colors.h = currentColor.toHsv().h
    // 更新滑块位置
    updateCursorLocation(currentColor)
  } else {
    colors.hexVal = hexBackup.value
  }
}

// 取色
const handleClickDropper = async () => {
  if (disabled) {
    return
  }
  // @ts-ignore
  const eyeDropper = new EyeDropper()
  const result = await eyeDropper.open()
  const color = result.sRGBHex

  handleUsualUpdate(color)
}
</script>

<style lang="scss">
@import './index.scss';
</style>
