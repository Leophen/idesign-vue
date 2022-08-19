import { defineComponent, PropType, ref, watch } from 'vue';
import _ from 'lodash';
import './index.scss';
import { DropdownOption, DropdownValue } from './type'
import { placementType, triggerType, turnValue } from '../common'
import { Popup } from '../popup'
import DropdownMenu from './dropdown-menu';

export default defineComponent({
  name: 'Dropdown',
  props: {
    /**
     * 下拉内容类名
     */
    contentClassName: String,
    /**
     * 下拉列表宽度
     */
    width: [String, Number],
    /**
     * 列表项最大高度
     */
    maxHeight: [String, Number],
    /**
     * 下拉项高度
     * @default medium
     */
    size: String as PropType<'small' | 'medium' | 'large'>,
    /**
     * 下拉选中项
     */
    value: {
      type: [String, Number, Array] as PropType<string | number | Array<string | number>>
    },
    /**
     * 下拉操作项
     * @default []
     */
    options: {
      type: Array as PropType<Array<DropdownOption>>,
      default: []
    },
    /**
     * 菜单触发位置
     * @default bottom
     */
    placement: {
      type: String as PropType<placementType>,
      default: 'bottom'
    },
    /**
     * 菜单触发方式
     * @default click
     */
    trigger: {
      type: String as PropType<triggerType>,
      default: 'click'
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
     * 级联子层级展开方向
     * @default right
     */
    cascaderDirection: {
      type: String as PropType<'left' | 'right'>,
      default: 'right'
    },
    /**
     * 是否全局禁用
     * @default false
     */
    disabled: {
      type: Boolean,
      default: false
    },
    /**
     * 气泡是否与触发节点等宽
     * @default false
     */
    sameWidth: {
      type: Boolean,
      default: false
    },
  },
  emits: {
    /**
     * 点击菜单项触发事件
     */
    'click': (value: DropdownValue, event?: MouseEvent) => true,
    /**
     * 切换下拉操作时触发
     */
    'trigger': (visible: boolean) => true
  },
  setup(props, { slots, emit, attrs }) {
    const popupVisible = ref(false)

    const switchPopup = (visible: boolean) => {
      popupVisible.value = visible
      emit('trigger', visible)
    }

    // 下拉选中项
    const innerValue = ref(props.value)
    watch(() => props.value, (newVal) => {
      newVal !== innerValue.value && (innerValue.value = newVal)
    })

    const handleClickItem = (item: DropdownOption, event: MouseEvent) => {
      if (!props.multiple) {
        // 单选模式
        emit('click', item.value, event)
        popupVisible.value = false
        emit('trigger', false)
      } else {
        // 多选模式
        let delIndex = 0
        let curMultiSelected: DropdownValue | undefined = innerValue.value
        !Array.isArray(curMultiSelected) && (curMultiSelected = [])
        curMultiSelected.map((it: string | number, index: number) => {
          if (it === item.value) {
            delIndex = index
          }
        })
        curMultiSelected.includes(item.value) ? curMultiSelected.splice(delIndex, 1) : curMultiSelected.push(item.value)
        emit('click', Array.from(curMultiSelected), event)
      }
    }

    const DropdownContent = () => (
      <div
        class={[
          'i-dropdown',
          props.contentClassName
        ]}
        style={{
          width: turnValue(props.width) ? turnValue(props.width) : 'auto',
          maxHeight: turnValue(props.maxHeight),
          overflowY: turnValue(props.maxHeight) ? 'auto' : 'unset'
        }}
        {...attrs}
      >
        <DropdownMenu
          size={props.size}
          options={props.options}
          cascaderDirection={props.cascaderDirection}
          multiple={props.multiple}
          selectedValue={innerValue.value}
          onClickItem={handleClickItem}
        />
      </div>
    )

    return () => {
      const children = slots.default?.();
      return (
        <Popup
          noPadding
          placement={props.placement}
          trigger={props.trigger}
          visible={popupVisible.value}
          disabled={props.disabled}
          sameWidth={props.sameWidth}
          onTrigger={switchPopup}
        >
          {{
            default: () => children,
            content: () => DropdownContent(),
          }}
        </Popup>
      );
    };
  },
});


