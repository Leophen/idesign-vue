import './index.scss';
import { useChildComponentSlots } from '../common'
import CollapseItem from './collapse-item';
import { computed, defineComponent, PropType, provide, ref, VNode } from 'vue';

export default defineComponent({
  name: 'Collapse',
  props: {
    /**
     * 固定展开项（受控）
     */
    active: Array as PropType<Array<string | number>>,
    /**
     * 默认展开项（非受控）
     */
    defaultActive: {
      type: Array as PropType<Array<string | number>>
    },
    /**
     * 是否为手风琴模式
     * @default false
     */
    accordion: {
      type: Boolean,
      default: false
    },
    /**
     * 全局禁用折叠项
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 默认全部展开
     * @default false
     */
    expandAll: {
      type: Boolean,
      default: false
    },
    /**
     * 自定义图标位置
     * @default left
     */
    iconPlacement: {
      type: String as PropType<'left' | 'right'>,
      default: 'left'
    },
    /**
     * 是否隐藏边框
     * @default false
     */
    hideBorder: {
      type: Boolean,
      default: false
    },
    /**
     * 无缩进模式
     * @default false
     */
    noIndent: {
      type: Boolean,
      default: false
    },
  },
  emits: {
    /**
     * 切换面板时触发，返回变化的值
     */
    'change': (value?: Array<string | number>) => true,
  },
  setup(props, { attrs, emit }) {
    const getChildComponentByName = useChildComponentSlots();
    const childrenList: VNode[] = getChildComponentByName('CollapseItem')

    const initVal = () => {
      let result = props.defaultActive || []
      !props.defaultActive && props.expandAll && childrenList.map((item, index) => {
        result.push(item.props?.value || index)
      })
      return result
    }

    const _collapseActive = ref(initVal())
    const innerActive = computed(() => props.active ?? _collapseActive.value)

    // 更新展开项
    const updateInnerActive = (value: string | number) => {
      let newValue: Array<string | number> = [...innerActive.value];
      const index = newValue.indexOf(value);
      if (index >= 0) {
        newValue.splice(index, 1);
      } else if (props.accordion) {
        newValue = [value];
      } else {
        newValue.push(value);
      }
      _collapseActive.value = [...newValue]
      emit('change', [...newValue])
    };

    const collapseItems = () => {
      return childrenList.map((item: VNode, index: number) => {
        const itemVal = item.props?.value || index
        return (
          <CollapseItem
            index={index}
            isActive={innerActive.value.includes(itemVal)}
            onClickHeader={() => updateInnerActive(itemVal)}
            {...item.props}
          >
            {/* @ts-ignore */}
            {item.children?.default()}
          </CollapseItem>
        );
      })
    }

    // 注入每一项的 context
    provide('collapseCtx', {
      disabled: props.disabled,
      iconPlacement: props.iconPlacement,
    })

    return () => {
      return (
        <div
          class={[
            'i-collapse',
            props.hideBorder && 'i-collapse__hide-border',
            props.noIndent && 'i-collapse__no-indent'
          ]}
          {...attrs}
        >
          {collapseItems()}
        </div>
      );
    };
  },
});
