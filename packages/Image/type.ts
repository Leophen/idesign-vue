export interface ImageProps {
  /**
   * 图片地址
   */
  src?: string;
  /**
   * 图片宽度
   * @default 200
   */
  width?: React.CSSProperties["width"];
}

export interface PreviewDialogProps {
  visible?: boolean;
  closeOnEsc?: boolean;
  onClose?: () => void;
  image?: string;
  x?: number;
  y?: number;
}
