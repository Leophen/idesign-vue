import { vi } from 'vitest';
import { Textarea } from '../index';
import { render } from '../../common'

describe('Textarea 组件测试', () => {
  const renderTextarea = (textarea) => {
    const wrapper = render(textarea);
    return wrapper.find('.i-textarea__inner')
  }

  it('create', () => {
    const wrapper = render(<Textarea />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('placeholder', () => {
    const wrapper = render(<Textarea placeholder='请输入内容' />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('value', () => {
    const wrapper = render(<Textarea modelValue='iDesign' />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('defaultValue', () => {
    const wrapper = render(<Textarea defaultValue='iDesign' />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('onChange', () => {
    const changeFn = vi.fn();
    renderTextarea(<Textarea onChange={changeFn} />).trigger('change');
    expect(changeFn).toHaveBeenCalled();
  });

  it('disabled', () => {
    const changeFn = vi.fn();
    renderTextarea(<Textarea onChange={changeFn} disabled />).trigger('change');
    expect(renderTextarea(<Textarea onChange={changeFn} disabled />).classes()).toContain('i-textarea__inner-is-disabled');
    expect(changeFn).toBeCalledTimes(0);
  });

  it('readonly', () => {
    expect(renderTextarea(<Textarea readonly />).classes()).toContain('i-textarea__inner-is-readonly');
  });

  it('maxLength', () => {
    const wrapper = render(<Textarea maxLength={15} />);
    expect(wrapper.find('.i-textarea--limit').exists()).toBe(true);
  })

  it('status', () => {
    expect(renderTextarea(<Textarea status="success" />).classes()).toContain('i-textarea__inner--status-success');
  });

  it('noResize', () => {
    expect(renderTextarea(<Textarea noResize />).attributes('style')).toMatch('resize: none');
  });
});

