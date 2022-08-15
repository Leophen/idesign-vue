export interface EmptyProps {
  /**
   * 自定义展位图
   */
  image?: string;
  /**
   * 空状态尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 空状态显示类型
   * @default default
   */
  type?: 'default' | 'shoppingTrolley' | 'favorite' | 'gold';
}
