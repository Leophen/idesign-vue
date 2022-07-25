export interface LoadingProps {
  /**
   * 加载图标
   * @default Loading
   */
  icon?: string;
  /**
   * 加载图标大小
   * @default 36
   */
  size?: number;
  /**
   * 加载图标颜色
   */
  color?: string;
  /**
   * 旋转提示内容
   */
  info?: string | HTMLElement;
  /**
   * 旋转内容
   */
  spinner?: string | HTMLElement;
}
