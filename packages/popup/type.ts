export type placementType =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'left-top'
  | 'left-bottom'
  | 'right'
  | 'right-top'
  | 'right-bottom'

export interface PopupProps {
  /**
   * 包裹层类名
   */
  className?: string
  /**
   * 内容
   */
  children?: string | HTMLElement
  /**
   * 弹窗内容类名
   */
  portalClassName?: string
  /**
   * 气泡提示内容
   */
  content?: string | HTMLElement
  /**
   * 气泡提示位置
   * @default top
   */
  placement?:
    | 'top'
    | 'left'
    | 'right'
    | 'bottom'
    | 'top-left'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-right'
    | 'left-top'
    | 'left-bottom'
    | 'right-top'
    | 'right-bottom'
  /**
   * 触发气泡出现的方式
   * @default hover
   */
  trigger?: 'hover' | 'click' | 'context-menu'
  /**
   * 手动显示气泡
   */
  visible?: boolean
  /**
   * 气泡默认显示
   * @default false
   */
  defaultVisible?: boolean
  /**
   * 是否禁用气泡
   * @default false
   */
  disabled?: boolean
  /**
   * 气泡是否与触发节点等宽
   * @default false
   */
  sameWidth?: boolean
  /**
   * 气泡是否无内边距
   * @default false
   */
  noPadding?: boolean
  /**
   * 这个值变化时手动更新位置
   */
  updateLocation?: string | number | boolean
  /**
   * 触发气泡操作时触发
   */
  onTrigger?: (visible: boolean) => void
}

export interface PortalProps {
  className?: string
  visible?: boolean
  content?: string | HTMLElement
  placement?: placementType
  top: number
  left: number
  width: number
  height: number
}
