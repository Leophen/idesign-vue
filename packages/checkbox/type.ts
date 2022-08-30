export interface CheckboxProps {
  /**
   * 按钮多选框尺寸
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
   * 多选框的值
   */
  value?: string | number
  /**
   * 值变化时触发
   */
  onChange?: (checked: boolean, context: Event) => void
}

export interface CheckboxGroupProps {
  /**
   * 多选框组选中固定值（受控）
   */
  modelValue?: Array<string | number>
  /**
   * 多选框组选中默认值（非受控）
   */
  defaultChecked?: Array<string | number>
  /**
   * 按钮多选框全局尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 多选框组是否全局禁用
   */
  disabled?: boolean
  /**
   * 选中某一项时触发
   */
  onChange?: (
    value: Array<string | number> | string | number,
    context: Event
  ) => void
}
