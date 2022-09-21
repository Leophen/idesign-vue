import { vi } from 'vitest';
import { Checkbox, CheckboxGroup } from '../index';
import { render } from '../../common'

describe('Checkbox 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Checkbox />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('checked & children', () => {
    const wrapper = render(<Checkbox modelValue={true}>广州</Checkbox>)
    expect(wrapper.classes()).toContain('i-checkbox-is-checked');
    expect(wrapper.find('.i-checkbox__label').text()).toBe('广州');
  });

  it('defaultChecked', () => {
    const wrapper = render(<Checkbox defaultChecked={true} />)
    expect(wrapper.classes()).toContain('i-checkbox-is-checked');
  });

  it('disabled', () => {
    const fn = vi.fn();
    const wrapper = render(<Checkbox disabled={true} onChange={fn} />)
    expect(wrapper.classes()).toContain('i-checkbox-is-disabled');
    wrapper.find('.i-checkbox__former').trigger('change');
    expect(fn).toBeCalledTimes(0);
  });

  it('size', () => {
    const wrapper = render(<Checkbox size="small" />)
    expect(wrapper.classes()).toContain('i-checkbox--size-small');
  });
});

describe('CheckboxGroup 组件测试', () => {
  it('selected', () => {
    const wrapper = render(
      <CheckboxGroup modelValue={['sz']}>
        <Checkbox value="gz">广州</Checkbox>
        <Checkbox value="sz" data-testid='sz-item'>深圳</Checkbox>
      </CheckboxGroup>,
    );
    expect(wrapper.find('[data-testid="sz-item"]').classes()).toContain('i-checkbox-is-checked');
  });

  it('defaultSelected', () => {
    const wrapper = render(
      <CheckboxGroup defaultChecked={['gz']}>
        <Checkbox value="gz" data-testid='gz-item'>广州</Checkbox>
        <Checkbox value="sz">深圳</Checkbox>
      </CheckboxGroup>,
    );
    expect(wrapper.find('[data-testid="gz-item"]').classes()).toContain('i-checkbox-is-checked');
  });

  it('disabled', () => {
    const fn = vi.fn();
    const wrapper = render(
      <CheckboxGroup disabled>
        <Checkbox value="gz" data-testid='gz-item'>广州</Checkbox>
        <Checkbox value="sz">深圳</Checkbox>
      </CheckboxGroup>,
    );
    expect(wrapper.find('[data-testid="gz-item"]').classes()).toContain('i-checkbox-is-disabled');
    wrapper.find('[data-testid="gz-item"]').trigger('change');
    expect(fn).toBeCalledTimes(0);
  });

  it('size', () => {
    const wrapper = render(
      <CheckboxGroup size="small">
        <Checkbox value="gz" data-testid='gz-item'>广州</Checkbox>
        <Checkbox value="sz">深圳</Checkbox>
      </CheckboxGroup>,
    );
    expect(wrapper.find('[data-testid="gz-item"]').classes()).toContain('i-checkbox--size-small');
  });
});

