import { vi } from 'vitest';
import { Rate } from '../index';
import { render } from '../../common'

describe('Rate 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Rate />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('value', () => {
    const wrapper = render(<Rate modelValue={3} />);
    expect(wrapper.findAll('.i-rate-star')[2].find('.i-icon').attributes('style')).toMatch('color: rgb(245, 219, 77)');
    expect(wrapper.findAll('.i-rate-star')[3].find('.i-icon').attributes('style')).not.toMatch('color: rgb(245, 219, 77)');
  });

  it('defaultValue', () => {
    const wrapper = render(<Rate defaultValue={3} />);
    expect(wrapper.findAll('.i-rate-star')[2].find('.i-icon').attributes('style')).toMatch('color: rgb(245, 219, 77)');
    expect(wrapper.findAll('.i-rate-star')[3].find('.i-icon').attributes('style')).not.toMatch('color: rgb(245, 219, 77)');
  });

  it('onChange', () => {
    const changeFn = vi.fn();
    const wrapper = render(<Rate onChange={changeFn} />);
    wrapper.findAll('.i-rate-star')[0].trigger('mousedown');
    expect(changeFn).toHaveBeenCalled();
  });

  it('readonly', () => {
    const changeFn = vi.fn();
    const wrapper = render(<Rate readonly onChange={changeFn} />);
    expect(wrapper.classes()).toContain('i-rate__readonly');
    wrapper.findAll('.i-rate-star')[0].trigger('mousedown');
    expect(changeFn).toBeCalledTimes(0);
  });

  it('allowHalf', () => {
    const wrapper = render(<Rate allowHalf />);
    expect(wrapper.find('.i-rate-star__first').exists()).toBe(true);
  });

  it('count', () => {
    const wrapper = render(<Rate count={10} />);
    expect(wrapper.findAll('.i-rate-star').length).toBe(10);
  });

  it('activeColor voidColor', () => {
    const wrapper = render(<Rate defaultValue={3} activeColor="blue" voidColor="red" />);
    expect(wrapper.findAll('.i-rate-star')[2].find('.i-icon').attributes('style')).toMatch('color: blue');
    expect(wrapper.findAll('.i-rate-star')[3].find('.i-icon').attributes('style')).toMatch('color: red');
  });

  it('activeIcon voidIcon', () => {
    const wrapper = render(<Rate defaultValue={3} activeIcon="BellFill" voidIcon="Bell" />);
    expect(wrapper.find('.i-icon').classes()).toContain('icon-BellFill');
  });
});

