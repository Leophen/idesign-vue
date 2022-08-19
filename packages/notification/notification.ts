import { ref, Ref, createVNode, render, reactive, isVNode } from 'vue'
import NotificationList from './notification-list.vue'
import { isBrowser, useContainer } from '../common'
import {
  MergeConfigType,
  NotificationConfig,
  NotificationConfigType,
  NotificationType,
  PositionType
} from './type'
import _ from 'lodash'

// 创建消息通知容器
let popupWrapper: Element
isBrowser() && (popupWrapper = useContainer('i-popup-wrapper', document.body))

class NotificationManger {
  private readonly listData: Ref<MergeConfigType[]>

  private readonly position: PositionType

  private container: HTMLElement | null

  private notificationCount = 0

  constructor(config: MergeConfigType) {
    const { position = 'top-right' } = config

    const popper = document.createElement('div')
    popper.setAttribute('class', `i-notification-wrapper__${position}`)
    this.container = popper
    this.listData = ref([])
    this.position = position

    const vm = createVNode(NotificationList, {
      listData: this.listData.value,
      position,
      onClose: (id: number) => this.remove(id),
      onAfterClose: this.destroy
    })

    render(vm, this.container)
    popupWrapper.appendChild(this.container)
  }

  add = (config: MergeConfigType) => {
    this.notificationCount++
    const notification: MergeConfigType = reactive(config)
    if (config.position.split('-')[0] === 'top') {
      this.listData.value.push(notification)
    } else {
      this.listData.value.unshift(notification)
    }
    if (config.duration && config.duration !== 0) {
      setTimeout(() => {
        this.remove(notification.id)
      }, config.duration * 1000)
    }
    return {
      close: () => this.remove(notification.id)
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
      notificationInstance[this.position] = undefined
    }
  }
}

const notificationInstance: any = {}

const openNotification = (
  type: NotificationType,
  notificationConfig: NotificationConfig,
  duration = 3,
  position = 'top-right',
  closeable = false
) => {
  const isConfigMode =
    typeof notificationConfig === 'object' && !isVNode(notificationConfig)
  const mergeConfig = {
    id: Date.now(),
    type,
    title: isConfigMode
      ? (notificationConfig as NotificationConfigType)?.title
      : undefined,
    content: isConfigMode
      ? (notificationConfig as NotificationConfigType)?.content
      : notificationConfig,
    duration: isConfigMode
      ? (notificationConfig as NotificationConfigType)?.duration ?? 3
      : duration,
    position: isConfigMode
      ? (notificationConfig as NotificationConfigType)?.position ?? 'top-right'
      : (position as PositionType),
    closeable: isConfigMode
      ? (notificationConfig as NotificationConfigType)?.closeable ?? false
      : closeable
  }

  if (!notificationInstance[mergeConfig.position]) {
    notificationInstance[mergeConfig.position] = new NotificationManger(
      mergeConfig
    )
  }
  return notificationInstance[mergeConfig.position]!.add(mergeConfig)
}

const clearNotification = (position?: PositionType) => {
  if (position) {
    notificationInstance[position]?.clear()
  } else {
    console.log(Object.values(notificationInstance), 'jjj')
    Object.values(notificationInstance).forEach((item: any) => item?.clear())
  }
}

export default {
  info(
    notificationConfig: NotificationConfig,
    duration?: number,
    position?: PositionType,
    closeable?: boolean
  ) {
    openNotification('info', notificationConfig, duration, position, closeable)
  },
  success(
    notificationConfig: NotificationConfig,
    duration?: number,
    position?: PositionType,
    closeable?: boolean
  ) {
    openNotification(
      'success',
      notificationConfig,
      duration,
      position,
      closeable
    )
  },
  warning(
    notificationConfig: NotificationConfig,
    duration?: number,
    position?: PositionType,
    closeable?: boolean
  ) {
    openNotification(
      'warning',
      notificationConfig,
      duration,
      position,
      closeable
    )
  },
  error(
    notificationConfig: NotificationConfig,
    duration?: number,
    position?: PositionType,
    closeable?: boolean
  ) {
    openNotification('error', notificationConfig, duration, position, closeable)
  },
  clear(position?: PositionType) {
    clearNotification(position)
  }
}
