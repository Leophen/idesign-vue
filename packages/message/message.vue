<template>
  <Transition name="i-fade">
    <div class="i-message" v-show="visible">
      <Icon
        :name="
          {
            info: 'TipInfo',
            success: 'TipCheckFill',
            warning: 'TipWarningFill',
            error: 'TipCloseFill'
          }[config.type]
        "
        :size="20"
      />
      {{ config.content }}
    </div>
  </Transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Icon } from '../icon'
import { ConfigType } from './type'

interface MessageProps {
  /**
   * 提示配置
   */
  config?: ConfigType
}

const {
  config = {
    type: 'info',
    content: '',
    duration: 3,
    placement: 'top'
  }
} = defineProps<MessageProps>()

const visible = ref(false)

const onOpen = (config: ConfigType) => {
  visible.value = true
}

onOpen(config)
</script>

<style lang="scss">
@import './index.scss';
</style>
