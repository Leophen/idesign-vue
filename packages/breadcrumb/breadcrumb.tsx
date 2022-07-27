import './index.scss';
import { defineComponent, provide } from 'vue';

export default defineComponent({
  name: 'Breadcrumb',
  props: {
    /**
     * 单项最大宽度，超出后会以省略号形式呈现
     */
    maxItemWidth: [String, Number],
    /**
     * 自定义分隔符
     */
    separator: [String, HTMLElement]
  },
  setup(props, { slots }) {
    provide(
      'breadcrumbCtx',
      {
        maxItemWidth: props.maxItemWidth,
        slots,
      }
    );

    return () => {
      return (
        <div class='i-breadcrumb'>
          {slots.default?.()}
        </div>
      );
    };
  },
});
