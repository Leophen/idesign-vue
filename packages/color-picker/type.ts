import { CSSProperties } from 'vue'

export const defaultColor = [
  {
    value: 'rgb(206, 55, 46)'
  },
  {
    value: 'rgb(237, 149, 160)'
  },
  {
    value: 'rgb(252, 238, 239)'
  },
  {
    value: 'rgb(232, 109, 44)'
  },
  {
    value: 'rgb(245, 192, 66)'
  },
  {
    value: 'rgb(238, 209, 103)'
  },
  {
    value: 'rgb(127, 225, 89)'
  },
  {
    value: 'rgb(114, 212, 183)'
  },
  {
    value: 'rgb(135, 214, 230)'
  },
  {
    value: 'rgb(216, 238, 242)'
  },
  {
    value: 'rgb(86, 116, 245)'
  },
  {
    value: 'rgb(103, 98, 192)'
  },
  {
    value: 'rgb(223, 221, 252)'
  },
  {
    value: 'rgb(92, 192, 131)'
  },
  {
    value: 'rgb(210, 90, 182)'
  }
]

export interface colorListType {
  value: string
}

export interface ColorPickerProps {
  /**
   * 类名
   */
  className?: string
  /**
   * 自定义样式
   */
  style?: CSSProperties
  /**
   * 触发颜色块类名
   */
  triggerClassName?: string
  /**
   * 触发颜色块样式
   */
  triggerStyle?: CSSProperties
  /**
   * 触发颜色块尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large'
  /**
   * 固定颜色值（受控）
   */
  value?: string
  /**
   * 默认颜色值（非受控）
   * @default #5e62ea
   */
  defaultValue?: string
  /**
   * 底部预设颜色
   */
  colorList?: colorListType[]
  /**
   * 是否禁用颜色选择器
   * @default false
   */
  disabled?: boolean
  /**
   * 修改颜色值时触发
   */
  onChange?: (val: string) => void
  /**
   * 切换颜色面板时触发
   */
  onTrigger?: (val: string, visible: boolean) => void
}

export interface ColorPanelProps extends ColorPickerProps {
  /**
   * 点击关闭按钮时触发
   */
  onClose?: () => void
}

export interface ColorItemProps {
  /**
   * 颜色
   * @default #5e62ea
   */
  color?: string
  /**
   * 点击事件
   */
  onClick?: (val: string) => void
}

export interface ColorCursorProps {
  /**
   * 自定义样式
   */
  style?: CSSProperties
  /**
   * 初始横坐标比例
   */
  x?: number
  /**
   * 初始纵坐标比例
   */
  y?: number
  /**
   * 拖拽方向
   * @default xy
   */
  mode?: 'x' | 'y' | 'xy'
  /**
   * 滑块颜色
   * @default #5e62ea
   */
  color?: string
}
