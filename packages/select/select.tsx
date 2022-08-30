import { computed, defineComponent, onMounted, PropType, ref, VNode } from 'vue';
import _ from 'lodash';
import './index.scss';
import { Tag } from '../tag'
import { Input } from '../input'
import { Dropdown } from '../dropdown'
import { DropdownItemProps, DropdownOption } from '../dropdown/type'
import { useChildComponentSlots, turnValue } from '../common'

export default defineComponent({
  name: 'Select',
  props: {
    /**
     * 选择器宽度
     * @default 100%
     */
    width: [String, Number],
    /**
     * 固定选中值（受控）
     */
    modelValue: {
      type: [String, Number, Array] as PropType<
        | string
        | number
        | (string | number)[]
      >,
      default: undefined
    },
    /**
     * 默认选中值（非受控）
     */
    defaultValue: {
      type: [String, Number, Array] as PropType<
        | string
        | number
        | (string | number)[]
      >,
      default: []
    },
    /**
     * 占位符
     * @default 请选择
     */
    placeholder: {
      type: String,
      default: '请选择'
    },
    /**
     * 下拉操作项
     * @default []
     */
    options: {
      type: Array as PropType<DropdownOption[]>,
      default: []
    },
    /**
     * 选择器尺寸
     * @default medium
     */
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
    },
    /**
     * 是否可一键清空
     * @default true
     */
    clearable: {
      type: Boolean,
      default: true
    },
    /**
     * 选择框前置图标名
     */
    prefixIcon: String,
    /**
     * 选择框后置图标名
     */
    suffixIcon: String,
    /**
     * 选择框前置图标类名
     */
    prefixIconClass: String,
    /**
     * 选择框后置图标类名
     */
    suffixIconClass: String,
    /**
     * 级联子层级展开方向
     * @default right
     */
    cascaderDirection: {
      type: String as PropType<'left' | 'right'>,
      default: 'right'
    },
    /**
     * 是否可多选
     * @default false
     */
    multiple: {
      type: Boolean,
      default: false
    },
    /**
     * 是否禁用选择器
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false
    },
  },
  emits: {
    /**
     * 选中值变化时触发 v-model
     */
    'update:modelValue': (val: string | number | Array<string | number>) => true,
    /**
     * 选中值变化时触发
     */
    'change': (val: string | number | Array<string | number>) => true
  },
  setup(props, { slots, emit, attrs }) {
    // 转换下拉数据及更新下拉框宽度
    const selectRef = ref<HTMLDivElement>()
    const innerOptions = ref(props.options)
    const dropdownWidth = ref(0)
    const children = slots.default?.();
    const getChildComponentByName = useChildComponentSlots();
    const childrenList: VNode[] = getChildComponentByName('SelectItem')
    // Select.Item 模式 -> 更新下拉数据
    if (children) {
      let selectData: DropdownItemProps[] = []
      childrenList.map((item) => {
        selectData.push({
          // @ts-ignore
          content: item.children.default()[0].children,
          value: item.props?.value,
          disabled: item.props?.disabled,
          divider: item.props?.divider,
          title: item.props?.title,
          onClick: item.props?.onClick,
        })
      })
      innerOptions.value = selectData
    }
    onMounted(() => {
      // 更新下拉宽度
      const currentWidth = selectRef.value?.getBoundingClientRect().width || 0
      dropdownWidth.value = currentWidth
    })

    // 更新下拉数据
    const _selectValue = ref(props.defaultValue)
    const innerValue = computed(() => props.modelValue ?? _selectValue.value)

    const updateValue = (val: string | number | Array<string | number>) => {
      const newVal = _.cloneDeep(val)
      _selectValue.value = newVal
      emit('change', newVal)
      emit('update:modelValue', newVal)
    }

    // 根据 options 的 value 获得对应的 content
    const valToContent = (options: Array<DropdownOption>, val: string | number) => {
      let content: string | HTMLElement = ''
      options.map(item => {
        if (item.children && item.children.length > 0) {
          // 级联项
          if (content === '') {
            content = valToContent(item.children, val)
          }
        } else {
          // 单项
          if (item.value === val && item.content && content === '') {
            content = item.content
          }
        }
      })
      return content
    }

    // 选择器输入框文本内容
    const getInputValue = (val: string | number | Array<string | number>) => {
      if (!props.multiple) {
        // 单选
        if (!Array.isArray(val)) {
          const content = valToContent(innerOptions.value, val)
          if (typeof content === 'string' || typeof content === 'number') {
            return content
          } else {
            return ''
          }
        } else {
          return ''
        }
      } else {
        // 多选
        if (Array.isArray(innerValue.value)) {
          if (innerValue.value.length > 0) {
            return 'i'
          } else {
            return ''
          }
        } else {
          return ''
        }
      }
    }

    // 选择器显示隐藏操作
    const dropdownShow = ref(false)
    const handleTrigger = (visible: boolean) => {
      !props.disabled && (dropdownShow.value = visible)
    }

    // 删除多选项
    const handleDelItem = (e: MouseEvent, val: string | number) => {
      e.stopPropagation()
      if (Array.isArray(innerValue.value)) {
        const curInnerValue = _.pull(innerValue.value, val);
        const newVal = _.cloneDeep(curInnerValue)
        _selectValue.value = newVal
        emit('change', newVal)
        emit('update:modelValue', newVal)
      }
    }

    const handleClear = (e: Event) => {
      !dropdownShow && e.stopPropagation()
      let nullVal: '' | [] = ''
      if (props.multiple) {
        nullVal = []
      }
      _selectValue.value = nullVal
      emit('change', nullVal)
      emit('update:modelValue', nullVal)
    }

    return () => {
      return (
        <div
          ref={selectRef}
          class='i-select'
          style={{ width: turnValue(props.width), minWidth: turnValue(props.width) }}
          data-size={props.size}
          {...attrs}
        >
          <Dropdown
            width={dropdownWidth.value}
            options={innerOptions.value}
            onClick={updateValue}
            onTrigger={handleTrigger}
            value={innerValue.value}
            cascaderDirection={props.cascaderDirection}
            multiple={props.multiple}
            disabled={props.disabled}
            sameWidth
            size={props.size}
          >
            <Input
              class={!props.clearable && 'i-input__hide-clear'}
              modelValue={getInputValue(innerValue.value)}
              placeholder={props.placeholder}
              readonly={!props.disabled}
              disabled={props.disabled}
              size={props.size}
              prefixIcon={props.prefixIcon}
              prefixIconClass={props.prefixIconClass}
              suffixIcon={props.suffixIcon ? props.suffixIcon : "ArrowDown"}
              suffixIconClass={dropdownShow.value && !props.suffixIcon ? "i-select-arrow__show" : props.suffixIconClass}
              clearable={props.clearable}
              onClear={handleClear}
            >
              {props.multiple && Array.isArray(innerValue.value) && innerValue.value.length > 0 && (
                <div class='i-select__multiple-wrap'>
                  {
                    innerValue.value.map(val => (
                      <Tag
                        theme="dark"
                        size="small"
                        closeable
                        onClose={(e: MouseEvent) => handleDelItem(e, val)}
                        key={val}
                      >
                        {valToContent(innerOptions.value, val)}
                      </Tag>
                    ))
                  }
                </div>
              )}
            </Input>
          </Dropdown>
        </div>
      );
    };
  },
});