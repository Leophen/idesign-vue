export const DATE_FORMAT = 'YYYY-MM-DD';
export const WEEK_HEAD_0 = ['日', '一', '二', '三', '四', '五', '六']
export const WEEK_HEAD_1 = ['一', '二', '三', '四', '五', '六', '日']

export interface DatePickerProps {
  /**
   * 固定选中值（受控）
   */
  modelValue?: string;
  /**
   * 默认选中值（非受控）
   */
  defaultValue?: string;
  /**
   * 触发方式
   * @default click
   */
  trigger?: 'hover' | 'click' | 'context-menu';
  /**
   * 是否禁用选择器
   * @default false
   */
  disabled?: boolean;
  /**
   * 日期选择器类型
   * @default date
   */
  type?: 'date' | 'range';
  /**
   * 占位符
   * @default date
   */
  placeholder?: 'date' | 'range';
  /**
   * 范围日期分隔符
   * @default -
   */
  rangeSeparator?: string;
  /**
   * 每周的第一天，0 为周日，1 为周一
   * @default 1
   */
  firstDayOfWeek?: 0 | 1;
  /**
   * 选中值发生变化时触发
   */
  onChange?: (value: string) => void;
}

export interface DateHeaderBtnProps {
  icon?: string;
  disabled?: boolean;
  onClick?: Function;
}

export interface DatePanelProps {
  value?: string;
  defaultDisplayVal?: string;
  rangeValue?: string[];
  firstDayOfWeek?: number;
  onChange?: Function;
  onHover?: Function;
  onClose?: Function
}

export interface DatePanelRangeProps extends DatePanelProps { }

export interface MonthSelectPanelProps {
  month: number;
  onChange: Function;
}

export interface YearSelectPanelProps {
  year: number;
  onChange: Function;
}
