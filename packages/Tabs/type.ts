export interface TabsProps {
  /**
   * 选项卡风格类型
   * @default normal
   */
  theme?: 'normal' | 'card';
  /**
   * 固定选中值（受控）
   */
  active?: string | number;
  /**
   * 默认选中值（非受控）
   */
  defaultActive?: string | number;
  /**
   * 全局禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 点击选项卡时触发
   */
  onChange?: (value: string | number) => void;
}

export interface TabsItemProps {
  /**
   * 单项值
   */
  value: string | number;
  /**
   * 点击选项卡时触发
   */
  onClick?: (value?: string | number) => void;
}

export interface TabsItemAddProps extends TabsItemProps {
  /**
   * 选项卡风格类型
   * @default normal
   */
  theme?: 'normal' | 'card';
  /**
   * 当前选中值
   */
  active?: string | number;
  /**
   * 索引值
   */
  index?: number;
  /**
   * 全局禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 点击选项卡时触发
   */
  onChange?: (value: string | number) => void;
}

export interface TabsContextValue {
  inject: (props: TabsItemProps) => TabsItemAddProps;
}
