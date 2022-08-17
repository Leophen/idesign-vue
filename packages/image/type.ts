export interface ImageProps {
  /**
   * 图片地址
   */
  src?: string
  /**
   * 图片宽度
   * @default 200
   */
  width?: string | number
}

export interface PreviewDialogProps {
  /**
   * 显示隐藏
   * @default false
   */
  visible?: boolean
  /**
   * 按下 ESC 是否关闭
   * @default true
   */
  closeOnEsc?: boolean
  /**
   * 图片地址
   */
  image?: string
  /**
   * x 值
   * @default 0
   */
  x?: number
  /**
   * y 值
   * @default 0
   */
  y?: number
  /**
   * 关闭时触发
   */
  onClose?: () => void
}
