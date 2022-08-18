import './index.scss';
import { Icon } from '../icon';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'StepsItem',
  props: {
    /**
     * index 值
     * @default 0
     */
    index: {
      type: Number,
      default: 0
    },
    /**
     * 进行到哪一步
     * @default 0
     */
    current: {
      type: Number,
      default: 0
    }
  },
  setup(props, { slots, attrs }) {
    return () => {
      const title = slots.title?.();
      const description = slots.description?.();
      return (
        <div
          class={[
            'i-steps-item',
            props.current > props.index + 1 && 'i-steps-item__finish',
            props.current === props.index + 1 && 'i-steps-item__current'
          ]}
          {...attrs}
        >
          <div class="i-steps-item__content">
            <header class="i-steps-item__title">
              {title}
              <div class="i-steps-item__icon">
                {props.current > props.index + 1 ? (
                  <Icon name="Check" size={13} />
                ) : (
                  <span>{props.index + 1}</span>
                )}
              </div>
            </header>
            <article class="i-steps-item__description">
              {description}
            </article>
          </div>
        </div>
      );
    };
  },
});
