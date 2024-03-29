import './index.scss';
import { computed, defineComponent, mergeProps, PropType, provide, ref } from 'vue';
import { getAllElements, turnValue } from '../common';

export default defineComponent({
  name: 'Menu',
  props: {
    /**
     * 导航宽度
     */
    width: [String, Number],
    /**
     * 固定选中值（受控）
     */
    modelValue: {
      type: [String, Number],
    },
    /**
     * 默认选中值（非受控）
     * @default 0
     */
    defaultActive: {
      type: [String, Number]
    },
    /**
     * 导航方向
     * @default horizontal
     */
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal'
    },
  },
  emits: {
    /**
     * 点击菜单项时触发 v-model
     */
    'update:modelValue': (value?: string | number) => true,
    /**
     * 点击菜单项时触发
     */
    'change': (value?: string | number) => true,
  },
  setup(props, { slots, emit, attrs }) {
    // 初始默认值（导航第一项）
    const children = getAllElements(slots.default?.() ?? []);
    const defaultVal = props.defaultActive || children[0].props?.value || '0'

    const _menuActive = ref<string | number>(defaultVal)
    const innerActive = computed(() => props.modelValue ?? _menuActive.value)

    const handleChange = (val: string | number) => {
      _menuActive.value = val
      emit('change', val)
      emit('update:modelValue', val)
    }

    provide('menuCtx', {
      active: innerActive
    });

    return () => {
      const prefixContent = slots.prefixContent?.();
      const suffixContent = slots.suffixContent?.();

      const childItems = children.map((child, index) => {
        child.props = mergeProps(
          {
            index,
            direction: props.direction,
            active: innerActive.value,
            onChange: handleChange,
          },
          child.props ?? {}
        );
        return child;
      })

      return (
        <div
          class={[
            'i-menu',
            props.direction === 'vertical' && 'i-menu__vertical'
          ]}
          style={{ width: turnValue(props.width) }}
          {...attrs}
        >
          {prefixContent && (
            <header class="i-menu__logo">
              {prefixContent}
            </header>
          )}
          <ul class="i-menu-item__wrapper">
            {childItems}
          </ul>
          {suffixContent && (
            <footer class="i-menu__operations">
              {suffixContent}
            </footer>
          )}
        </div>
      );
    };
  },
});

