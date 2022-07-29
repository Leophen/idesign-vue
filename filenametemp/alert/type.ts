export interface AlertProps {
  /**
   * 是否显示关闭按钮
   * @default false
   */
  closable?: boolean;
  /**
   * 提示内容
   */
  message?: string | HTMLElement;
  /**
   * 跟在提示内容后的操作区
   */
  operation?: string | HTMLElement;
  /**
   * 标题
   */
  title?: string | HTMLElement;
  /**
   * 提示类型
   * @default info
   */
  type?: 'info' | 'success' | 'warning' | 'error';
}
