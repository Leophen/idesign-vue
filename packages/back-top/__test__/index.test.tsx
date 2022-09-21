import { BackTop } from '../index';
import { render } from '../../common'

describe('BackTop 组件测试', () => {
  it('create', () => {
    const wrapper = render(<BackTop />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('init', () => {
    const wrapper = render(<BackTop />);
    expect(wrapper.classes()).toContain('i-back-top');
  })
});

