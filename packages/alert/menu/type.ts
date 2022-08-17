import { CSSProperties } from "vue";

export interface MenuProps {
  /**
   * 类名
   */
  className?: string;
  /**
   * 内容
   */
  children?: string | HTMLElement;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  /**
   * 导航宽度
   */
  width?: string | number;
  /**
   * 固定选中值（受控）
   */
  active?: string | number;
  /**
   * 默认选中值（非受控）
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

interface MenuInject {
  /**
   * 索引值
   */
  index: number;
  /**
   * 透传选中值
   */
  active: string | number;
  /**
   * 透传导航方向
   * @default horizontal
   */
  direction: 'horizontal' | 'vertical';
  /**
   * 透传点击菜单项时触发
   */
  onChange: (value: string | number) => void;
}

export interface MenuItemProps extends MenuInject {
  /**
   * 类名
   */
  className?: string;
  /**
   * 内容
   */
  children?: string | HTMLElement;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
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

export interface MenuGroupProps extends MenuInject {
  /**
   * 类名
   */
  className?: string;
  /**
   * 内容
   */
  children?: string | HTMLElement;
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  /**
   * 组标题
   */
  title?: string | HTMLElement;
}
