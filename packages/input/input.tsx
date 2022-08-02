import './index.scss';
import { Icon } from '../icon';
import { computed, defineComponent, nextTick, onMounted, PropType, ref } from 'vue';
import { turnValue } from '../common'

export default defineComponent({
  name: 'Input',
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
     * 输入框固定值（受控）
     */
    value: [String, Number],
    /**
     * 输入框默认值（非受控）
     */
    defaultValue: {
      type: [String, Number],
      default: ''
    },
    /**
     * 是否禁用输入框
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 输入框是否只读
     * @default false
     */
    readonly: {
      type: Boolean,
      default: false
    },
    /**
     * 是否隐藏数字输入框后缀按钮
     * @default false
     */
    hideNumberBtn: {
      type: Boolean,
      default: false
    },
    /**
     * 是否聚焦时全选
     * @default false
     */
    selectAll: {
      type: Boolean,
      default: false
    },
    /**
     * 输入框尺寸
     * @default medium
     */
    size: {
      type: String as PropType<'small' | 'medium' | 'large'>,
    },
    /**
     * 输入框状态
     */
    status: String as PropType<'success' | 'warning' | 'error'>,
    /**
     * 输入框底部提示
     */
    tips: String,
    /**
     * 用户最多可以输入的字符个数
     */
    maxLength: {
      type: Number,
      default: undefined
    },
    /**
     * 是否可清空
     * @default false
     */
    clearable: {
      type: Boolean,
      default: false
    },
    /**
     * 输入框类型
     * @default text
     */
    type: {
      type: String as PropType<'text' | 'password' | 'number'>,
    },
    /**
     * 数字输入框滑块数值变化速率
     * @default default
     */
    speed: {
      type: String as PropType<'slow' | 'default' | 'fast'>,
      default: 'default'
    },
    /**
     * 数字输入框最大值
     */
    maxNumber: {
      type: Number,
      default: Number.MAX_VALUE
    },
    /**
     * 数字输入框最小值
     */
    minNumber: {
      type: Number,
      default: Number.MIN_SAFE_INTEGER
    },
    /**
     * 数字输入框清空值时是否转为最小值
     * @default false
     */
    minNumberLock: {
      type: Boolean,
      default: false
    },
    /**
     * 数字输入框保留几位小数
     * @default 0
     */
    precision: {
      type: Number,
      default: 0
    },
    /**
     * 数字输入框数值变化间隔
     * @default 1
     */
    step: {
      type: Number,
      default: 1
    },
    /**
     * 组件前置图标名
     */
    prefixIcon: String,
    /**
     * 组件后置图标名
     */
    suffixIcon: String,
    /**
     * 组件前置图标类名
     */
    prefixIconClass: String,
    /**
     * 组件后置图标类名
     */
    suffixIconClass: String
  },
  emits: {
    /**
     * 输入框值发生变化时触发
     */
    'input': (value: string, ev?: Event) => true,
    /**
     * 输入框聚焦时触发
     */
    'focus': (value: string, ev?: Event) => true,
    /**
     * 输入框失焦时触发
     */
    'blur': (value: string, ev?: Event) => true,
    /**
     * 键盘按下时触发
     */
    'keyDown': (value: string, ev?: Event) => true,
    /**
     * 键盘按下回车键时触发
     */
    'enter': (value: string, ev?: Event) => true,
    /**
     * 释放键盘时触发
     */
    'keyUp': (value: string, ev?: Event) => true,
    /**
     * 清空按钮点击时触发
     */
    'clear': (ev?: Event) => true,
    /**
     * 数字输入框移动滑块时触发
     */
    'move': (value: string, ev?: Event) => true,
    /**
     * 数字输入框滑块失焦时触发
     */
    'moveUp': (value: string) => true,
    /**
     * 点击前置图标触发事件
     */
    'clickPrefixIcon': (ev?: MouseEvent) => true,
    /**
     * 点击后置图标触发事件
     */
    'clickSuffixIcon': (ev?: MouseEvent) => true,
  },
  setup(props, { slots, emit }) {
    // 聚焦 input 输入框
    const inputRef = ref<HTMLInputElement>();
    const focusInputNode = (e: MouseEvent) => {
      if (inputRef.value && e.target !== inputRef.value) {
        e.preventDefault();
        inputRef.value.focus();
      }
    };

    const _inputVal = ref(props.defaultValue)
    const computedValue = computed(() => props.value ?? _inputVal.value)

    const valueLength = ref(computedValue.value?.toString().length || 0)

    const handleInput = (e: Event) => {
      props.maxLength && (valueLength.value = (e.target as HTMLInputElement).value.length)
      let currentValue = (e.target as HTMLInputElement).value
      if (props.type === 'number') {
        if (currentValue !== '') {
          if (Number(currentValue) > props.maxNumber) {
            currentValue = props.maxNumber.toFixed(props.precision).toString();
          }
          if (Number(currentValue) < props.minNumber) {
            currentValue = props.minNumber.toFixed(props.precision).toString();
          }
        } else {
          if (Number(currentValue) < props.minNumber && props.minNumberLock) {
            currentValue = props.minNumber.toFixed(props.precision).toString();
          }
        }
      }
      _inputVal.value = currentValue
      emit('input', currentValue, e)
      // 受控化
      nextTick(() => {
        if (inputRef.value && computedValue.value !== inputRef.value.value) {
          inputRef.value.value = computedValue.value as string;
        }
      });
    };

    // 点击清空按钮
    const handleClear = (e: Event) => {
      _inputVal.value = ''
      emit('input', '', e)
      emit('clear', e)
    };

    const currentType = ref(props.type);
    // 密码类型切换
    const handleSwitchPassword = (e: MouseEvent) => {
      e.stopPropagation();
      currentType.value !== 'password' ? (currentType.value = 'password') : (currentType.value = 'text')
    };

    // 键盘事件
    const handleKeyDown = (e: any) => {
      e.key === 'Enter' && emit('enter', e.target.value, e);
      emit('keyDown', e.target.value, e)
    };

    // 通用事件
    const handleEvent = (eventType: 'focus' | 'blur' | 'up', e: any) => {
      if (eventType === 'focus') {
        emit('focus', e.target.value, e)
        if (props.selectAll) {
          (inputRef.value as unknown as HTMLInputElement).select()
        }
      }
      if (eventType === 'blur') {
        if (props.type === 'number' && e.target.value) {
          const fixedValue = Number(e.target.value).toFixed(props.precision);
          e.target.value = fixedValue;
        }
        emit('blur', e.target.value, e)
      }
      if (eventType === 'up') {
        emit('keyUp', e.target.value, e)
        if (props.type === 'number') {
          // 设置最大值最小值按钮禁用状态
          const currentValue = Number((inputRef.value as unknown as HTMLInputElement).value);
          if (currentValue === props.maxNumber) {
            ifMaximum.value = true;
          } else {
            ifMaximum.value = false;
          }
          if (currentValue === props.minNumber) {
            ifLeastValue.value = true;
          } else {
            ifLeastValue.value = false;
          }
        }
      }
    };

    const renderInput = () => (
      <input
        class="i-input__inner"
        placeholder={props.placeholder}
        disabled={props.disabled}
        readonly={props.readonly}
        ref={inputRef}
        value={computedValue.value}
        type={currentType.value}
        maxlength={props.maxLength}
        max={currentType.value === 'number' ? props.maxNumber : undefined}
        min={currentType.value === 'number' ? props.minNumber : undefined}
        step={currentType.value === 'number' ? props.step : undefined}
        onInput={handleInput}
        onFocus={(e) => handleEvent('focus', e)}
        onBlur={(e) => handleEvent('blur', e)}
        onKeydown={handleKeyDown}
        onKeyup={(e) => handleEvent('up', e)}
      />
    );

    // 最大值 | 最小值判断
    const ifMaximum = ref(false);
    const ifLeastValue = ref(false);

    onMounted(() => {
      if (props.type === 'number') {
        if (Number(computedValue) <= props.minNumber) {
          ifLeastValue.value = true
        }
        if (Number(computedValue) >= props.maxNumber) {
          ifMaximum.value = true
        }
      }
    })

    // 数字调整按钮
    const handleAdjustValue = (handle = true, e: MouseEvent) => {
      e.stopPropagation();
      let currentValue;
      let computedValue = 0;

      if (inputRef) {
        currentValue = Number((inputRef.value as unknown as HTMLInputElement).value);
        if (handle) {
          computedValue = currentValue + props.step;
        } else {
          computedValue = currentValue - props.step;
        }
        // 设置最大值最小值按钮禁用状态
        if (computedValue >= props.maxNumber) {
          computedValue = props.maxNumber
          ifMaximum.value = true
        } else {
          ifMaximum.value = false
        }
        if (computedValue <= props.minNumber) {
          computedValue = props.minNumber
          ifLeastValue.value = true
        } else {
          ifLeastValue.value = false
        }
      }
      const result = computedValue.toFixed(props.precision);
      (inputRef.value as unknown as HTMLInputElement).value = result;
      _inputVal.value = result
      emit('input', result, e)
    };

    const renderNumberBtn = (
      <div class="i-input-number-button">
        <Icon
          name="ArrowCaretTop"
          disabled={ifMaximum.value}
          onClick={(e: MouseEvent) => handleAdjustValue(true, e)}
        />
        <Icon
          name="ArrowCaretBottom"
          disabled={ifLeastValue.value}
          onClick={(e: MouseEvent) => handleAdjustValue(false, e)}
        />
      </div>
    );

    // 数字调整滑块
    const sliderDown = ref(false);
    const sliderX = ref(0);
    const sliderY = ref(0);
    const sliderMovingX = ref(0);
    const sliderMovingY = ref(0);
    let startX = 0;
    let startY = 0;
    let countValue = 0;
    let criticalValue = 0;
    const handleSliderMove = (e: any) => {
      startX += e.movementX;
      startY += e.movementY;

      // 滑块更新输入框数值
      if (inputRef) {
        countValue = Number((inputRef.value as unknown as HTMLInputElement).value);
        criticalValue += e.movementX;
        let changeSpeedNum = { slow: 30, default: 10, fast: 1 }[props.speed];
        if (criticalValue > changeSpeedNum && countValue < props.maxNumber) {
          criticalValue = 0;
          countValue += props.step;
        }
        if (criticalValue < -changeSpeedNum && countValue > props.minNumber) {
          criticalValue = 0;
          countValue -= props.step;
        }
        // 设置最大值最小值按钮禁用状态
        countValue === props.maxNumber ? (ifMaximum.value = true) : (ifMaximum.value = false);
        countValue === props.minNumber ? (ifLeastValue.value = true) : (ifLeastValue.value = false);

        const result = countValue.toFixed(props.precision);
        (inputRef.value as unknown as HTMLInputElement).value = result;
        _inputVal.value = result
        emit('input', result, e)
        emit('move', result, e)
      }

      // 滑块超出屏幕边界处理
      if (e.clientX + startX < 0) {
        startX += window.innerWidth;
      }
      if (e.clientX + startX > window.innerWidth) {
        startX -= window.innerWidth;
      }
      if (e.clientY + startY < 0) {
        startY += window.innerHeight;
      }
      if (e.clientY + startY > window.innerHeight) {
        startY -= window.innerHeight;
      }

      // 更新滑块位置
      sliderMovingX.value = startX
      sliderMovingY.value = startY
    };
    const handleSliderUp = () => {
      sliderDown.value = false
      document.exitPointerLock();
      sliderMovingX.value = 0
      sliderMovingY.value = 0
      emit('moveUp', (inputRef.value as unknown as HTMLInputElement).value)
      window.removeEventListener('mouseup', handleSliderUp);
      window.removeEventListener('mousemove', handleSliderMove);
    };
    const handleSliderDown = (e: MouseEvent) => {
      if (props.size && props.size === 'small') {
        sliderY.value = e.clientY - 8
      } else if (props.size && props.size === 'large') {
        sliderY.value = e.clientY - 15
      } else {
        sliderY.value = e.clientY - 10
      }
      sliderX.value = e.clientX - 14;
      (e.target as HTMLElement).requestPointerLock();
      sliderDown.value = true
      window.addEventListener('mouseup', handleSliderUp);
      window.addEventListener('mousemove', handleSliderMove);
    };
    const renderNumberSlider = () => (
      <div class="i-input-number-slider" onMousedown={handleSliderDown}>
        {sliderDown.value && (
          <div
            class="i-input-number-scrubbable"
            style={{
              left: turnValue(sliderX.value),
              top: turnValue(sliderY.value),
              transform: `translate(${sliderMovingX.value}px,${sliderMovingY.value}px)`,
            }}
          >
            <svg
              width="30"
              height="19"
              viewBox="0 0 30 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_7775_2255)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3 8.999V9.004L8.997 15L8.998 11.001H10.997H21V15L27 9L21 3V7.022H10.997H8.997L8.998 3L3 8.999ZM4.411 9.002L7.998 5.414L7.997 8.001H11.497H22V5.414L25.5 9L22 12.587V10L11.497 10.002L7.998 10.001L7.997 12.587L4.411 9.002Z"
                  fill="white"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.4971 10.0015L22 10.0005V12.5875L25.5 9L22 5.41451V8.02151H11.4971H7.99707V5.41451L4.41107 9.0015L7.99707 12.5875V10.0005L11.4971 10.0015Z"
                  fill="black"
                />
              </g>
              <defs>
                <filter
                  id="filter0_d_7775_2255"
                  x="-0.6"
                  y="-1.6"
                  width="31.2"
                  height="23.2"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="1" />
                  <feGaussianBlur stdDeviation="1.3" />
                  <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.32 0" />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_7775_2255"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_7775_2255"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        )}
      </div>
    );

    // 内置图标
    const handleClickInnerIcon = (location: 'pre' | 'suf', e: MouseEvent) => {
      e.stopPropagation();
      if (location === 'pre') {
        emit('clickPrefixIcon', e)
        return;
      }
      if (location === 'suf') {
        emit('clickSuffixIcon', e)
        return;
      }
      focusInputNode(e);
    };
    const renderPrefixIcon = (
      <Icon
        class={[
          'i-input-prefix-icon',
          // clickPrefixIcon && 'i-input-icon-cursor',
          props.prefixIconClass
        ]}
        name={props.prefixIcon}
        onClick={(e: MouseEvent) => handleClickInnerIcon('pre', e)}
      />
    );
    const renderSuffixIcon = (
      <Icon
        class={[
          'i-input-suffix-icon',
          // clickSuffixIcon && 'i-input-icon-cursor',
          props.suffixIconClass
        ]}
        name={props.suffixIcon}
        onClick={(e: MouseEvent) => handleClickInnerIcon('suf', e)}
      />
    );

    const render = () => {
      const children = slots.default?.();

      return (
        <>
          <div
            class={[
              'i-input',
              props.disabled && 'i-input-is-disabled',
              props.readonly && 'i-input-is-readonly',
              props.size && `i-input--size-${props.size}`,
              props.status && `i-input--status-${props.status}`,
              currentType.value && `i-input--type-${currentType.value}`,
            ]}
            onClick={focusInputNode}
          >
            {props.prefixIcon && renderPrefixIcon}
            {children}
            {renderInput()}
            {props.maxLength && (
              <div class="i-input--limit">
                <span class="i-input--limit-count">
                  {valueLength.value < props.maxLength ? valueLength.value : props.maxLength} / {props.maxLength}
                </span>
              </div>
            )}
            {!props.disabled
              && computedValue
              // && (props.clearable || onClear)
              && props.clearable
              && (
                <Icon name="TipCloseFill" onClick={handleClear} />
              )}
            {!props.disabled && props.type === 'password' && (
              <Icon
                name={currentType.value === 'password' ? 'ViewHide' : 'View'}
                onClick={handleSwitchPassword}
              />
            )}
            {props.suffixIcon && renderSuffixIcon}
            {!props.disabled && props.type === 'number' && !props.hideNumberBtn && renderNumberBtn}
            {!props.disabled && props.type === 'number' && renderNumberSlider()}
          </div>
          {props.tips && <div
            class={[
              'i-input__tips',
              props.status && `i-input__tips--status-${props.status}`,
            ]}
          >
            {props.tips}
          </div>}
        </>
      );
    };

    return {
      inputRef,
      render
    }
  },
  methods: {
    /**
     * @zh 使输入框获取焦点
     * @en Make the input box focus
     * @public
     */
    focus() {
      (this.inputRef as HTMLInputElement)?.focus();
    },
    /**
     * @zh 使输入框失去焦点
     * @en Make the input box lose focus
     * @public
     */
    blur() {
      (this.inputRef as HTMLInputElement)?.blur();
    },
  },
  render() {
    return this.render();
  },
});


