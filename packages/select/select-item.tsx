import { defineComponent, PropType } from 'vue';
import './index.scss';

export default defineComponent({
  name: 'SelectItem',
  props: {
    value: {
      type: [String, Number] as PropType<string | number>,
    },
  },
  setup(props, { slots }) {
    return () => {
      const children = slots.default?.();
      return children;
    };
  },
});
