import { Divider } from '../index';
import { render } from '../../common'

describe('Divider 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Divider />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('default', () => {
    const wrapper = render(<Divider />);
    expect(wrapper.classes()).toContain('i-divider');
  });

  it('dashed', () => {
    const wrapper = render(<Divider dashed />);
    expect(wrapper.classes()).toContain('i-divider--dashed');
  });

  it('align', () => {
    const wrapper = render(<Divider align="left">iDesign</Divider>);
    expect(wrapper.classes()).toContain('i-divider--with-text-left');
    expect(wrapper.find('.i-divider--text').text()).toBe('iDesign');
  });
});

