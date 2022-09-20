import { vi } from 'vitest';
import { Button } from '../index';
import { render } from '../../common'

describe('Button 组件测试', () => {
  const renderBtnHasClass = (btn, className) => {
    const wrapper = render(btn);
    expect(wrapper.classes()).toContain(className);
  }

  it('children', () => {
    const wrapper = render(<Button>foo</Button>);
    expect(wrapper.find('.i-button').text()).toBe('foo');
  });

  it('type', () => {
    renderBtnHasClass(<Button type="success" />, 'i-button--type-success')
  });

  it('variant', () => {
    renderBtnHasClass(<Button variant="outline" />, 'i-button--variant-outline')
  });

  it('active', () => {
    renderBtnHasClass(<Button active />, 'i-button-active')
  });

  it('disabled', () => {
    const clickFn = vi.fn();
    const btn = <Button disabled onClick={clickFn} />
    renderBtnHasClass(btn, 'i-button-disabled')
    const wrapper = render(btn)
    wrapper.findComponent(Button).trigger('click');
    expect(clickFn).toBeCalledTimes(0);
  });

  it('size', () => {
    renderBtnHasClass(<Button size="small" />, 'i-button--size-small')
  });

  it('shape', () => {
    renderBtnHasClass(<Button shape="circle" />, 'i-button--shape-circle')
  });

  it('icon', () => {
    const wrapper = render(<Button icon="ThePlus" />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('onClick', () => {
    const clickFn = vi.fn();
    const wrapper = render(<Button onClick={clickFn} />)
    wrapper.findComponent(Button).trigger('click');
    expect(clickFn).toHaveBeenCalled();
  });
});

