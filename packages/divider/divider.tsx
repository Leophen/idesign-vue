import type { PropType } from 'vue';
import { defineComponent } from 'vue';
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
  setup(props, { slots }) {
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
