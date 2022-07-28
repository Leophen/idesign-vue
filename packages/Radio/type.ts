export interface RadioGroupProps {
  /**
   * 单选框组选中的值
   */
  currentValue?: string | number
  /**
   * 单选框组全局类型
   * @default radio
   */
  type?: 'radio' | 'radio-button'
  /**
   * 按钮单选框全局尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 单选框组是否全局禁用
   */
  disabled?: boolean
  /**
   * 选中某一项时触发
   */
  onChange?: (value: string | number, ev: Event) => void
}

export interface RadioProps {
  /**
   * 单选框类型
   * @default radio
   */
  type?: 'radio' | 'radio-button'
  /**
   * 按钮单选框尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 是否选中
   * @default false
   */
  checked?: boolean
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean
  /**
   * 单选框的值
   */
  value?: string | number
  /**
   * 值变化时触发
   */
  onChange?: (checked: boolean, ev: Event) => void
}

export interface RadioContextValue {
  inject: (props: RadioProps) => RadioProps
}
