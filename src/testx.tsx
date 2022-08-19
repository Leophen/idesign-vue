import { defineComponent, Teleport } from 'vue';

// 创建容器
let popupWrapper = document.querySelector('#i-popup-wrapper')
if (!popupWrapper) {
  popupWrapper = document.createElement('div')
  popupWrapper.className = 'i-popup-wrapper'
  popupWrapper.id = 'i-popup-wrapper'
  document.body.append(popupWrapper)
}

export default defineComponent({
  name: 'Button',
  setup() {
    return () => {
      return (
        <Teleport to="#i-popup-wrapper">
          <button>按钮</button>
        </Teleport>
      );
    };
  },
});