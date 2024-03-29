import { defineComponent, PropType } from 'vue';
import './index.scss';

export default defineComponent({
  name: 'Divider',
  props: {
    /**
     * 文本位置
     * @default center
     */
    align: {
      type: String as PropType<'left' | 'center' | 'right'>,
      default: 'center',
    },
    /**
     * 是否为虚线
     * @default false
     */
    dashed: {
      type: Boolean,
      default: false
    }
  },
  setup(props, { slots, attrs }) {
    return () => {
      const children = slots.default?.();

      return (
        <div
          class={[
            'i-divider',
            props.dashed && 'i-divider--dashed',
            children && 'i-divider--with-text',
            children && `i-divider--with-text-${props.align}`,
          ]}
          {...attrs}
        >
          {children && (
            <span class="i-divider--text">
              {children}
            </span>
          )}
        </div>
      );
    };
  },
});
