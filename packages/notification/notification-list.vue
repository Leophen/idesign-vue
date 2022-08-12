<template>
  <TransitionGroup
    class="i-notification-list"
    :name="`notification-${position}`"
    tag="div"
    @afterLeave="() => emit('afterClose')"
  >
    <Notification
      v-for="item in listData"
      :key="item.id"
      :type="item.type"
      :closeable="item.closeable"
      @close="() => emit('close', item.id)"
    >
      <template #title v-if="item.title">
        <VNode :content="item.title" />
      </template>
      <VNode :content="item.content" />
    </Notification>
  </TransitionGroup>
</template>

<script setup lang="ts">
import Notification from './notification.vue'
import { VNode } from '../v-node'
import { MergeConfigType, PositionType } from './type'

interface NotificationListProps {
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

interface NotificationListEmits {
  /**
   * 关闭后触发
   */
  (type: 'afterClose'): void
  /**
   * 关闭单项通知时触发
   */
  (type: 'close', id: number): void
}

const { listData = [], position = 'top-right' } =
  defineProps<NotificationListProps>()
const emit = defineEmits<NotificationListEmits>()
</script>

<style lang="scss">
@import './index.scss';
</style>
