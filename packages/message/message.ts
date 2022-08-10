import { ref, Ref, createVNode, render, reactive } from 'vue'
import MessageList from './message-list.vue'
import { useContainer } from '../common'
import { ConfigType } from './type'
import _ from 'lodash'

// 创建消息提示容器
const popupWrapper = useContainer('i-popup-wrapper', document.body)

class MessageManger {
  private readonly messages: Ref<ConfigType[]>

  private readonly placement: 'top' | 'bottom'

  private container: HTMLElement | null

  private messageCount = 0

  constructor(config: ConfigType) {
    const { placement = 'top' } = config

    const popper = document.createElement('div')
    popper.setAttribute('class', `i-message-wrapper__${placement}`)
    this.container = popper
    this.messages = ref([])
    this.placement = placement

    const vm = createVNode(MessageList, {
      messages: this.messages.value,
      placement,
      onClose: this.remove,
      onAfterClose: this.destroy
    })

    render(vm, this.container)
    popupWrapper.appendChild(this.container)
  }

  add = (config: ConfigType) => {
    this.messageCount++
    const message: ConfigType = reactive(config)
    if (config.placement === 'top') {
      this.messages.value.push(message)
    } else {
      this.messages.value.unshift(message)
    }
    if (config.duration && config.duration !== 0) {
      setTimeout(() => {
        this.remove(message.key)
      }, config.duration * 1000)
    }
    return {
      close: () => this.remove(message.key)
    }
  }

  remove = (id: number | string) => {
    for (let i = 0; i < this.messages.value.length; i++) {
      const item = this.messages.value[i]
      if (item.key === id) {
        if (_.isFunction(item.onClose)) {
          item.onClose(id)
        }

        this.messages.value.splice(i, 1)
        break
      }
    }
  }

  clear = () => {
    this.messages.value.splice(0)
  }

  destroy = () => {
    if (this.messages.value.length === 0 && this.container) {
      render(null, this.container)
      popupWrapper.removeChild(this.container)
      this.container = null
      messageInstance[this.placement] = undefined
    }
  }
}

const messageInstance: any = {}

const openMessage = (
  type: 'info' | 'success' | 'warning' | 'error',
  content: string | ConfigType,
  duration = 3,
  placement = 'top'
) => {
  const isConfigMode = typeof content === 'object'
  const mergeConfig = {
    key: Date.now(),
    type,
    content: isConfigMode ? content?.content : content,
    duration: isConfigMode ? content?.duration || 3 : duration,
    placement: isConfigMode
      ? content?.placement || 'top'
      : (placement as 'top' | 'bottom')
  }

  if (!messageInstance[mergeConfig.placement]) {
    messageInstance[mergeConfig.placement] = new MessageManger(mergeConfig)
  }
  return messageInstance[mergeConfig.placement]!.add(mergeConfig)
}

const closeMessage = (placement = 'all') => {
  if (placement !== 'all') {
    messageInstance[placement]?.clear()
  } else {
    Object.values(messageInstance).forEach((item: any) => item?.clear())
  }
}

export default {
  info(
    content: string | ConfigType,
    duration?: number,
    placement?: 'top' | 'bottom'
  ) {
    openMessage('info', content, duration, placement)
  },
  success(
    content: string | ConfigType,
    duration?: number,
    placement?: 'top' | 'bottom'
  ) {
    openMessage('success', content, duration, placement)
  },
  warning(
    content: string | ConfigType,
    duration?: number,
    placement?: 'top' | 'bottom'
  ) {
    openMessage('warning', content, duration, placement)
  },
  error(
    content: string | ConfigType,
    duration?: number,
    placement?: 'top' | 'bottom'
  ) {
    openMessage('error', content, duration, placement)
  },
  closeAll(placement?: 'top' | 'bottom') {
    closeMessage(placement ?? 'all')
  }
}
