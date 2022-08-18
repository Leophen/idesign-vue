<template>
  <div
    :class="[
      'i-tag',
      size && `i-tag--size-${size}`,
      type && `i-tag--type-${type}`,
      theme && `i-tag--theme-${theme}`,
      addable && 'i-tag--add-btn',
      maxWidth && 'i-tag--ellipsis'
    ]"
    :style="{ maxWidth: turnValue(maxWidth) }"
    @click="handleClick"
  >
    <Icon name="ThePlus" :size="size === 'large' ? 16 : 12" v-if="addable" />
    <Icon
      :name="icon"
      :size="size && { small: 12, medium: 14, large: 16 }[size]"
      v-if="icon"
    />
    <slot />
    <div class="i-tag--close-btn" @click.stop="handleClose" v-if="closeable">
      <Icon name="Close" :size="size === 'large' ? 16 : 12" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '../icon'
import { turnValue } from '../common'

interface TagProps {
  /**
   * 标签中的图标，可自定义图标呈现
   */
  icon?: string
  /**
   * 是否可添加
   * @default false
   */
  addable?: boolean
  /**
   * 是否可关闭
   * @default false
   */
  closeable?: boolean
  /**
   * 标签最大宽度，超出部分渐变省略。示例：'50px' / 80
   */
  maxWidth?: string | number
  /**
   * 标签尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 标签主题
   * @default dark
   */
  theme?: 'light' | 'dark'
  /**
   * 标签类型，用于描述组件不同的应用场景
   * @default default
   */
  type?: 'default' | 'primary' | 'warning' | 'error' | 'success'
}

interface TagEmits {
  /**
   * 点击标签触发事件
   */
  (type: 'click', e: MouseEvent): void
  /**
   * 添加标签触发事件
   */
  (type: 'add', e: MouseEvent): void
  /**
   * 删除标签触发事件
   */
  (type: 'close', e: MouseEvent): void
}

const {
  icon,
  addable = false,
  closeable = false,
  maxWidth,
  size,
  theme,
  type = 'default'
} = defineProps<TagProps>()
const emit = defineEmits<TagEmits>()

const handleClick = (e: MouseEvent) => {
  if (addable) {
    emit('add', e)
  }
  emit('click', e)
}

const handleClose = (e: MouseEvent) => {
  emit('close', e)
}
</script>

<style lang="scss">
@import './index.scss';
</style>
