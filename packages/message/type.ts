import { VNodeTypes } from 'vue'
export type PositionType = 'top' | 'bottom'
export type MessageType = 'info' | 'success' | 'warning' | 'error'

export interface MessageProps {
  /**
   * 全局提示类型
   * @default info
   */
  type: MessageType
  /**
   * 全局提示内容
   */
  content: string | VNodeTypes | symbol
  /**
   * 是否完成进入动画
   */
  entered?: boolean
  /**
   * 关闭时触发
   */
  onClose?: Function
}

export interface MessageListProps {
  /**
   * 消息组数据
   */
  listData: MergeConfigType[]
  /**
   * 消息出现位置
   * @default top
   */
  position?: PositionType
}

export interface MergeConfigType extends MessageProps {
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
   * @default top
   */
  position: PositionType
}

export interface MessageConfigType extends MessageProps {
  /**
   * 消息持续时间，单位秒
   * @default 3
   */
  duration?: number
  /**
   * 消息出现位置
   * @default top
   */
  position?: PositionType
}

export type MessageMethod = (
  messageConfig: MessageConfig,
  duration?: number,
  position?: PositionType
) => void

export type MessageConfig = string | symbol | VNodeTypes | MessageConfigType
