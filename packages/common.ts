import _ from 'lodash'
import {
  Component,
  ComponentPublicInstance,
  Slots,
  VNode,
  VNodeTypes
} from 'vue'

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
export type triggerType = 'hover' | 'click' | 'context-menu'

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

// Quoted from vue-next
// https://github.com/vuejs/vue-next/blob/master/packages/shared/src/shapeFlags.ts
export enum ShapeFlags {
  ELEMENT = 1,
  FUNCTIONAL_COMPONENT = 1 << 1,
  STATEFUL_COMPONENT = 1 << 2,
  COMPONENT = ShapeFlags.STATEFUL_COMPONENT | ShapeFlags.FUNCTIONAL_COMPONENT,
  TEXT_CHILDREN = 1 << 3,
  ARRAY_CHILDREN = 1 << 4,
  SLOTS_CHILDREN = 1 << 5,
  TELEPORT = 1 << 6,
  SUSPENSE = 1 << 7,
  COMPONENT_SHOULD_KEEP_ALIVE = 1 << 8,
  COMPONENT_KEPT_ALIVE = 1 << 9
}

export const isComponentInstance = (
  value: any
): value is ComponentPublicInstance => {
  return value?.$ !== undefined
}

export const isElement = (vn: VNode) => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.ELEMENT)
}

export const isComponent = (
  vn: VNode,
  type?: VNodeTypes
): type is Component => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.COMPONENT)
}

export const isText = (
  vn: VNode,
  children: VNode['children']
): children is string => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.TEXT_CHILDREN)
}

export const isNamedComponent = (child: VNode, name: string) => {
  return isComponent(child, child.type) && child.type.name === name
}

export const isTextChildren = (
  child: VNode,
  children: VNode['children']
): children is string => {
  return Boolean(child && child.shapeFlag & 8)
}

export const isArrayChildren = (
  vn: VNode,
  children: VNode['children']
): children is VNode[] => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.ARRAY_CHILDREN)
}

export const isSlotsChildren = (
  vn: VNode,
  children: VNode['children']
): children is Slots => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.SLOTS_CHILDREN)
}

// 模拟 React.Children.map 获取所有子元素
export const getAllElements = (
  children: VNode[] | undefined,
  includeText = false
) => {
  const results: VNode[] = []
  for (const item of children ?? []) {
    if (
      isElement(item) ||
      isComponent(item) ||
      (includeText && isTextChildren(item, item.children))
    ) {
      results.push(item)
    } else if (isArrayChildren(item, item.children)) {
      results.push(...getAllElements(item.children, includeText))
    } else if (isSlotsChildren(item, item.children)) {
      results.push(...getAllElements(item.children.default?.(), includeText))
    } else if (_.isArray(item)) {
      results.push(...getAllElements(item, includeText))
    }
  }
  return results
}
