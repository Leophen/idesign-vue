<template>
  <div class="i-back-top" @click="scrollToTop">
    <Transition name="i-fade">
      <slot v-if="visible && $slots.default" />
    </Transition>
    <Transition name="i-fade">
      <Button
        shape="circle"
        class="i-back-top--button"
        v-if="visible && !$slots.default"
      >
        <Icon name="ArrowUpBold" />
      </Button>
    </Transition>
  </div>
</template>

<script setup lang="ts">
import _ from 'lodash'
import { onMounted, ref } from 'vue'
import { Icon } from '../icon'
import { Button } from '../button'

interface BackTopProps {
  /**
   * 监听滚动的元素
   */
  target?: string | HTMLElement
  /**
   * 显示起点高度
   * @default 0
   */
  visibleHeight?: number
  /**
   * 是否平滑滚动
   * @default true
   */
  smooth?: boolean
}

interface BackTopEmits {
  /**
   * 点击返回顶部时触发
   */
  (type: 'click'): void
  /**
   * 滚动层节点滚动时触发
   */
  (type: 'scroll'): void
}

const {
  target,
  visibleHeight = 0,
  smooth = true
} = defineProps<BackTopProps>()
const emit = defineEmits<BackTopEmits>()

const isWindow = !target
const visible = ref(visibleHeight > 0 ? false : true)

// 获取滚动层节点 t
const getTarget = (target: string | HTMLElement | undefined) => {
  if (_.isString(target)) {
    return document.querySelector(target) as HTMLElement
  } else {
    return isWindow ? document?.documentElement : (target as HTMLElement)
  }
}

const handleScroll = _.throttle((e: Event) => {
  const top = (e.target as HTMLElement).scrollTop
  top >= visibleHeight ? (visible.value = true) : (visible.value = false)
  emit('scroll')
}, 16)

onMounted(() => {
  const t = getTarget(target)
  t?.addEventListener('scroll', handleScroll)
})

const scrollToTop = () => {
  const t = getTarget(target)
  t?.scrollTo({
    top: 0,
    behavior: smooth ? 'smooth' : 'auto'
  })
  emit('click')
}
</script>

<style lang="scss">
@import './index.scss';
</style>
