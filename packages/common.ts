import _ from 'lodash'

// 转换 width/height/left/... 样式值
export const turnValue = (val: string | number | undefined) => {
  if (!val) {
    return
  }
  if (_.isNumber(val as number)) {
    return `${val}px`
  }
  return val
}

// 通用位置类型
export type placementType =
  | 'top'
  | 'top-left'
  | 'top-right'
  | 'bottom'
  | 'bottom-left'
  | 'bottom-right'
  | 'left'
  | 'left-top'
  | 'left-bottom'
  | 'right'
  | 'right-top'
  | 'right-bottom'

// 通用触发类型
export type trigger = 'hover' | 'click' | 'context-menu'
