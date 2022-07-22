import { defineComponent, PropType } from 'vue';
import './index.scss';

export default defineComponent({
  name: 'Template',
  props: {
    /**
     * 是否为虚线
     * @default false
     */
    dashed: {
      type: Boolean,
      default: false
    },
    /**
     * 文本位置
     * @default center
     */
    align: {
      type: String as PropType<'left' | 'center' | 'right'>,
      default: 'center',
    },
  },
  setup(props, { slots }) {
    return () => {
      const children = slots.default?.();

      return (
        <div
          class={[
            'i-template',
            props.dashed && 'i-template--dashed',
          ]}
        >
          {children && (
            <span class="i-template--text">
              {children}
            </span>
          )}
        </div>
      );
    };
  },
});
