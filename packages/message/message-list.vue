<template>
  <div class="i-message-wrapper">
    <div class="i-message-wrapper__top">
      <Message
        v-for="item in listData['top']"
        :config="item"
        :key="item.key"
        :type="item.type"
      />
    </div>
    <div class="i-message-wrapper__bottom">
      <Message
        v-for="item in listData['bottom']"
        :config="item"
        :key="item.key"
        :type="item.type"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Message from './message.vue'

interface MessageProps {
  /**
   * 消息列表数据
   */
  listData?: any
  /**
   * 消息位置
   * @default top
   */
  placement?: 'top' | 'bottom'
}

const {
  listData = {
    top: [],
    bottom: []
  },
  placement = 'top'
} = defineProps<MessageProps>()

console.log(listData, placement)
</script>

<style lang="scss">
@import './index.scss';
</style>
