import _ from 'lodash'
import { Component, getCurrentInstance, Slots, VNode, VNodeTypes } from 'vue'

// 通用位置类型
export type placementType =
  | 'auto'
  | 'auto-start'
  | 'auto-end'
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'right'
  | 'right-start'
  | 'right-end'
  | 'left'
  | 'left-start'
  | 'left-end'

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

// 触发节点是否在指定包裹层中
export const hasParent = (node: any, parent: HTMLElement | null) => {
  while (node) {
    if (node === parent) {
      return true
    }
    node = node.parentNode
  }
  return false
}

/**
 * 渲染 default slot，获取子组件 VNode。处理多种子组件创建场景
 * @returns {function(childComponentName: string, slots: Slots): VNode[]}
 * @param childComponentName
 * @param slots
 * @example const getChildByName = useChildComponentSlots()
 * @example getChildComponentByName('xxItem')
 */
export const useChildComponentSlots = () => {
  const instance = getCurrentInstance()
  return (childComponentName: string, slots?: Slots): VNode[] => {
    if (!slots) {
      slots = instance?.slots
    }
    const content = slots?.default?.() || []

    return (
      content
        .map((item: VNode) => {
          if (item.children && Array.isArray(item.children))
            return item.children
          return item
        })
        .flat()
        // @ts-ignore
        .filter((item: VNode) =>
          (item.type as Component).name?.endsWith(childComponentName)
        ) as VNode[]
    )
  }
}

// 模拟 React.children
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

export const isElement = (vn: VNode) => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.ELEMENT)
}

export const isComponent = (
  vn: VNode,
  type?: VNodeTypes
): type is Component => {
  return Boolean(vn && vn.shapeFlag & ShapeFlags.COMPONENT)
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