import { Upload } from '../index';
import { render } from '../../common'

describe('Upload 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Upload />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('block', () => {
    const wrapper = render(<Upload theme="block" />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('drag', () => {
    const wrapper = render(<Upload theme="drag" />);
    expect(wrapper.element).toMatchSnapshot();
  });
});

