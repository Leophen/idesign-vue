<template>
  <div class="i-pagination-control">
    <div
      :class="[
        'i-pagination-btn',
        'i-pagination-btn__handle',
        (current === 1 || disabled) && 'i-pagination-btn__disabled'
      ]"
      @click="() => current !== 1 && !disabled && emit('choose', current - 1)"
    >
      <Icon name="ArrowLeft" :size="12" />
    </div>
    <template v-if="pageArr.length <= 10">
      <div
        :class="[
          'i-pagination-btn',
          current === item && 'i-pagination-btn__active',
          disabled && 'i-pagination-btn__disabled'
        ]"
        v-for="item in pageArr"
        :key="`item${item}`"
        @click="() => handleChooseNum(item)"
      >
        {{ item }}
      </div>
    </template>
    <template v-else>
      <div
        :class="[
          'i-pagination-btn',
          '-handle',
          disabled && 'i-pagination-btn__disabled'
        ]"
        @mouseenter="() => setLeftHover(true)"
        @mouseleave="() => setLeftHover(false)"
        @click="() => handleChooseNum(current - 5)"
        v-if="leftShow"
      >
        <Icon :name="leftHover ? 'ArrowDoubleLeft' : 'MoreFilled'" :size="12" />
      </div>
      <section class="i-pagination-btn__wrapper" ref="pagesRef">
        <div
          :class="[
            'i-pagination-btn',
            current === item && 'i-pagination-btn__active',
            disabled && 'i-pagination-btn__disabled'
          ]"
          v-for="item in pageArr"
          :key="`item${item}`"
          @click="() => handleChooseNum(item)"
        >
          {{ item }}
        </div>
      </section>
      <div
        :class="[
          'i-pagination-btn',
          '-handle',
          disabled && 'i-pagination-btn__disabled'
        ]"
        @mouseenter="() => setRightHover(true)"
        @mouseleave="() => setRightHover(false)"
        @click="() => handleChooseNum(current + 5)"
        v-if="rightShow"
      >
        <Icon
          :name="rightHover ? 'ArrowDoubleRight' : 'MoreFilled'"
          :size="12"
        />
      </div>
    </template>

    <div
      :class="[
        'i-pagination-btn',
        'i-pagination-btn__handle',
        (current === pageArr.length || disabled) && 'i-pagination-btn__disabled'
      ]"
      @click="
        () =>
          current !== pageArr.length && !disabled && emit('choose', current + 1)
      "
    >
      <Icon name="ArrowRight" :size="12" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '../icon'
import _ from 'lodash'
import { ref, watchEffect } from 'vue'

interface PaginationListProps {
  /**
   * 当前页
   * @default 1
   */
  current?: number
  /**
   * 数据总条数
   * @default 0
   */
  total?: number
  /**
   * 分页总页数
   * @default 10
   */
  pageSize?: number
  /**
   * 全局禁用
   * @default false
   */
  disabled?: boolean
}

interface PaginationListEmits {
  /**
   * 点击页数时触发
   */
  (type: 'choose', val: number): void
}

const {
  current = 1,
  total = 0,
  pageSize = 10,
  disabled = false
} = defineProps<PaginationListProps>()
const emit = defineEmits<PaginationListEmits>()

const leftShow = ref(false)
const rightShow = ref(false)

const leftHover = ref(false)
const rightHover = ref(false)
const setLeftHover = (show: boolean) => {
  leftHover.value = show
}
const setRightHover = (show: boolean) => {
  rightHover.value = show
}

const pagesRef = ref<HTMLElement>()

const pageArr = ref(_.range(1, _.ceil(total / pageSize) + 1))

const handleChooseNum = (item: number) => {
  if (!disabled) {
    let result = item
    result < 1 && (result = 1)
    result > pageArr.value.length && (result = pageArr.value.length)
    emit('choose', result)
  }
}

const updateArrowShow = () => {
  let lShow = true
  let rShow = true
  if (_.indexOf(pageArr.value, current) < 4) {
    lShow = false
  } else if (_.indexOf(pageArr.value, current) > pageArr.value.length - 5) {
    rShow = false
  }
  leftShow.value = lShow
  rightShow.value = rShow
}

watchEffect(() => {
  updateArrowShow()
  pagesRef.value &&
    pagesRef.value.scrollTo({
      left: 32 * (current - 3) + 8 * (current - 3),
      behavior: 'smooth'
    })
  const newCountArr = _.range(1, _.ceil(total / pageSize) + 1)
  pageArr.value = newCountArr
})
</script>

<style lang="scss">
@import './index.scss';
</style>
