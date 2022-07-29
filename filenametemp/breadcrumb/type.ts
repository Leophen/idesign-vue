export interface BreadcrumbProps {
  /**
   * 单项最大宽度，超出后会以省略号形式呈现
   */
  maxItemWidth?: string | number;
  /**
   * 自定义分隔符
   */
  separator?: string | HTMLElement;
}

export interface BreadcrumbItemProps {
  /**
   * 是否禁用当前项点击
   */
  disabled?: boolean;
  /**
   * 单项最大宽度，超出后会以省略号形式呈现
   */
  maxItemWidth?: string | number;
  /**
   * 最大宽度，超出后会以省略号形式呈现。优先级高于 maxItemWidth
   */
  maxWidth?: string | number;
  /**
   * 自定义分隔符
   */
  separator?: string | HTMLElement;
}
