import { Avatar } from '../index';
import { render } from '../../common'

const imageSrc = 'https://picsum.photos/180/120';

describe('Avatar 组件测试', () => {
  it('image src', () => {
    const wrapper = render(<Avatar image={imageSrc} />);
    const image = wrapper.find('.i-avatar__image');
    expect(image.attributes('src')).toBe(imageSrc);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('children', () => {
    const wrapper = render(<Avatar>L</Avatar>);
    expect(wrapper.find('.i-avatar').text()).toBe('L');
  });

  it('size', () => {
    const wrapper = render(<Avatar size={24}>L</Avatar>);
    expect(wrapper.element.getAttribute('style')).toContain('width: 24px');
  });

  it('shape', () => {
    const wrapper = render(<Avatar shape="round">L</Avatar>);
    expect(wrapper.classes()).toContain('i-avatar__shape-round');
  })

  it('color', () => {
    const wrapper = render(<Avatar color="rgb(50, 54, 164)">L</Avatar>);
    expect(wrapper.element.getAttribute('style')).toMatch('background: rgb(50, 54, 164);');
  });
});



