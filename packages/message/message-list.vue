<template>
  <TransitionGroup
    class="i-message-list"
    :name="`i-slide-in-${placement}`"
    tag="div"
    @afterLeave="() => emit('afterClose')"
  >
    <message v-for="item in messages" :key="item.key" :type="item.type">
      {{ item.content }}
    </message>
  </TransitionGroup>
</template>

<script setup lang="ts">
import Message from './message.vue'
import { ConfigType } from './type'

interface MessageListProps {
  /**
   * 消息列表数据
   */
  messages?: ConfigType[]
  /**
   * 消息位置
   * @default top
   */
  placement?: 'top' | 'bottom'
}

interface MessageListEmits {
  /**
   * 关闭后触发
   */
  (type: 'afterClose'): void
}

const { messages = [], placement = 'top' } = defineProps<MessageListProps>()
const emit = defineEmits<MessageListEmits>()
</script>

<style lang="scss">
@import './index.scss';
</style>
