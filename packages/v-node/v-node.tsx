import { defineComponent, PropType, VNodeTypes } from 'vue';

export default defineComponent({
  name: 'VNode',
  props: {
    /**
     * 任意节点内容，类似 ReactNode
     */
    content: {
      type: [String, Symbol, Object] as PropType<string | symbol | VNodeTypes>
    },
  },
  setup(props) {
    const render = () => {
      return (
        <>
          {props.content}
        </>
      );
    };

    return {
      render
    }
  },
  render() {
    return this.render();
  },
});
