import { computed, defineComponent } from 'vue';
import _ from 'lodash';
import './index.scss';

export default defineComponent({
  name: 'CarouselNavigation',
  props: {
    /**
     * 轮播项数量
     * @default 0
     */
    itemNum: {
      type: Number,
      default: 0
    },
    /**
     * 当前轮播项
     * @default 0
     */
    current: {
      type: Number,
      default: 0
    }
  },
  emits: {
    /**
     * 悬浮导航项时触发
     */
    'enter': (current: number) => true,
  },
  setup(props, { slots, emit }) {
    const lists = computed(() => _.range(0, props.itemNum))

    const handleEnterItem = (index: number) => {
      emit('enter', index)
    }

    return () => {
      return (
        <ul class='i-carousel__navigation'>
          {lists.value.map(item => (
            <li
              class={[
                'i-carousel__navigation-item',
                props.current - 1 === item && 'i-carousel__navigation-item__active'
              ]}
              onMouseenter={() => handleEnterItem(item)}
              key={item}
            />
          ))}
        </ul>
      );
    };
  },
});
