import { DatePicker } from '../index';
import { render } from '../../common'

describe('DatePicker 组件测试', () => {
  it('value', () => {
    const wrapper = render(<DatePicker modelValue='2022-05-20' />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('defaultValue', () => {
    const wrapper = render(<DatePicker defaultValue='2022-05-20' />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('disabled', () => {
    const wrapper = render(<DatePicker disabled />);
    expect(wrapper.find('.i-input').classes()).toContain('i-input-is-disabled');
  });

  it('type', () => {
    const wrapper = render(<DatePicker type="range" modelValue={['2022-05-20', '2022-11-11']} />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('rangeSeparator', () => {
    const wrapper = render(<DatePicker type="range" modelValue={['2022-05-20', '2022-11-11']} rangeSeparator="/" />);
    expect(wrapper.element).toMatchSnapshot();
  });
});

