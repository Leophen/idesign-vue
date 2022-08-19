import './index.scss';
import _ from 'lodash'
import { MenuItem, MenuGroup } from './index';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Icon';
import { defineComponent, h, inject, onMounted, PropType, ref, VNode } from 'vue';
import { Collapse, CollapseItem } from '../collapse';

export default defineComponent({
  name: 'MenuGroup',
  props: {
    /**
     * 折叠项标题
     */
    title: String,
    /**
     * Parent 透传索引值
     */
    index: Number,
    /**
     * Parent 透传方向值
     */
    direction: String as PropType<"horizontal" | "vertical">,
  },
  emits: {
    /**
     * Parent 透传值变化触发
     */
    'change': (value?: string | number) => true
  },
  setup(props, { slots, emit }) {
    // 水平 group
    const horizonGroupValues = ref<any[]>([])
    const horizonGroupOptions = ref<any[]>([])

    const valuesArr: any[] = []
    // 将 Menu.Item 递归转为 Dropdown 可用的数组，同时更新组 value 集
    const mergeIndex = (itemIdx: number, injectIdx: string | number) => {
      return `${injectIdx}.${itemIdx}`
    }
    const getOptions = (childList: any, injectIdx: string) => {
      const result: any[] = []
      childList.map((item: any, itemIdx: number) => {
        if (item.type.name === 'MenuItem') {
          const itemInner = item.children?.default()[0]
          const itemValue = item.props?.value ?? mergeIndex(itemIdx, injectIdx)
          valuesArr.push(itemValue)
          result.push({
            content: itemInner.children,
            value: itemValue
          })
        } else {
          // 嵌套
          const itemChildList = item.children?.default()
          const itemValue = item.props?.value ?? mergeIndex(itemIdx, injectIdx)
          valuesArr.push(itemValue)
          result.push({
            content: item.props?.title,
            value: itemValue,
            children: getOptions(itemChildList, mergeIndex(itemIdx, injectIdx))
          })
        }
      })
      return result
    }

    const children = slots.default?.();

    onMounted(() => {
      if (props.direction === 'horizontal') {
        horizonGroupOptions.value = [...getOptions(children, String(props.index))]
        horizonGroupValues.value = [...valuesArr]
      }
    })

    const handleSelectItem = (val: string | number | Array<string | number>) => {
      emit('change', val as string | number)
    }

    const hover = ref(false)
    const handleTrigger = (trigger: boolean) => {
      hover.value = trigger
    }

    const getRenderList = (childList: any, groupIdx: string | number) => {
      const result: VNode[] = []
      childList.map((item: any, itemIdx: number) => {
        const itemProps = {
          index: mergeIndex(itemIdx, groupIdx),
          onChange: (val: string | number) => emit('change', val),
          ...item.props
        }
        if (item.type.name === 'MenuItem') {
          const itemChild = item.children?.default()
          const itemNode = h(
            MenuItem,
            itemProps,
            () => itemChild
          )
          result.push(itemNode)
        } else {
          const itemChildList = getRenderList(item.children?.default(), mergeIndex(itemIdx, groupIdx))
          const itemNode = h(
            MenuGroup,
            itemProps,
            itemChildList
          )
          result.push(itemNode)
        }
      })
      return result
    }

    const renderVertical = () => getRenderList(children, (props.index as number))

    const menuCtx: any = inject('menuCtx')
    const ifGroupActive = (childList: VNode[]) => {
      let result = false
      _.isArray(childList) && childList.map((item: any) => {
        if (item.type.name === 'MenuItem') {
          if (item.props.value) {
            (item.props.value === menuCtx.active.value) && (result = true)
          } else {
            (item.props.index === menuCtx.active.value) && (result = true)
          }
        } else {
          ifGroupActive(item.children) && (result = true)
        }
      })
      return result
    }

    return () => {
      return (
        <>
          {props.direction === 'horizontal' ? (
            <Dropdown
              class='i-menu-item__group-dropdown'
              trigger="click"
              value={menuCtx.active.value}
              options={horizonGroupOptions.value}
              onClick={handleSelectItem}
              onTrigger={handleTrigger}
            >
              <div
                class={[
                  'i-menu-item__group-wrapper',
                  horizonGroupValues.value.includes(menuCtx.active.value) && 'i-menu-item__group-active',
                  hover && 'i-menu-item__group-hover',
                ]}
              >
                <span class="i-menu-item__txt">{props.title}</span>
                <Icon name="ArrowUpBold" size={12} />
              </div>
            </Dropdown>
          ) : (
            <Collapse
              class={[
                'i-menu-item__group',
                ifGroupActive(renderVertical()) && 'i-menu-item__group-active'
              ]}
              hideBorder
              expandAll={ifGroupActive(renderVertical())}
              iconPlacement='right'
            >
              <CollapseItem title={props.title}>
                {renderVertical()}
              </CollapseItem>
            </Collapse>
          )}
        </>
      );
    };
  },
});
