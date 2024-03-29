export interface DialogProps {
  /**
   * 控制对话框显示隐藏
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
   * 对话框宽度
   */
  width?: string | number
  /**
   * 对话框头部内容
   */
  header?: string | HTMLElement
  /**
   * 对话框底部内容
   */
  footer?: string | HTMLElement
  /**
   * 对话框关闭时触发事件
   */
  onClose?: () => void
}
