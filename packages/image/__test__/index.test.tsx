import { Image } from '../index';
import { render } from '../../common'

describe('Image 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Image src="https://picsum.photos/180/120" />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('width', () => {
    const wrapper = render(<Image width={260} src="https://picsum.photos/180/120" />);
    expect(wrapper.element.getAttribute('style')).toMatch('width: 260px');
  })
});

