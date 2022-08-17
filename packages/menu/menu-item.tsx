import './index.scss';
import { defineComponent, inject } from 'vue';

export default defineComponent({
  name: 'MenuItem',
  props: {
    /**
     * 单项唯一标识
     */
    value: [String, Number],
    /**
     * 透传索引值
     */
    index: Number,
  },
  emits: {
    /**
     * 点击单项时触发
     */
    'click': (value?: string | number) => true,
    /**
     * 透传点击单项时触发
     */
    'change': (value?: string | number) => true
  },
  setup(props, { slots, emit, attrs }) {
    const itemValue = props.value || String(props.index)
    const handleClickItem = () => {
      emit('click', itemValue)
      emit('change', itemValue)
    }

    const menuCtx: any = inject('menuCtx')

    return () => {
      const children = slots.default?.();
      return (
        <li
          class={[
            'i-menu-item',
            itemValue === menuCtx.active.value && 'i-menu-item__active',
          ]}
          onClick={handleClickItem}
          {...attrs}
        >
          <span class="i-menu-item__txt">{children}</span>
        </li>
      );
    };
  },
});
