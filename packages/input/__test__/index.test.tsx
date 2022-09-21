import { vi } from 'vitest';
import { Input } from '../index';
import { render } from '../../common'

describe('Input 组件测试', () => {
  const renderInput = (input) => {
    const wrapper = render(input);
    return wrapper.find('.i-input__inner')
  }

  it('create', () => {
    const wrapper = render(<Input />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('init', () => {
    const changeFn = vi.fn();
    const wrapper = render(<Input placeholder='请输入内容' modelValue='iDesign' onInput={changeFn} />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('defaultValue', () => {
    const wrapper = render(<Input defaultValue='iDesign' />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('disabled', () => {
    const focusFn = vi.fn();
    const wrapper = render(<Input disabled onFocus={focusFn} />);
    const input = wrapper.find('.i-input')
    expect(input.classes()).toContain('i-input-is-disabled');
    input.trigger('click');
    expect(focusFn).toBeCalledTimes(0);
  });

  it('readonly', () => {
    const wrapper = render(<Input readonly />);
    expect(wrapper.find('.i-input').classes()).toContain('i-input-is-readonly');
  });

  it('size', () => {
    const wrapper = render(<Input size="small" />);
    expect(wrapper.find('.i-input').classes()).toContain('i-input--size-small');
  })

  it('maxLength', () => {
    const wrapper = render(<Input maxLength={15} />);
    expect(wrapper.find('.i-input--limit').exists()).toBe(true);
  })

  it('password', () => {
    const wrapper = render(<Input type="password" />);
    expect(wrapper.element).toMatchSnapshot();
  })

  it('number', () => {
    const wrapper = render(<Input type="number" />);
    expect(wrapper.element).toMatchSnapshot();
  })

  it('clearable', () => {
    const wrapper = render(<Input clearable />);
    expect(wrapper.element).toMatchSnapshot();
  })

  it('prefixIcon', () => {
    const wrapper = render(<Input prefixIcon="Search" />);
    expect(wrapper.find('.i-icon').classes()).toContain('i-input-prefix-icon');
  })

  it('suffixIcon', () => {
    const wrapper = render(<Input suffixIcon="Search" />);
    expect(wrapper.find('.i-icon').classes()).toContain('i-input-suffix-icon');
  })
});

