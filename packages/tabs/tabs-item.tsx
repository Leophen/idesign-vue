import './index.scss';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'TabsItem',
  props: {
    /**
     * 单项值
     */
    value: [String, Number],
    /**
     * 选项卡风格类型
     */
    theme: String as PropType<'normal' | 'card'>,
    /**
     * 当前选中值
     */
    active: [String, Number],
    /**
     * 索引值
     */
    index: Number,
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
     * 点击选项卡时触发
     */
    'click': (value: string | number | undefined) => true,
    /**
     * 点击选项卡时触发
     */
    'change': (value: string | number) => true
  },
  setup(props, { slots, emit, attrs }) {
    const itemValue = (props.value ?? props.index) || 0

    const handleClickTab = () => {
      if (!props.disabled) {
        emit('click', itemValue)
        emit('change', itemValue)
      }
    }

    return () => {
      const children = slots.default?.();
      return (
        <div
          class={[
            'i-tabs-item',
            itemValue === props.active && 'i-tabs-item__active',
            props.theme === 'card' && 'i-tabs-item__card',
            props.disabled && 'i-tabs-item__disabled'
          ]}
          data-active={itemValue === props.active}
          data-disabled={props.disabled}
          onClick={handleClickTab}
          {...attrs}
        >
          {children}
        </div>
      );
    };
  },
});
