import { computed, defineComponent, nextTick, PropType, ref, watchEffect } from 'vue';
import './index.scss';
import { turnValue } from '../common';

export default defineComponent({
  name: 'CarouselNavigation',
  props: {
    /**
     * 占位符
     * @default 请输入
     */
    placeholder: {
      type: String,
      default: '请输入'
    },
    /**
     * 文本框固定值（受控）
     */
    value: {
      type: [String, Number],
      default: undefined
    },
    /**
     * 文本框默认值（非受控）
     */
    defaultValue: {
      type: [String, Number],
      default: ''
    },
    /**
     * 是否禁用文本框
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 文本框是否只读
     * @default false
     */
    readonly: {
      type: Boolean,
      default: false
    },
    /**
     * 文本框状态
     */
    status: String as PropType<'success' | 'warning' | 'error'>,
    /**
     * 文本框底部提示
     */
    tips: String,
    /**
     * 用户最多可以输入的字符个数
     */
    maxLength: Number,
    /**
     * 自动聚焦
     * @default false
     */
    autofocus: {
      type: Boolean,
      default: false
    },
    /**
     * 是否禁用右下角高度调整模块
     * @default false
     */
    noResize: {
      type: Boolean,
      default: false
    },
    /**
     * 自适应高度
     * @default false
     */
    autoSize: {
      type: Boolean,
      default: false
    },
    /**
     * 最小高度
     */
    minRows: Number,
    /**
     * 最大高度
     */
    maxRows: Number,
  },
  emits: {
    /**
     * 输入内容变化时触发
     */
    'input': (value: string | number, ev?: Event) => true,
    /**
     * 输入框聚焦时触发
     */
    'focus': (value: string | number, ev?: Event) => true,
    /**
     * 输入框失焦时触发
     */
    'blur': (value: string | number, ev?: Event) => true,
  },
  setup(props, { slots, emit }) {

    const _inputValue = ref(props.defaultValue)
    const innerValue = computed(() => props.value ?? _inputValue.value)

    const valueLength = ref(innerValue.value?.toString().length || 0)
    const textAreaRef = ref<HTMLTextAreaElement>()

    const handleInput = (e: Event) => {
      const newVal = (e.target as HTMLTextAreaElement).value
      props.maxLength && (valueLength.value = newVal.length)
      _inputValue.value = newVal;
      emit('input', newVal, e)
      // 受控化
      nextTick(() => {
        if (textAreaRef.value && innerValue.value !== textAreaRef.value.value) {
          textAreaRef.value.value = innerValue.value as string
        }
      })
      resize()
    };

    const resize = () => {
      if (props.autoSize && textAreaRef.value) {
        // 如果字数减少，重设高度
        textAreaRef.value.style.height = 'auto';
        // 如果高度不够，重新设置
        if (textAreaRef.value.scrollHeight >= textAreaRef.value.offsetHeight) {
          let val;
          textAreaRef.value.scrollHeight > 32 ? val = textAreaRef.value.scrollHeight - 10 : val = textAreaRef.value.scrollHeight;
          textAreaRef.value.style.height = val + 'px'
        }
      }
    }

    // 高度自适应
    watchEffect(() => {
      props.autoSize ? resize() : ''
    })

    // 通用事件
    const handleEvent = (eventType: 'focus' | 'blur', e: any) => {
      if (eventType === 'focus') {
        emit('focus', e.target.value, e)
      }
      if (eventType === 'blur') {
        emit('blur', e.target.value, e)
      }
    };

    return () => {
      return (
        <>
          <div class='i-textarea'>
            <textarea
              class={[
                'i-textarea__inner',
                props.disabled && 'i-textarea__inner-is-disabled',
                props.readonly && 'i-textarea__inner-is-readonly',
                props.status && `i-textarea__inner--status-${props.status}`,
              ]}
              style={{
                minHeight: props.autoSize ? turnValue(props.minRows && (22 * props.minRows)) || 22 : turnValue(props.minRows && (22 * props.minRows)),
                maxHeight: props.maxRows && turnValue(22 * props.maxRows),
                resize: props.noResize ? 'none' : undefined
              }}
              ref={textAreaRef}
              placeholder={props.placeholder}
              disabled={props.disabled}
              readonly={props.readonly}
              rows={props.autoSize ? 1 : undefined}
              maxlength={props.maxLength}
              autofocus={props.autofocus}
              value={innerValue.value}
              onInput={handleInput}
              onFocus={(e) => handleEvent('focus', e)}
              onBlur={(e) => handleEvent('blur', e)}
            />
            {props.maxLength && (
              <div class="i-textarea--limit">
                <span class="i-textarea--limit-count">
                  {valueLength.value < props.maxLength ? valueLength.value : props.maxLength} / {props.maxLength}
                </span>
              </div>
            )}
          </div>
          {props.tips && (
            <div
              class={[
                'i-textarea__tips',
                props.status && `i-textarea__tips--status-${props.status}`,
              ]}
            >
              {props.tips}
            </div>
          )}
        </>
      );
    };
  },
});
