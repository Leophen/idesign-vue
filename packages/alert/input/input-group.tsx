import './index.scss';
import { defineComponent, ref, watchEffect } from 'vue';
import { turnValue } from '../common';

export default defineComponent({
  name: 'InputGroup',
  emits: {
    /**
     * 点击前缀触发事件
     */
    'clickPrefix': (ev?: MouseEvent) => true,
    /**
     * 点击后缀触发事件
     */
    'clickSuffix': (ev?: MouseEvent) => true,
  },
  setup(props, { slots, emit, attrs }) {
    const contentHeight = ref(0);
    const groupNode = ref(null);

    watchEffect(() => {
      let maxHeight = 0;
      const groupChild = groupNode.value && (groupNode.value as HTMLElement).childNodes;
      groupChild &&
        Array.from(groupChild).map((item: any) => {
          if (
            item.className !== 'i-input__group-prefix' &&
            item.className !== 'i-input__group-suffix' &&
            item.offsetHeight > maxHeight
          ) {
            maxHeight = item.offsetHeight;
          }
        });
      contentHeight.value = maxHeight
    });

    const handleClickWith = (location: 'pre' | 'suf', e: MouseEvent) => {
      e.stopPropagation();
      if (location === 'pre') {
        emit('clickPrefix', e)
        return;
      }
      if (location === 'suf') {
        emit('clickSuffix', e)
        return;
      }
    };

    return () => {
      const prefixContent = slots.prefixContent?.();
      const children = slots.default?.();
      const suffixContent = slots.suffixContent?.();

      return (
        <div
          class='i-input__group'
          style={{ height: turnValue(contentHeight.value) }}
          ref={groupNode}
          {...attrs}
        >
          {prefixContent && (
            <div
              class={[
                'i-input__group-prefix',
                // clickPrefix && 'i-input__group-cursor'
              ]}
              onClick={(e: MouseEvent) => handleClickWith('pre', e)}
            >
              {prefixContent}
            </div>
          )}
          {children}
          {suffixContent && (
            <div
              class={[
                'i-input__group-suffix',
                // clickPrefix && 'i-input__group-cursor'
              ]}
              onClick={(e: MouseEvent) => handleClickWith('suf', e)}
            >
              {suffixContent}
            </div>
          )}
        </div>
      );
    };
  },
});
