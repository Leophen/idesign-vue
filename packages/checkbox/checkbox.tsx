import './index.scss';
import { computed, defineComponent, inject, PropType, ref } from 'vue';

export default defineComponent({
  name: 'Checkbox',
  props: {
    /**
     * 多选框尺寸
     * @default medium
     */
    size: {
      type: String as PropType<"small" | "medium" | "large">
    },
    /**
     * 多选框唯一标识
     */
    value: [String, Number],
    /**
     * 多选框的值（受控）
     */
    checked: {
      type: Boolean,
      default: undefined
    },
    /**
     * 多选框的值（非受控）
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
    const _checkboxChecked = ref(props.defaultChecked)
    const innerChecked = computed(() => props.checked ?? _checkboxChecked.value)

    // 存在多选框组时从 Context 注入 checked 覆盖原 checked
    const checkboxGroupCtx: any = inject('checkboxGroupCtx', undefined)

    const mergedSize = computed(() => props.size || checkboxGroupCtx?.size || 'medium')
    const mergedDisabled = computed(() => props.disabled || checkboxGroupCtx?.disabled || false)

    const handleCheck = (e: Event) => {
      if (mergedDisabled.value) return;
      const newChecked = (e.target as HTMLInputElement).checked;
      _checkboxChecked.value = newChecked
      emit('change', newChecked, e)
    };

    return () => {
      const children = slots.default?.();

      return (
        <label
          class={[
            'i-checkbox',
            innerChecked.value && 'i-checkbox-is-checked',
            mergedDisabled.value && 'i-checkbox-is-disabled',
            mergedSize.value && `i-checkbox--size-${mergedSize.value}`
          ]}
          {...attrs}
        >
          <input
            readonly
            type="checkbox"
            class='i-checkbox__former'
            checked={innerChecked.value}
            disabled={mergedDisabled.value}
            value={props.value}
            onClick={(e) => e.stopPropagation()}
            onChange={handleCheck}
          />
          <span class='i-checkbox__input' />
          <span class='i-checkbox__label'>
            {children}
          </span>
        </label>
      );
    };
  },
});
