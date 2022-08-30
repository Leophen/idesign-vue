<template>
  <div class="i-pagination">
    <PaginationSelect
      :value="pageData.pageSize"
      :disabled="disabled"
      @select="switchPageSize"
      v-if="!hideSelect"
    />
    <PaginationList
      :current="pageData.current"
      :total="pageData.total"
      :pageSize="pageData.pageSize"
      :disabled="disabled"
      @choose="clickPageNum"
    />
    <section class="i-pagination-input" v-if="!hideInput">
      <span>前往</span>
      <Input
        :style="{
          width: turnValue(
            String(_.ceil(pageData.total / pageData.pageSize)).length * 8 + 20
          )
        }"
        placeholder=""
        type="number"
        speed="slow"
        hideNumberBtn
        :modelValue="inputVal"
        :disabled="disabled"
        :maxNumber="_.ceil(pageData.total / pageData.pageSize)"
        :minNumber="1"
        @input="handleInputChange"
        @enter="handleInputEnter"
        @blur="handleInputEnter"
        @moveUp="handleInputEnter"
      />
      <span>页</span>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Input } from '../input'
import _ from 'lodash'
import PaginationSelect from './pagination-select.vue'
import PaginationList from './pagination-list.vue'
import { PageInfo } from './type'
import { turnValue } from '../common'
import { ref, watch } from 'vue'

interface PaginationProps {
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
  /**
   * 是否隐藏分页选择器
   * @default false
   */
  hideSelect?: boolean
  /**
   * 是否隐藏跳转输入框
   * @default false
   */
  hideInput?: boolean
}

interface PaginationEmits {
  /**
   * 当前页或分页发生变化时触发
   */
  (type: 'change', val: PageInfo): void
}

const {
  current = 1,
  total = 0,
  pageSize = 10,
  disabled = false,
  hideSelect = false,
  hideInput = false
} = defineProps<PaginationProps>()
const emit = defineEmits<PaginationEmits>()

const pageData = ref({
  current: current,
  total: total,
  pageSize: pageSize
})

const switchPageSize = (pageSize: number) => {
  pageData.value.current = 1
  pageData.value.pageSize = pageSize
  emit('change', pageData.value)
}

const clickPageNum = (page: number) => {
  pageData.value.current = page
  emit('change', pageData.value)
}

const inputVal = ref(String(pageData.value.current))
watch(
  () => pageData.value.current,
  (newVal) => {
    inputVal.value = String(newVal)
  }
)

const handleInputEnter = (val: string) => {
  if (val !== '') {
    clickPageNum(Number(val))
  } else {
    clickPageNum(1)
  }
}

const handleInputChange = (val: string) => {
  inputVal.value = val
}
</script>

<style lang="scss">
@import './index.scss';
</style>
