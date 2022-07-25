export interface TextareaProps {
  /**
   * 占位符
   * @default 请输入
   */
  placeholder?: string;
  /**
   * 文本框受控值
   */
  value?: string | number;
  /**
   * 文本框默认值
   */
  defaultValue?: string | number;
  /**
   * 是否禁用文本框
   * @default false
   */
  disabled?: boolean;
  /**
   * 文本框是否只读
   * @default false
   */
  readonly?: boolean;
  /**
   * 文本框状态
   */
  status?: 'success' | 'warning' | 'error';
  /**
   * 文本框底部提示
   */
  tips?: string;
  /**
   * 用户最多可以输入的字符个数
   */
  maxLength?: number;
  /**
   * 自动聚焦
   * @default false
   */
  autofocus?: boolean;
  /**
   * 是否禁用右下角高度调整模块
   * @default false
   */
  noResize?: boolean;
  /**
   * 自适应高度
   * @default false
   */
  autoSize?: boolean;
  /**
   * 最小高度
   */
  minRows?: number;
  /**
   * 最大高度
   */
  maxRows?: number;
  /**
   * 输入内容变化时触发
   */
  onChange?: (value: string | number, context?: { e?: React.FormEvent<HTMLDivElement> }) => void;
  /**
   * 输入框聚焦时触发
   */
  onFocus?: (value: string | number, context?: { e?: React.FocusEvent<HTMLInputElement> }) => void;
  /**
   * 输入框失焦时触发
   */
  onBlur?: (value: string | number, context?: { e?: React.FocusEvent<HTMLInputElement> }) => void;
}
