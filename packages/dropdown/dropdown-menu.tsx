import { defineComponent, PropType } from 'vue';
import './index.scss';
import { DropdownOption } from './type'
import { turnValue } from '../common'
import DropdownMenu from './dropdown-menu'

export default defineComponent({
  name: 'DropdownMenu',
  props: {
    /**
     * 下拉操作项
     * @default []
     */
    options: {
      type: Array as PropType<DropdownOption[]>,
      default: []
    },
    /**
     * 下拉列表宽度
     */
    width: [String, Number],
    /**
     * 级联子项最大高度
     */
    maxHeight: [String, Number],
    /**
     * 下拉项高度
     * @default medium
     */
    size: String as PropType<'small' | 'medium' | 'large'>,
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
     * 选中值
     */
    selectedValue: {
      type: [String, Number, Array] as PropType<
        string |
        number |
        Array<string | number>
      >,
      default: []
    }
  },
  emits: {
    /**
     * 点击菜单项触发事件
     */
    'clickItem': (dropdownItem: DropdownOption, event: MouseEvent) => true
  },
  setup(props, { slots, emit }) {
    const handleItemClick = (item: DropdownOption, event: MouseEvent) => {
      event.stopPropagation()
      !(item.children && item.children?.length > 0) && emit('clickItem', item, event)
      item.onClick?.(item, event)
    }

    const clickCascaderItem = (item: DropdownOption, event: MouseEvent) => {
      emit('clickItem', item, event)
      item.onClick?.(item, event)
    }

    const ifHasAtt = (att: any) => {
      if (att !== undefined) {
        return true
      }
      return false
    }
    console.log(props.options,'jjj')

    return () => {
      return (
        <ul
          class={[
            'i-dropdown__menu',
            props.cascaderDirection === 'left' && 'i-dropdown__menu-left'
          ]}
          style={{
            width: turnValue(props.width) ? turnValue(props.width) : 'auto',
            maxHeight: turnValue(props.maxHeight),
            overflowY: props.maxHeight ? 'auto' : 'unset'
          }}
        >
          {props.options.map((item, index) => {
            return (
              <li key={`${item.value}${index}}`}>
                {item.title && <header class="i-dropdown__item-header">{item.title}</header>}
                <div
                  class={[
                    'i-dropdown__item',
                    props.size && `i-dropdown__item--size-${props.size}`,
                    ifHasAtt(item.disabled) && 'i-dropdown__item-is-disabled',
                    ifHasAtt(item.divider) && 'i-dropdown__item-has-divider',
                    item.value === props.selectedValue && 'i-dropdown__item-is-active',
                    item.children && item.children?.length > 0 && 'i-dropdown__item-cascader',
                    props.multiple && 'i-dropdown__item-multiple'
                  ]}
                  data-direction={props.cascaderDirection}
                  data-disabled={ifHasAtt(item.disabled)}
                  onClick={!ifHasAtt(item.disabled) ? ((e) => handleItemClick(item, e)) : () => { }}
                >
                  {item.children && item.children?.length > 0 && props.cascaderDirection === 'left' && <i-icon name="ArrowLeft" size={12} color="var(--i-font-2)" />}
                  <div
                    class={[
                      'i-dropdown__item-txt',
                      ((!props.multiple && item.value === props.selectedValue) || (props.multiple && Array.isArray(props.selectedValue) && props.selectedValue.includes(item.value)))
                      && 'i-dropdown__item-txt-is-active'
                    ]}
                  >
                    {item.content}
                  </div>
                  {item.children && item.children?.length > 0 && props.cascaderDirection === 'right' && <i-icon name="ArrowRight" size={12} color="var(--i-font-2)" />}
                  {item.children && item.children?.length > 0 &&
                    <DropdownMenu
                      options={item.children}
                      width={item.width}
                      maxHeight={item.maxHeight}
                      size={props.size}
                      cascaderDirection={props.cascaderDirection}
                      multiple={props.multiple}
                      selectedValue={props.selectedValue}
                      onClickItem={!ifHasAtt(item.disabled) ? clickCascaderItem : () => { }}
                    />
                  }
                  {props.multiple &&
                    <div class="i-dropdown__item-check">
                      {Array.isArray(props.selectedValue) && props.selectedValue.includes(item.value) &&
                        <i-icon name="Check" size={12} />
                      }
                    </div>
                  }
                </div>
              </li>
            )
          })}
        </ul>
      );
    };
  },
});

