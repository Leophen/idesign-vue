import './index.scss';
import { defineComponent, provide } from 'vue';

export default defineComponent({
  name: 'Breadcrumb',
  props: {
    /**
     * 单项最大宽度，超出后会以省略号形式呈现
     */
    maxItemWidth: [String, Number]
  },
  setup(props, { slots, attrs }) {
    provide(
      'breadcrumbCtx',
      {
        maxItemWidth: props.maxItemWidth,
        separator: slots.separator?.()
      }
    );

    return () => {
      return (
        <div class='i-breadcrumb' {...attrs}>
          {slots.default?.()}
        </div>
      );
    };
  },
});
