import _ from 'lodash'
import {
  Component,
  getCurrentInstance,
  Slots,
  VNode,
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

// const _stateValue = ref(defaultValue)
// const innerValue = computed(() => value ?? _stateValue.value)

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
