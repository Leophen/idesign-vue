export interface TagProps {
  /**
   * 标签中的图标，可自定义图标呈现
   */
  icon?: string
  /**
   * 是否可添加
   * @default false
   */
  addable?: boolean
  /**
   * 是否可关闭
   * @default false
   */
  closeable?: boolean
  /**
   * 标签最大宽度，超出部分渐变省略。示例：'50px' / 80
   */
  maxWidth?: string | number
  /**
   * 标签尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 标签主题
   * @default dark
   */
  theme?: 'light' | 'dark'
  /**
   * 标签类型，用于描述组件不同的应用场景
   * @default default
   */
  type?: 'default' | 'primary' | 'warning' | 'error' | 'success'
  /**
   * 点击标签触发事件
   */
  onClick?: (e: MouseEvent) => void
  /**
   * 添加标签触发事件，设置后会自动带上添加按钮
   */
  onAdd?: (e: MouseEvent) => void
  /**
   * 删除标签触发事件，设置后会自动带上删除按钮
   */
  onClose?: (e: MouseEvent) => void
}
