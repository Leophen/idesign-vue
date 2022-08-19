import { defineComponent, PropType, VNode } from 'vue';
import StepsItem from './steps-item';
import './index.scss';
import { useChildComponentSlots } from '../common'

export default defineComponent({
  name: 'Steps',
  props: {
    /**
     * 进行到哪一步
     * @default 0
     */
    current: {
      type: Number,
      default: 0
    },
    /**
     * 步骤条方向
     * @default horizontal
     */
    layout: {
      type: String as PropType<'horizontal' | 'vertical'>,
      default: 'horizontal'
    },
    /**
     * 步骤条是否倒序
     * @default false
     */
    reverse: {
      type: Boolean,
      default: false
    },
    /**
     * 是否为无序的步骤条
     * @default false
     */
    dot: {
      type: Boolean,
      default: false
    },
  },
  setup(props, { attrs }) {
    const stepsItems = () => {
      const getChildComponentByName = useChildComponentSlots();
      const childrenList: VNode[] = getChildComponentByName('StepsItem')
      const stepItemList = childrenList.map((item, index) => {
        const stepIndex = props.reverse ? childrenList.length - index - 1 : index;
        return (
          <StepsItem current={props.current} index={stepIndex}>
            {{
              // @ts-ignore
              title: () => item.children?.title(),
              // @ts-ignore
              description: () => item.children?.description()
            }}
          </StepsItem>
        );
      });
      return stepItemList
    }

    return () => {
      return (
        <div
          class={[
            'i-steps',
            props.layout && `i-steps__layout-${props.layout}`,
            props.dot && 'i-steps__dot'
          ]}
          {...attrs}
        >
          {stepsItems()}
        </div>
      );
    };
  },
});
