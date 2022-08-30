export interface RadioGroupProps {
  /**
   * 单选框组选中固定值（受控）
   */
  modelValue?: string | number
  /**
   * 单选框组选中默认值（非受控）
   */
  defaultChecked?: string | number
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
   * 是否固定选中（受控）
   */
  modelValue?: boolean
  /**
   * 是否默认选中（非受控）
   * @default false
   */
  defaultChecked?: boolean
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
