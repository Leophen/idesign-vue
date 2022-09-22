import { vi } from 'vitest';
import { Radio, RadioGroup } from '../index';
import { render } from '../../common'

describe('Radio 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Radio />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('checked & children', () => {
    const wrapper = render(<Radio modelValue={true}>广州</Radio>);
    expect(wrapper.find('.i-radio').classes()).toContain('i-radio-is-checked');
    expect(wrapper.find('.i-radio__label').text()).toBe('广州');
  });

  it('defaultChecked', () => {
    const wrapper = render(<Radio defaultChecked={true}>广州</Radio>);
    expect(wrapper.find('.i-radio').classes()).toContain('i-radio-is-checked');
  });

  it('onChange', () => {
    const changeFn = vi.fn();
    const wrapper = render(<Radio onChange={changeFn} />)
    wrapper.find('.i-radio__former').trigger('change');
    expect(changeFn).toBeCalledTimes(1);
  });

  it('disabled', () => {
    const fn = vi.fn();
    const wrapper = render(<Radio disabled={true} onChange={fn} />)
    expect(wrapper.find('.i-radio').classes()).toContain('i-radio-is-disabled');
    wrapper.find('.i-radio__former').trigger('change');
    expect(fn).toBeCalledTimes(0);
  });

  it('type', () => {
    const wrapper = render(<Radio type="radio-button" />);
    expect(wrapper.classes()).toContain('i-radio-button');
  });

  it('size', () => {
    const wrapper = render(<Radio type="radio-button" size="small" />);
    expect(wrapper.classes()).toContain('i-radio-button--size-small');
  });
});

describe('RadioGroup 组件测试', () => {
  it('selected', () => {
    const wrapper = render(
      <RadioGroup modelValue='gz'>
        <Radio value="gz">广州</Radio>
      </RadioGroup>,
    );
    expect(wrapper.find('.i-radio').classes()).toContain('i-radio-is-checked');
  });

  it('defaultSelected', () => {
    const wrapper = render(
      <RadioGroup defaultSelected='sz'>
        <Radio value="gz">广州</Radio>
      </RadioGroup>,
    );
    expect(wrapper.find('.i-radio').classes()).toContain('i-radio-is-checked');
  });

  it('onChange', () => {
    const changeFn = vi.fn();
    const wrapper = render(
      <RadioGroup onChange={changeFn}>
        <Radio value="gz">广州</Radio>
      </RadioGroup>,
    );
    wrapper.find('.i-radio__former').trigger('change');
    expect(changeFn).toHaveBeenCalled();
  });

  it('disabled', () => {
    const changeFn = vi.fn();
    const wrapper = render(
      <RadioGroup disabled onChange={changeFn}>
        <Radio value="gz">广州</Radio>
      </RadioGroup>,
    );
    expect(wrapper.find('.i-radio').classes()).toContain('i-radio-is-disabled');
    wrapper.findComponent(Radio).trigger('click');
    expect(changeFn).toBeCalledTimes(0);
  });

  it('size', () => {
    const wrapper = render(
      <RadioGroup type="radio-button" size="small">
        <Radio value="gz">广州</Radio>
      </RadioGroup>,
    );
    expect(wrapper.find('.i-radio-button').classes()).toContain('i-radio-button--size-small');
  });
});

