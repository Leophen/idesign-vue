<template>
  <TransitionGroup
    class="i-message-list"
    :name="`message-${position}`"
    tag="div"
    @afterLeave="() => emit('afterClose')"
  >
    <message v-for="item in listData" :key="item.id" :type="item.type">
      <VNode :content="item.content" />
    </message>
  </TransitionGroup>
</template>

<script setup lang="ts">
import Message from './message.vue'
import { VNode } from '../v-node'
import { MergeConfigType, PositionType } from './type'

interface MessageListProps {
  /**
   * 消息列表数据
   */
  listData?: MergeConfigType[]
  /**
   * 消息位置
   * @default top
   */
  position?: PositionType
}

interface MessageListEmits {
  /**
   * 关闭后触发
   */
  (type: 'afterClose'): void
}

const { listData = [], position = 'top' } = defineProps<MessageListProps>()
const emit = defineEmits<MessageListEmits>()
</script>

<style lang="scss">
@import './index.scss';
</style>
