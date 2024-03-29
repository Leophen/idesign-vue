export interface InputProps {
  /**
   * 占位符
   * @default 请输入
   */
  placeholder?: string
  /**
   * 输入框固定值（受控）
   */
  modelValue?: string | number
  /**
   * 输入框默认值（非受控）
   */
  defaultValue?: string | number
  /**
   * 是否禁用输入框
   * @default false
   */
  disabled?: boolean
  /**
   * 输入框是否只读
   * @default false
   */
  readonly?: boolean
  /**
   * 是否隐藏数字输入框后缀按钮
   * @default false
   */
  hideNumberBtn?: boolean
  /**
   * 是否聚焦时全选
   * @default false
   */
  selectAll?: boolean
  /**
   * 输入框尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 输入框状态
   */
  status?: 'success' | 'warning' | 'error'
  /**
   * 输入框底部提示
   */
  tips?: string
  /**
   * 用户最多可以输入的字符个数
   */
  maxLength?: number
  /**
   * 是否可清空
   * @default false
   */
  clearable?: boolean
  /**
   * 输入框类型
   * @default text
   */
  type?: 'text' | 'password' | 'number'
  /**
   * 数字输入框滑块数值变化速率
   * @default default
   */
  speed?: 'slow' | 'default' | 'fast'
  /**
   * 数字输入框最大值
   */
  maxNumber?: number
  /**
   * 数字输入框最小值
   */
  minNumber?: number
  /**
   * 数字输入框清空值时是否转为最小值
   * @default false
   */
  minNumberLock?: boolean
  /**
   * 数字输入框保留几位小数
   * @default 0
   */
  precision?: number
  /**
   * 数字输入框数值变化间隔
   * @default 1
   */
  step?: number
  /**
   * 组件前置图标名
   */
  prefixIcon?: string
  /**
   * 组件后置图标名
   */
  suffixIcon?: string
  /**
   * 组件前置图标类名
   */
  prefixIconClass?: string
  /**
   * 组件后置图标类名
   */
  suffixIconClass?: string
  /**
   * 输入框值发生变化时触发
   */
  onChange?: (value: string, ev?: Event) => void
  /**
   * 输入框聚焦时触发
   */
  onFocus?: (value: string, ev?: Event) => void
  /**
   * 输入框失焦时触发
   */
  onBlur?: (value: string, ev?: Event) => void
  /**
   * 键盘按下时触发
   */
  onKeyDown?: (value: string, ev?: Event) => void
  /**
   * 键盘按下回车键时触发
   */
  onEnter?: (value: string, ev?: Event) => void
  /**
   * 释放键盘时触发
   */
  onKeyUp?: (value: string, ev?: Event) => void
  /**
   * 清空按钮点击时触发
   */
  onClear?: (ev?: Event) => void
  /**
   * 数字输入框移动滑块时触发
   */
  onMove?: (value: string, ev?: Event) => void
  /**
   * 数字输入框滑块失焦时触发
   */
  onMoveUp?: (value: string) => void
  /**
   * 点击前置图标触发事件
   */
  clickPrefixIcon?: (ev?: MouseEvent) => void
  /**
   * 点击后置图标触发事件
   */
  clickSuffixIcon?: (ev?: MouseEvent) => void
}

export interface InputGroupProps {
  /**
   * 输入框组合前缀
   */
  prefixContent?: string | HTMLElement
  /**
   * 输入框组合后缀
   */
  suffixContent?: string | HTMLElement
  /**
   * 点击前缀触发事件
   */
  clickPrefix?: (ev?: MouseEvent) => void
  /**
   * 点击后缀触发事件
   */
  clickSuffix?: (ev?: MouseEvent) => void
}
