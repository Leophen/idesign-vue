import { computed, defineComponent, inject } from 'vue';
import { turnValue } from '../common';
import { Icon } from '../icon';
import './index.scss';

export default defineComponent({
  name: 'BreadcrumbItem',
  props: {
    /**
   * 是否禁用当前项点击
   */
    disabled: [Boolean],
    /**
     * 单项最大宽度，超出后会以省略号形式呈现
     */
    maxItemWidth: [String, Number],
    /**
     * 最大宽度，超出后会以省略号形式呈现。优先级高于 maxItemWidth
     */
    maxWidth: [String, Number],
  },
  setup(props, { slots }) {
    const breadcrumbCtx: any = inject('breadcrumbCtx', undefined);

    // 限制最大宽度
    const currentMaxWidth = computed(() => {
      let curMaxWidth;
      if (props.maxWidth) {
        curMaxWidth = turnValue(props.maxWidth)
      }
      let curMaxItemWidth;
      if (breadcrumbCtx?.maxItemWidth) {
        curMaxItemWidth = turnValue(breadcrumbCtx?.maxItemWidth)
      } else if (props.maxItemWidth) {
        curMaxItemWidth = turnValue(props.maxItemWidth)
      }
      return {
        maxWidth: curMaxWidth || curMaxItemWidth || '200px',
      };
    });

    const currentSeparator = computed(() => {
      return breadcrumbCtx?.slots.separator?.() ?? <Icon name="ArrowRight" size={16} />
    });

    return () => {
      const children = slots.default?.();

      return (
        <div
          class={[
            'i-breadcrumb__item',
            props.disabled && 'i-breadcrumb-is-disabled'
          ]}
        >
          <span class="i-breadcrumb__inner" style={currentMaxWidth.value}>
            {children}
          </span>
          <span class="i-breadcrumb__separator">
            {currentSeparator.value}
          </span>
        </div>
      );
    };
  },
});
