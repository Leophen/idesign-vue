import type { CSSProperties, VNode } from 'vue';

export interface ScrollbarProps {
  /**
   * 内容
   */
  children?: VNode | VNode[];
  /**
   * 滚动容器高度
   */
  height?: CSSProperties['height'];
  /**
   * 滚动容器宽度
   */
  width?: CSSProperties['width'];
  /**
   * 水平滚动触发事件
   */
  onScrollX?: (x: number) => void;
  /**
   * 垂直滚动触发事件
   */
  onScrollY?: (y: number) => void;
}
