import { CSSProperties } from 'vue'

export interface DropdownProps {
  /**
   * 下拉内容类名
   */
  contentClassName?: string
  /**
   * 内容
   */
  children?: string | HTMLElement
  /**
   * 自定义样式
   */
  style?: CSSProperties
  /**
   * 下拉列表宽度
   */
  width?: string | number
  /**
   * 列表项最大高度
   */
  maxHeight?: string | number
  /**
   * 下拉项高度
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 下拉选中项
   */
  value?: string | number | Array<string | number>
  /**
   * 下拉操作项
   * @default []
   */
  options?: Array<DropdownOption>
  /**
   * 菜单触发位置
   * @default bottom
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
   * 菜单触发方式
   * @default click
   */
  trigger?: 'hover' | 'click' | 'context-menu'
  /**
   * 是否可多选
   * @default false
   */
  multiple?: boolean
  /**
   * 级联子层级展开方向
   * @default right
   */
  cascaderDirection?: 'left' | 'right'
  /**
   * 是否全局禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 气泡是否与触发节点等宽
   * @default false
   */
  sameWidth?: boolean
  /**
   * 点击菜单项触发事件
   */
  onClick?: (
    value: string | number | Array<string | number>,
    event?: MouseEvent
  ) => void
  /**
   * 切换下拉操作时触发
   */
  onTrigger?: (visible: boolean) => void
}

export interface DropdownItemProps {
  /**
   * 下拉操作项内容
   * @default ''
   */
  content?: string | HTMLElement
  /**
   * 下拉操作项唯一标识
   */
  value: string | number
  /**
   * 级联子项宽度
   */
  width?: string | number
  /**
   * 级联子项最大高度
   */
  maxHeight?: string | number
  /**
   * 单项是否禁用
   * @default false
   */
  disabled?: boolean
  /**
   * 是否显示操作项之后的分隔线
   * @default false
   */
  divider?: boolean
  /**
   * 该下拉项上方组标题
   */
  title?: string
  /**
   * 点击时触发
   */
  onClick?: (dropdownItem: DropdownOption, event: MouseEvent) => void
}

export interface DropdownMenuProps {
  /**
   * 下拉操作项
   * @default []
   */
  options?: Array<DropdownOption>
  /**
   * 下拉列表宽度
   */
  width?: string | number
  /**
   * 级联子项最大高度
   */
  maxHeight?: string | number
  /**
   * 下拉项高度
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 级联子层级展开方向
   * @default right
   */
  cascaderDirection?: 'left' | 'right'
  /**
   * 是否可多选
   * @default false
   */
  multiple?: boolean
  /**
   * 选中值
   */
  selectedValue?: string | number | Array<string | number>
  /**
   * 点击菜单项触发事件
   */
  clickItem?: (dropdownItem: DropdownOption, event: MouseEvent) => void
}

export type DropdownOption = {
  children?: Array<DropdownItemProps>
} & DropdownItemProps &
  Record<string, any>
