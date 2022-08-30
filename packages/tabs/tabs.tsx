import { computed, defineComponent, nextTick, onMounted, PropType, ref, VNode, watch } from 'vue';
import './index.scss';
import TabsItem from './tabs-item';
import { turnValue, useChildComponentSlots } from '../common'

export default defineComponent({
  name: 'Tabs',
  props: {
    /**
     * 选项卡风格类型
     * @default normal
     */
    theme: {
      type: String as PropType<'normal' | 'card'>,
      default: 'normal'
    },
    /**
     * 固定选中值（受控）
     */
    modelValue: [String, Number],
    /**
     * 默认选中值（非受控）
     */
    defaultActive: [String, Number],
    /**
     * 全局禁用
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false
    },
  },
  emits: {
    /**
     * 点击选项卡时触发 v-model
     */
    'update:modelValue': (value?: string | number) => true,
    /**
     * 点击选项卡时触发
     */
    'change': (value?: string | number) => true,
  },
  setup(props, { slots, emit, attrs }) {
    const children = slots.default?.() || []
    const defaultVal = props.defaultActive || children[0].props?.value || 0

    const _tabsValue = ref(defaultVal)
    const innerValue = computed(() => props.modelValue ?? _tabsValue.value)

    const tabsRef = ref<HTMLDivElement>()
    const tabsRefLeft = ref(0)
    onMounted(() => {
      nextTick(() => {
        const curTabsRefLeft = tabsRef.value?.getBoundingClientRect().left || 0
        tabsRefLeft.value = (curTabsRefLeft)
        updateBarPosition(curTabsRefLeft)
      })
    })

    const bar = ref({
      width: 0,
      left: 0
    })

    const updateBarPosition = (parentLeft: number) => {
      nextTick(() => {
        tabsRef.value?.childNodes.forEach(item => {
          if (
            (item as HTMLElement).dataset?.active === 'true' &&
            (item as HTMLElement).dataset?.disabled !== 'true'
          ) {
            const tabRect = (item as HTMLElement).getBoundingClientRect()
            bar.value.left = tabRect.left - parentLeft
            bar.value.width = tabRect.width
          }
        })
      })
    }

    watch(() => innerValue.value, () => {
      tabsRefLeft.value !== 0 && updateBarPosition(tabsRefLeft.value)
    })

    const tabsItems = () => {
      const getChildComponentByName = useChildComponentSlots();
      const childrenList: VNode[] = getChildComponentByName('TabsItem')
      const tabsItemList = childrenList.map((item, index) => {
        return (
          <TabsItem
            theme={props.theme}
            active={innerValue.value}
            index={index}
            disabled={item.props?.disabled ?? props.disabled}
            onChange={(value: string | number) => {
              _tabsValue.value = value
              emit('change', value)
              emit('update:modelValue', value)
            }}
            {...item.props}
          >
            {/* @ts-ignore */}
            {item.children?.default()}
          </TabsItem>
        );
      });
      return tabsItemList
    }

    return () => {
      return (
        <div
          class='i-tabs'
          ref={tabsRef}
          {...attrs}
        >
          {tabsItems()}
          {props.theme === 'normal' && (
            <div
              class="i-tabs__bar"
              style={{
                width: turnValue(bar.value.width),
                left: turnValue(bar.value.left)
              }}
            />
          )}
        </div>
      );
    };
  },
});

