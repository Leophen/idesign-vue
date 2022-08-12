import { VNodeTypes } from 'vue'
import { VueNode } from '../common'
export type PositionType =
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
export type NotificationType = 'info' | 'success' | 'warning' | 'error'

export interface NotificationProps {
  /**
   * 全局通知类型
   * @default info
   */
  type: NotificationType
  /**
   * 全局通知内容
   */
  content: VueNode
  /**
   * 通知标题
   */
  title?: VueNode
  /**
   * 是否可关闭
   * @default false
   */
  closeable?: boolean
  /**
   * 关闭时触发
   */
  onClose?: Function
}

export interface NotificationListProps {
  /**
   * 消息组数据
   */
  listData: MergeConfigType[]
  /**
   * 消息出现位置
   * @default top-right
   */
  position?: PositionType
  /**
   * 关闭单项通知时触发
   */
  onClose?: (idx: number, position: PositionType) => void
}

export interface MergeConfigType extends NotificationProps {
  /**
   * 消息唯一标识
   * @default 时间值
   */
  id: number
  /**
   * 消息持续时间，单位秒
   * @default 3
   */
  duration: number
  /**
   * 消息出现位置
   * @default top-right
   */
  position: PositionType
}

export interface NotificationConfigType extends NotificationProps {
  /**
   * 消息持续时间，单位秒
   * @default 3
   */
  duration?: number
  /**
   * 消息出现位置
   * @default top-right
   */
  position?: PositionType
}

export type NotificationMethod = (
  notificationConfig: NotificationConfig,
  duration?: number,
  position?: PositionType,
  closeable?: boolean
) => void

export type NotificationConfig = VueNode | NotificationConfigType
