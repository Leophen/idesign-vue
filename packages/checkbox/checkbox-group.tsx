import { computed, defineComponent, PropType, provide, ref, VNode } from 'vue';
import './index.scss';
import { useChildComponentSlots } from '../common'
import Checkbox from './checkbox'

export default defineComponent({
  name: 'CheckboxGroup',
  props: {
    /**
     * 多选框组选中的值（受控值）
     */
    modelValue: Array as PropType<Array<string | number>>,
    /**
     * 多选框组选中的值（非受控值）
     * @default []
     */
    defaultChecked: {
      type: Array as PropType<Array<string | number>>,
      default: []
    },
    /**
     * 按钮多选框全局尺寸
     * @default medium
     */
    size: String as PropType<"small" | "medium" | "large">,
    /**
     * 多选框组是否全局禁用
     */
    disabled: Boolean,
  },
  emits: {
    /**
     * 选中某一项时触发 v-model
     */
    'update:modelValue': (value: Array<string | number>) => true,
    /**
     * 选中某一项时触发
     */
    'change': (value?: Array<string | number>, event?: Event) => true,
  },
  setup(props, { emit, attrs }) {
    const _groupChecked = ref(props.defaultChecked)
    const innerChecked = computed(() => props.modelValue ?? _groupChecked.value)
    let groupCheckedArr: Set<string | number> = new Set([...innerChecked.value]);

    const getChildComponentByName = useChildComponentSlots();
    const childrenList: VNode[] = getChildComponentByName('Checkbox')
    const checkboxItems = () => {
      return childrenList.map(item => {
        const itemVal = item.props?.value;
        return (
          <Checkbox
            modelValue={innerChecked.value.includes(itemVal)}
            onChange={(checked, e) => {
              if (checked) {
                groupCheckedArr.add(itemVal)
              } else {
                groupCheckedArr.delete(itemVal)
              }
              _groupChecked.value = Array.from(groupCheckedArr)
              emit('change', Array.from(groupCheckedArr), e)
              emit('update:modelValue', Array.from(groupCheckedArr))
            }}
            {...item.props}
          >
            {/* @ts-ignore */}
            {item.children?.default()}
          </Checkbox>
        );
      })
    }

    provide('checkboxGroupCtx', {
      size: props.size,
      disabled: props.disabled,
    })

    return () => {
      return (
        <div class='i-checkbox-group' {...attrs}>
          {checkboxItems()}
        </div>
      );
    };
  },
});
