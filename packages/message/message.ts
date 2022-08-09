import { createApp } from 'vue'
import MessageList from './message-list.vue'
import { useContainer } from '../common'
import { ConfigType } from './type'

// 创建消息提示容器
const popupWrapper = useContainer('i-popup-wrapper', document.body)

const listData: any = {
  top: [],
  bottom: []
}

const updateMessageContainer = (config: any, mode: 'add' | 'del') => {
  const location = config.placement
  if (mode === 'add') {
    location === 'top'
      ? listData[location].push(config)
      : listData[location].unshift(config)
    // 延时移除 Message
    if (config.duration > 0) {
      setTimeout(() => {
        listData[location].map((item: any, index: number) => {
          if (item.key === config.key) {
            listData[location].splice(index, 1)
          }
        })
        const message = createApp(MessageList, { listData })
        message.mount(popupWrapper)
      }, config.duration * 1000)
    }
  } else {
    listData[location] = []
  }
  const message = createApp(MessageList, { listData })
  message.mount(popupWrapper)
}

const openMessage = (
  type: 'info' | 'success' | 'warning' | 'error',
  content: string | ConfigType,
  duration = 3,
  placement = 'top'
) => {
  updateMessageContainer(
    {
      key: Date.now(),
      type,
      content: typeof content === 'object' ? content?.content : content,
      duration: typeof content === 'object' ? content?.duration || 3 : duration,
      placement:
        typeof content === 'object' ? content?.placement || 'top' : placement
    },
    'add'
  )
}

const closeMessage = (content: string | ConfigType, placement = 'top') => {
  updateMessageContainer(
    {
      placement:
        typeof content === 'object' ? content?.placement || 'top' : placement
    },
    'del'
  )
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
  closeAll(
    content: string | ConfigType,
    duration?: number,
    placement?: 'top' | 'bottom'
  ) {
    closeMessage(content, placement)
  }
}
