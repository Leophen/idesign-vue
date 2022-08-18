export interface UploadProps {
  /**
   * 自定义上传内容
   */
  children?: string | HTMLElement;
  /**
   * 占位符
   */
  placeholder?: string;
  /**
   * 上传组件风格
   * @default button
   */
  theme?: 'button' | 'block' | 'drag';
  /**
   * 文件大小限制，单位 M
   * @default 10
   */
  maxSize?: number;
  /**
   * 上传时触发
   */
  onChange?: (file: File) => void;
}
