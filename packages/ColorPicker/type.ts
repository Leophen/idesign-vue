export interface colorListType {
  value: string
}

export interface ColorPickerProps {
  /**
   * 触发颜色块类名
   */
  triggerClassName?: string;
  /**
   * 触发颜色块样式
   */
  triggerStyle?: CSSProperties;
  /**
   * 触发颜色块尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 颜色值
   */
  value?: string;
  /**
   * 默认颜色值
   * @default #265CF0
   */
  defaultValue?: string;
  /**
   * 默认可选值
   */
  colorList?: colorListType[]
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
   * @default #265CF0
   */
  color?: string;
  /**
   * 点击事件
   */
  onClick?: (val: string) => void;
}

export interface ColorCursorProps {
  /**
   * 初始横坐标比例
   */
  x?: number;
  /**
   * 初始纵坐标比例
   */
  y?: number;
  /**
   * 拖拽方向
   * @default xy
   */
  mode?: 'x' | 'y' | 'xy';
  /**
   * 滑块颜色
   * @default #265CF0
   */
  color?: string;
}