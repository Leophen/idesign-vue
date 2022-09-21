import { Icon } from '../index';
import { render } from '../../common'

describe('Icon 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Icon name="ModeLight" />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('size', () => {
    const wrapper = render(<Icon name="TipCheck" size={16} />);
    expect(wrapper.element.getAttribute('style')).toMatch('font-size: 16px;');
  })

  it('color', () => {
    const wrapper = render(<Icon name="TipClose" color="rgb(94, 98, 234)" />);
    expect(wrapper.element.getAttribute('style')).toMatch('color: rgb(94, 98, 234)');
  })
});

