export interface StepsItemProps {
  /**
   * 步骤标题
   * @default ''
   */
  title?: string | HTMLElement;
  /**
   * 步骤描述
   * @default ''
   */
  description?: string | HTMLElement;
  /**
   * index 值
   * @default 0
   */
  index?: number;
  /**
   * 进行到哪一步
   * @default 0
   */
  current?: number;
}

export interface StepsProps extends StepsItemProps {
  /**
   * 进行到哪一步
   * @default 0
   */
  current?: number;
  /**
   * 步骤条方向
   * @default horizontal
   */
  layout?: 'horizontal' | 'vertical';
  /**
   * 步骤条是否倒序
   * @default false
   */
  reverse?: boolean;
  /**
   * 是否为无序的步骤条
   * @default false
   */
  dot?: boolean;
}

export interface StepsContextValue {
  inject: (props: StepsProps) => StepsProps;
}
