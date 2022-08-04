import { defineComponent } from 'vue';
import './index.scss';

export default defineComponent({
  name: 'SelectItem',
  setup(props, { slots }) {
    return () => {
      const children = slots.default?.();
      return children
    };
  },
});
