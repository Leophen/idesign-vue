import { TimePicker } from '../index';
import { render } from '../../__test__/utils'

describe('TimePicker 组件测试', () => {
  it('create', () => {
    const wrapper = render(<TimePicker modelValue='12:34:56' />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('create', () => {
    const wrapper = render(<TimePicker defaultValue='12:34:56' />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('disabled', () => {
    const wrapper = render(<TimePicker disabled />);
    expect(wrapper.find('.i-input').classes()).toContain('i-input-is-disabled');
  });
});

