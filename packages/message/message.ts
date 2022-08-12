import { ref, Ref, createVNode, render, reactive, isVNode } from 'vue'
import MessageList from './message-list.vue'
import { useContainer } from '../common'
import {
  MergeConfigType,
  MessageConfig,
  MessageConfigType,
  MessageType,
  PositionType
} from './type'
import _ from 'lodash'

// 创建消息提示容器
const popupWrapper = useContainer('i-popup-wrapper', document.body)

class MessageManger {
  private readonly listData: Ref<MergeConfigType[]>

  private readonly position: PositionType

  private container: HTMLElement | null

  private messageCount = 0

  constructor(config: MergeConfigType) {
    const { position = 'top' } = config

    const popper = document.createElement('div')
    popper.setAttribute('class', `i-message-wrapper__${position}`)
    this.container = popper
    this.listData = ref([])
    this.position = position

    const vm = createVNode(MessageList, {
      listData: this.listData.value,
      position,
      onClose: this.remove,
      onAfterClose: this.destroy
    })

    render(vm, this.container)
    popupWrapper.appendChild(this.container)
  }

  add = (config: MergeConfigType) => {
    this.messageCount++
    const message: MergeConfigType = reactive(config)
    if (config.position === 'top') {
      this.listData.value.push(message)
    } else {
      this.listData.value.unshift(message)
    }
    if (config.duration && config.duration !== 0) {
      setTimeout(() => {
        this.remove(message.id)
      }, config.duration * 1000)
    }
    return {
      close: () => this.remove(message.id)
    }
  }

  remove = (id: number) => {
    for (let i = 0; i < this.listData.value.length; i++) {
      const item = this.listData.value[i]
      if (item.id === id) {
        if (_.isFunction(item.onClose)) {
          item.onClose(id)
        }

        this.listData.value.splice(i, 1)
        break
      }
    }
  }

  clear = () => {
    this.listData.value.splice(0)
  }

  destroy = () => {
    if (this.listData.value.length === 0 && this.container) {
      render(null, this.container)
      popupWrapper.removeChild(this.container)
      this.container = null
      messageInstance[this.position] = undefined
    }
  }
}

const messageInstance: any = {}

const openMessage = (
  type: MessageType,
  messageConfig: MessageConfig,
  duration = 3,
  position = 'top'
) => {
  const isConfigMode =
    typeof messageConfig === 'object' && !isVNode(messageConfig)
  const mergeConfig = {
    id: Date.now(),
    type,
    content: isConfigMode
      ? (messageConfig as MessageConfigType)?.content
      : messageConfig,
    duration: isConfigMode
      ? (messageConfig as MessageConfigType)?.duration ?? 3
      : duration,
    position: isConfigMode
      ? (messageConfig as MessageConfigType)?.position ?? 'top'
      : (position as PositionType)
  }

  if (!messageInstance[mergeConfig.position]) {
    messageInstance[mergeConfig.position] = new MessageManger(mergeConfig)
  }
  return messageInstance[mergeConfig.position]!.add(mergeConfig)
}

const clearMessage = (position?: PositionType) => {
  if (position) {
    messageInstance[position]?.clear()
  } else {
    Object.values(messageInstance).forEach((item: any) => item?.clear())
  }
}

export default {
  info(
    messageConfig: MessageConfig,
    duration?: number,
    position?: PositionType
  ) {
    openMessage('info', messageConfig, duration, position)
  },
  success(
    messageConfig: MessageConfig,
    duration?: number,
    position?: PositionType
  ) {
    openMessage('success', messageConfig, duration, position)
  },
  warning(
    messageConfig: MessageConfig,
    duration?: number,
    position?: PositionType
  ) {
    openMessage('warning', messageConfig, duration, position)
  },
  error(
    messageConfig: MessageConfig,
    duration?: number,
    position?: PositionType
  ) {
    openMessage('error', messageConfig, duration, position)
  },
  clear(position?: PositionType) {
    clearMessage(position)
  }
}
