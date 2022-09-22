import { vi } from 'vitest';
import { Tag } from '../index';
import { render } from '../../common'

describe('Tag 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Tag>标签</Tag>);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('type', () => {
    const wrapper = render(<Tag type="success">标签</Tag>);
    expect(wrapper.classes()).toContain('i-tag--type-success');
  });

  it('theme', () => {
    const wrapper = render(<Tag theme="dark">标签</Tag>);
    expect(wrapper.classes()).toContain('i-tag--theme-dark');
  });

  it('icon', () => {
    const wrapper = render(<Tag icon="TagPrice">标签</Tag>);
    expect(wrapper.find('.icon-TagPrice').exists()).toBe(true);
  });

  it('onAdd', () => {
    const clickFn = vi.fn();
    const wrapper = render(<Tag addable onAdd={clickFn}>标签</Tag>);
    expect(wrapper.find('.i-icon').classes()).toContain('icon-ThePlus');
    wrapper.find('.i-tag').trigger('click');
    expect(clickFn).toHaveBeenCalled();
  });

  it('onClose', () => {
    const clickFn = vi.fn();
    const wrapper = render(<Tag closeable onClose={clickFn}>标签</Tag>);
    expect(wrapper.find('.i-tag--close-btn').classes()).toContain('i-tag--close-btn');
    wrapper.find('.i-tag--close-btn').trigger('click');
    expect(clickFn).toHaveBeenCalled();
  });

  it('size', () => {
    const wrapper = render(<Tag size="small">标签</Tag>);
    expect(wrapper.classes()).toContain('i-tag--size-small');
  });

  it('maxWidth', () => {
    const wrapper = render(<Tag maxWidth={100}>标签</Tag>);
    expect(wrapper.element.getAttribute('style')).toMatch('max-width: 100px;');
  });
});

