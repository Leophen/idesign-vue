import './index.scss';
import _ from 'lodash';
import { computed, defineComponent, PropType } from 'vue';

const CarouselInjectProps = {
  /**
   * 索引值
   * @default 0
   */
  index: {
    type: Number,
    default: 0
  },
  /**
   * 当前轮播项
   * @default 0
   */
  innerCurrent: {
    type: Number,
    default: 0
  },
  /**
   * 轮播图类型
   * @default default
   */
  type: {
    type: String as PropType<'default' | 'card'>,
    default: 'default'
  },
  /**
   * 是否有动画
   * @default false
   */
  ifAnimation: {
    type: Boolean,
    default: false
  },
  /**
   * 轮播项数量
   * @default 1
   */
  childrenLength: {
    type: Number,
    default: 1
  },
  /**
   * 滑动动画时长
   * @default 300
   */
  duration: {
    type: Number,
    default: 300
  },
  /**
   * 包裹层 ref
   */
  wrapWidth: {
    type: Number,
    default: 0
  },
}

export default defineComponent({
  name: 'CarouselItem',
  props: {
    ...CarouselInjectProps
  },
  emits: {
    /**
     * 点击轮播项触发
     */
    'clickItem': (index: number) => true,
  },
  setup(props, { slots, emit }) {
    const disposeIndex = computed(() => {
      if (props.type !== 'card') return 0;
      if (props.innerCurrent === 0 && props.index === props.childrenLength - 1) {
        return -1;
      }
      if (props.innerCurrent === props.childrenLength - 1 && props.index === 0) {
        return props.childrenLength;
      }
      if (props.index < props.innerCurrent - 1 && props.innerCurrent - props.index >= props.childrenLength / 2) {
        return props.childrenLength + 1;
      }
      if (props.index > props.innerCurrent + 1 && props.index - props.innerCurrent >= props.childrenLength / 2) {
        return -2;
      }
      return props.index;
    });

    const CARD_SCALE = 210 / 332; // 缩放比例
    const itemWidth = 0.415; // 宽度比例

    const translateX = computed(() => {
      if (props.type !== 'card') return 0;
      const wrapWidth = props.wrapWidth
      const translateIndex = !active.value && props.childrenLength > 2 ? disposeIndex.value : props.index;
      const inStage = Math.abs(translateIndex - props.innerCurrent) <= 1;
      if (inStage) {
        return (wrapWidth * ((translateIndex - props.innerCurrent) * (1 - itemWidth * CARD_SCALE) - itemWidth + 1)) / 2;
      }
      if (translateIndex < props.innerCurrent) {
        return (-itemWidth * (1 + CARD_SCALE) * wrapWidth) / 2;
      }
      return ((2 + itemWidth * (CARD_SCALE - 1)) * wrapWidth) / 2;
    });

    const active = computed(() => props.index === props.innerCurrent);
    const zIndex = computed(() => {
      if (props.type !== 'card') return 0;
      const translateIndex = !active.value && props.childrenLength > 2 ? disposeIndex.value : props.index;
      const isActivity = translateIndex === props.innerCurrent;
      const inStage = Math.round(Math.abs(translateIndex - props.innerCurrent)) <= 1;
      if (isActivity) {
        return 2;
      }
      if (inStage) {
        return 1;
      }
      return 0;
    });

    const itemStyle = computed(() => {
      if (props.type === 'card') {
        const translateIndex = !active.value && props.childrenLength > 2 ? disposeIndex.value : props.index;
        const isActivity = translateIndex === props.innerCurrent;
        return {
          transform: `translateX(${translateX.value}px) scale(${isActivity ? 1 : CARD_SCALE})`,
          transition: `transform ${props.duration / 1000}s ease`,
          zIndex: zIndex.value,
        };
      }
      return {};
    });

    return () => {
      const children = slots.default?.();

      return (
        <li
          class='i-carousel-item'
          style={itemStyle.value}
          onClick={() => { emit('clickItem', props.index) }}
        >
          {children}
        </li>
      );
    };
  },
});
