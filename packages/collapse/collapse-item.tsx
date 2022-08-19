import './index.scss';
import { Icon } from '../icon'
import { computed, defineComponent, inject, onMounted, onUnmounted, PropType, ref } from 'vue';
import { isBrowser, turnValue } from '../common';

export default defineComponent({
  name: 'CollapseItem',
  props: {
    /**
     * 折叠项标题
     */
    title: String,
    /**
     * 折叠项唯一标识
     * @default 索引值
     */
    value: [String, Number],
    /**
     * 禁用单折叠项
     * @default false
     */
    disabled: {
      type: Boolean
    },
    /**
     * 自定义图标位置
     * @default left
     */
    iconPlacement: {
      type: String as PropType<'left' | 'right'>
    },
    /**
     * 组生成的索引值
     * @default 0
     */
    index: {
      type: Number,
      default: 0
    },
    /**
     * 组传入的 active 值
     * @default false
     */
    isActive: {
      type: Boolean,
      default: false
    },
  },
  emits: {
    /**
     * 点击顶部触发
     */
    'clickHeader': (e: MouseEvent) => true,
  },
  setup(props, { slots, emit, attrs }) {
    const collapseCtx: {
      /**
       * 全局禁用折叠项
       * @default false
       */
      disabled?: boolean
      /**
       * 自定义图标位置
       * @default left
       */
      iconPlacement?: 'left' | 'right'
    } = inject('collapseCtx', {})

    const mergedDisabled = computed(() => props.disabled || collapseCtx?.disabled || false)
    const mergedIconPlacement = computed(() => props.iconPlacement || collapseCtx?.iconPlacement || 'left')

    const handleClickHeader = (e: MouseEvent) => {
      if (!mergedDisabled.value) {
        emit('clickHeader', e)
      }
    }

    const contentInnerRef = ref<HTMLElement>()
    const contentHeight = ref(0)

    let resizeObserver: ResizeObserver
    if (isBrowser()) {
      resizeObserver = new ResizeObserver(entries => {
        contentHeight.value = entries[0].contentRect.height + 16
      });
    }
    onMounted(() => {
      const height = contentInnerRef.value?.getBoundingClientRect().height || 0
      contentHeight.value = height + 16 // 加上下 padding
      resizeObserver.observe((contentInnerRef.value as HTMLElement))
    })
    onUnmounted(() => {
      resizeObserver.disconnect()
    })

    return () => {
      const children = slots.default?.();

      return (
        <div
          class={['i-collapse-item',
            mergedDisabled.value && 'i-collapse-item__disabled',
            mergedIconPlacement.value === 'right' && 'i-collapse-item__icon-right'
          ]}
          {...attrs}
        >
          <header
            class={[
              'i-collapse-item__header',
              !props.isActive && 'i-collapse-item__header-fold'
            ]}
            onClick={handleClickHeader}
            data-active={props.isActive ? 1 : 0}
          >
            <Icon
              name="ArrowCaretRight"
              style={{
                transform: props.isActive ? 'rotate(90deg)' : 'rotate(0deg)'
              }}
            />
            <span class="i-collapse-item__header-txt">
              {props.title}
            </span>
          </header>

          <section
            class={[
              'i-collapse-item__content',
              props.isActive && 'i-collapse-item__content-unfold'
            ]}
            style={{ height: props.isActive ? turnValue(contentHeight.value) : 0 }}
            data-active={props.isActive ? 1 : 0}
          >
            <div
              class="i-collapse-item__content-inner"
              ref={contentInnerRef}
            >
              {children}
            </div>
          </section>
        </div>
      );
    };
  },
});

