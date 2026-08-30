import { mount } from '@vue/test-utils'
import { VNode } from 'vue'

/**
 * 模拟 @testing-library/react render 测试函数
 */
export const render = (comp: VNode) => {
  return mount({
    render() {
      return comp
    }
  })
}
