import { cloneVNode, computed, defineComponent, onMounted, onUnmounted, PropType, ref, watch, watchEffect } from 'vue';
import './index.scss';
import _ from 'lodash';
import { Icon } from '../icon'
import CarouselItem from './carousel-item';
import CarouselNavigation from './carousel-navigation';
import { turnValue, useChildComponentSlots } from '../common'

export default defineComponent({
  name: 'Carousel',
  props: {
    /**
     * 初始轮播项
     * @default 0
     */
    defaultCurrent: {
      type: Number,
      default: 0
    },
    /**
     * 轮播图的宽度
     * @default 100%
     */
    width: {
      type: [String, Number],
      default: '100%'
    },
    /**
     * 轮播图的高度
     * @default 300
     */
    height: {
      type: [String, Number],
      default: 300
    },
    /**
     * 是否自动播放
     * @default false
     */
    autoPlay: {
      type: [Boolean],
      default: false
    },
    /**
     * 轮播间隔时间
     * @default 3000
     */
    interval: {
      type: Number,
      default: 3000
    },
    /**
     * 是否悬浮时停止轮播
     * @default true
     */
    stopOnHover: {
      type: Boolean,
      default: true
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
     * 轮播滑动方向
     * @default horizontal
     */
    direction: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal'
    },
    /**
     * 滑动动画时长
     * @default 300
     */
    duration: {
      type: Number,
      default: 300
    },
  },
  emits: {
    /**
     * 悬浮导航项时触发
     */
    'change': (current: number) => true,
  },
  setup(props, { emit }) {
    const innerCurrent = ref(0)
    const childrenLength = ref(0)
    const ifAnimation = ref(false)
    const carouselRef = ref<any>(null);
    const wrapWidth = ref(0)
    const ifHoverContent = ref(false)

    // 进行子组件筛选，创建子节点列表
    const carouselItems = () => {
      const getChildComponentByName = useChildComponentSlots();
      const childrenList = getChildComponentByName('CarouselItem')
      childrenLength.value = childrenList.length;
      // 创建渲染用的节点列表
      const carouselItemList = childrenList.map((item: any, index: number) => {
        return (
          <CarouselItem
            index={index}
            innerCurrent={innerCurrent.value}
            ifAnimation={ifAnimation.value}
            childrenLength={childrenLength.value}
            wrapWidth={wrapWidth.value}
            type={props.type}
            duration={props.duration}
            onClickItem={(index: number) => {
              if (props.type === 'card') {
                innerCurrent.value = index
                emit('change', (index))
              }
            }}
          >
            {item.children.default()}
          </CarouselItem>
        );
      });
      // 列表头尾补一项（衔接轮播滑动）
      if (childrenLength.value > 0 && props.type === 'default') {
        const firstEle = cloneVNode(carouselItemList[0], {
          key: -1
        });
        const lastEle = cloneVNode(carouselItemList[carouselItemList.length - 1], {
          key: childrenLength.value
        });
        carouselItemList.unshift(lastEle);
        carouselItemList.push(firstEle);
      }
      return carouselItemList
    }
    const carouselItemLength = carouselItems().length

    const resetDefaultCurrent = (index: number) => {
      if (props.type === 'default') {
        if (index >= childrenLength.value) {
          return 0
        } else if (index <= -1) {
          return childrenLength.value - 1
        } else {
          return index + 1
        }
      } else {
        return index
      }
    }
    onMounted(() => {
      innerCurrent.value = resetDefaultCurrent(props.defaultCurrent)
      wrapWidth.value = carouselRef.value.getBoundingClientRect().width
    })

    // 轮播图通用跳转函数
    const handleTo = (index: number, handle?: 'last' | 'next') => {
      ifAnimation.value = true
      innerCurrent.value = index
      if (handle === 'last') {
        if (index > 0) {
          emit('change', (index - 1))
        } else {
          emit('change', (childrenLength.value - 1))
        }
      } else {
        if (index <= childrenLength.value) {
          emit('change', (index - 1))
        } else {
          emit('change', (0))
        }
      }
    }

    const handleEnterContent = () => {
      props.stopOnHover && (ifHoverContent.value = true)
    }

    const handleLeaveContent = () => {
      props.stopOnHover && (ifHoverContent.value = false)
    }

    // 监听每次轮播结束
    let animationTimer = 0; // 计时器指针
    watch(
      () => ifAnimation.value,
      () => {
        if (ifAnimation.value) {
          if (animationTimer) {
            clearTimeout(animationTimer);
          }
          animationTimer = setTimeout(() => {
            ifAnimation.value = false
            animationTimer = 0;
            if (props.type !== 'card') {
              if (innerCurrent.value + 1 >= carouselItemLength) {
                innerCurrent.value = 1
              }
              if (innerCurrent.value <= 0) {
                innerCurrent.value = carouselItemLength - 2
              }
            }
          }, props.duration + 50) as unknown as number
        }
      },
    );

    // 自动轮播
    let loopTimer = 0; // 自动轮播指针
    const clearLoopTimer = () => {
      if (loopTimer) {
        clearTimeout(loopTimer);
        loopTimer = 0;
      }
    }
    const setLoopTimer = () => {
      if (!ifHoverContent.value && props.autoPlay && props.interval > 0) {
        clearLoopTimer()
        loopTimer = setTimeout(
          () => {
            handleTo(innerCurrent.value + 1);
          },
          // 当 index 为 0 时，表示刚从克隆的最后一项跳转过来，且经历了 duration + 50 的间隔时间，减去即可
          innerCurrent.value === 0 ? props.interval * 1000 - (props.duration + 50) : props.interval * 1000,
        ) as unknown as number;
      }
    }
    const propsToUpdateSetTimer = computed(() => {
      return [props.autoPlay, innerCurrent.value, props.duration, props.interval];
    });
    watch(
      () => propsToUpdateSetTimer.value,
      () => {
        setLoopTimer();
      },
    );
    onUnmounted(() => {
      clearLoopTimer()
    })

    const handleClickArrow = (handle: 'last' | 'next') => {
      if (ifAnimation.value) {
        return false;
      } else {
        if (handle === 'last') {
          if (innerCurrent.value - 1 < 0) {
            return handleTo(childrenLength.value - 1, 'last');
          } else {
            return handleTo(innerCurrent.value - 1, 'last');
          }
        }
        if (handle === 'next') {
          if (props.type === 'card') {
            return handleTo(innerCurrent.value + 1 >= carouselItemLength ? 0 : innerCurrent.value + 1, 'next');
          } else {
            return handleTo(innerCurrent.value + 1, 'next');
          }
        }
      }
    }

    // Item 包裹层样式
    const getWrapperStyle = () => {
      if (props.type === 'card') {
        // 卡片样式轮播
        // return {
        //   height: offsetHeight,
        // };
      } else {
        // 默认样式轮播
        if (props.direction === 'vertical') {
          return {
            transform: `translate3d(0, -${innerCurrent.value * 100}%, 0px)`,
            transition: ifAnimation.value ? `transform ${props.duration / 1000}s ease` : '',
          };
        } else {
          return {
            transform: `translate3d(-${innerCurrent.value * 100}%, 0px, 0px)`,
            transition: ifAnimation.value ? `transform ${props.duration / 1000}s ease` : '',
          };
        }
      }
    };

    return () => {
      return (
        <div
          class={[
            'i-carousel',
            props.direction === 'vertical' && 'i-carousel__vertical',
            props.type === 'card' && 'i-carousel__card',
          ]}
          style={{ width: turnValue(props.width), height: turnValue(props.height) }}
          ref={carouselRef}
        >
          <div
            class="i-carousel__content"
            onMouseenter={handleEnterContent}
            onMouseleave={handleLeaveContent}
          >
            <ul
              class='i-carousel__wrapper'
              style={getWrapperStyle()}
            >
              {carouselItems()}
            </ul>
          </div>
          <CarouselNavigation
            itemNum={childrenLength.value}
            current={props.type === 'default' ? innerCurrent.value : innerCurrent.value + 1}
            onEnter={(current: number) => handleTo(props.type === 'default' ? current + 1 : current)}
          />
          <div
            class="i-carousel__arrow-last"
            onClick={() => handleClickArrow('last')}
          >
            <Icon color="#fff" name="ArrowLeft" />
          </div>
          <div
            class="i-carousel__arrow-next"
            onClick={() => handleClickArrow('next')}
          >
            <Icon color="#fff" name="ArrowRight" />
          </div>
        </div>
      );
    };
  },
});
