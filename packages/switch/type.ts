export interface SwitchProps {
  /**
   * 开关尺寸
   * @default medium
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * 开关关闭时的颜色
   */
  inactiveColor?: string;
  /**
   * 开关打开时的颜色
   */
  activeColor?: string;
  /**
   * 开关关闭时的标签
   */
  inactiveLabel?: string | HTMLElement;
  /**
   * 开关打开时的标签
   */
  activeLabel?: string | HTMLElement;
  /**
   * 是否禁用组件
   * @default false
   */
  disabled?: boolean;
  /**
   * 是否为加载状态
   * @default false
   */
  loading?: boolean;
  /**
   * 开关固定值（受控）
   */
  modelValue?: boolean;
  /**
   * 开关默认值（非受控）
   * @default false
   */
  defaultValue?: boolean;
  /**
   * 切换开关时触发
   */
  onChange?: (value: boolean) => void;
}
