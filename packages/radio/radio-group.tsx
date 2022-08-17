import { computed, defineComponent, PropType, provide, ref } from 'vue';
import './index.scss';
import { useChildComponentSlots } from '../common'
import Radio from './radio'

export default defineComponent({
  name: 'RadioGroup',
  props: {
    /**
     * 单选框组选中的值（受控值）
     */
    checked: [String, Number],
    /**
     * 单选框组选中的值（非受控值）
     * @default 第一项的 value
     */
    defaultChecked: {
      type: [String, Number],
      default: undefined
    },
    /**
     * 单选框组全局类型
     * @default radio
     */
    type: String as PropType<"radio" | "radio-button">,
    /**
     * 按钮单选框全局尺寸
     * @default medium
     */
    size: String as PropType<"small" | "medium" | "large">,
    /**
     * 单选框组是否全局禁用
     */
    disabled: Boolean,
  },
  emits: {
    /**
     * 选中某一项时触发
     */
    'change': (value?: string | number, event?: Event) => true,
  },
  setup(props, { attrs, emit }) {
    const getChildComponentByName = useChildComponentSlots();
    const childrenList = getChildComponentByName('Radio')

    const initValue = () => {
      let result = props.defaultChecked
      !result && childrenList.map((item: any, index: number) => {
        index === 0 && (result = item.props.value);
      })
      return result
    }
    const _groupValue = ref(initValue())
    const innerValue = computed(() => props.checked ?? _groupValue.value)

    const radioItems = () => {
      return childrenList.map((item: any, index: number) => {
        const itemVal = item.props.value;
        return (
          <Radio
            checked={innerValue.value === itemVal}
            onChange={(checked, e) => {
              _groupValue.value = itemVal
              emit('change', itemVal, e)
            }}
            {...item.props}
          >
            {item.children.default()}
          </Radio>
        );
      })
    }

    provide('radioGroupCtx', {
      type: props.type,
      size: props.size,
      disabled: props.disabled,
    })

    return () => {
      return (
        <div class='i-radio-group' {...attrs}>
          {radioItems()}
        </div>
      );
    };
  },
});
