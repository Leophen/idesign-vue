import { positionType } from '../common'

export interface DrawerProps {
  /**
   * 控制抽屉显示隐藏
   * @default false
   */
  visible?: boolean
  /**
   * 按下退出键是否触发关闭事件
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * 是否显示遮罩层
   * @default true
   */
  showMask?: boolean
  /**
   * 是否显示底部内容
   * @default false
   */
  hideFooter?: boolean
  /**
   * 抽屉展开位置
   * @default right
   */
  placement?: positionType
  /**
   * 抽屉宽度
   */
  width?: string | number
  /**
   * 抽屉高度
   */
  height?: string | number
  /**
   * 抽屉头部内容
   */
  header?: string | HTMLElement
  /**
   * 抽屉底部内容
   */
  footer?: string | HTMLElement
  /**
   * 抽屉关闭时触发事件
   */
  onClose?: () => void
}
