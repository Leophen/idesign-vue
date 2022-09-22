import { vi } from 'vitest';
import { Switch } from '../index';
import { render } from '../../common'

describe('Switch 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Switch />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('value', () => {
    const wrapper = render(<Switch modelValue={true} />);
    expect(wrapper.classes()).toContain('i-switch-is-checked');
  });

  it('defaultValue', () => {
    const wrapper = render(<Switch defaultValue={true} />);
    expect(wrapper.classes()).toContain('i-switch-is-checked');
  });

  it('onChange', () => {
    const changeFn = vi.fn();
    const wrapper = render(<Switch onChange={changeFn} />);
    wrapper.find('.i-switch').trigger('click');
    expect(changeFn).toHaveBeenCalled();
  });

  it('inactiveColor', () => {
    const wrapper = render(<Switch inactiveColor="blue" />);
    expect(wrapper.element.getAttribute('style')).toMatch('background-color: blue');
  });

  it('activeColor', () => {
    const wrapper = render(<Switch activeColor="red" modelValue={true} />);
    expect(wrapper.element.getAttribute('style')).toMatch('background-color: red');
  });

  it('size', () => {
    const wrapper = render(<Switch size="small" />);
    expect(wrapper.classes()).toContain('i-switch--size-small');
  });

  it('inactiveLabel', () => {
    const wrapper = render(
      <Switch
        v-slots={{
          inactiveLabel: () => '关'
        }}
      />
    );
    expect(wrapper.find('.i-switch__content').text()).toBe('关');
  });

  it('activeLabel', () => {
    const wrapper = render(
      <Switch
        modelValue={true}
        v-slots={{
          activeLabel: () => '开'
        }}
      />
    );
    expect(wrapper.find('.i-switch__content').text()).toBe('开');
  });

  it('disabled', () => {
    const wrapper = render(<Switch disabled />);
    expect(wrapper.classes()).toContain('i-switch-is-disabled');
  });
});

