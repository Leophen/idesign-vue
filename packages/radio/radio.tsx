import { computed, defineComponent, inject, PropType, ref } from 'vue';
import './index.scss';

export default defineComponent({
  name: 'Radio',
  props: {
    /**
     * 单选框类型
     * @default radio
     */
    type: {
      type: String as PropType<"radio" | "radio-button">
    },
    /**
     * 按钮单选框尺寸
     * @default medium
     */
    size: {
      type: String as PropType<"small" | "medium" | "large">
    },
    /**
     * 单选框的值
     */
    value: [String, Number],
    /**
     * 是否选中（受控）
     */
    checked: {
      type: Boolean,
      default: undefined
    },
    /**
     * 是否选中（非受控）
     * @default false
     */
    defaultChecked: {
      type: Boolean,
      default: false
    },
    /**
     * 是否禁用组件
     * @default false
     */
    disabled: {
      type: Boolean
    },
  },
  emits: {
    /**
     * 值变化时触发
     */
    'change': (checked: boolean, ev: Event) => true,
  },
  setup(props, { slots, emit, attrs }) {
    const _radioChecked = ref(props.defaultChecked)
    const innerChecked = computed(() => props.checked ?? _radioChecked.value)

    // 存在单选框组时从 Context 注入 checked 覆盖原 checked
    const radioGroupCtx: any = inject('radioGroupCtx', undefined)

    const mergedType = computed(() => props.type || radioGroupCtx?.type || 'radio')
    const mergedSize = computed(() => props.size || radioGroupCtx?.size || 'medium')
    const mergedDisabled = computed(() => props.disabled || radioGroupCtx?.disabled || false)

    const handleCheck = (e: Event) => {
      if (mergedDisabled.value) return;
      const newChecked = (e.target as HTMLInputElement).checked;
      _radioChecked.value = newChecked
      emit('change', newChecked, e)
    };

    return () => {
      const children = slots.default?.();

      return (
        <label
          class={[
            `i-${mergedType.value}`,
            innerChecked.value && `i-${mergedType.value}-is-checked`,
            mergedDisabled.value && `i-${mergedType.value}-is-disabled`,
            mergedSize.value && `i-${mergedType.value}--size-${mergedSize.value}`,
          ]}
          {...attrs}
        >
          <input
            readonly
            type="radio"
            class={`i-${mergedType.value}__former`}
            checked={innerChecked.value}
            disabled={mergedDisabled.value}
            value={props.value}
            onClick={(e) => e.stopPropagation()}
            onChange={handleCheck}
          />
          <span class={`i-${mergedType.value}__input`} />
          <span class={`i-${mergedType.value}__label`}>{children}</span>
        </label>
      );
    };
  },
});

