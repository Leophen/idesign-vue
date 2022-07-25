export interface MenuProps {
  /**
   * 导航宽度
   */
  width?: React.CSSProperties["width"];
  /**
   * 当前选中值
   */
  active?: string | number;
  /**
   * 默认选中值
   * @default 0
   */
  defaultActive?: string | number;
  /**
   * 前置内容
   */
  prefixContent?: string | HTMLElement;
  /**
   * 前置内容
   */
  suffixContent?: string | HTMLElement;
  /**
   * 导航方向
   * @default horizontal
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 点击菜单项时触发
   */
  onChange?: (value: string | number) => void;
}

export interface MenuItemProps {
  /**
   * 单项唯一标识
   * @default 索引值
   */
  value?: string | number;
  /**
   * 点击单项时触发
   */
  onClick?: (value: string | number) => void;
}

export interface MenuGroupProps {
  /**
   * 组标题
   */
  title?: string | HTMLElement
}
