import { vi } from 'vitest';
import { ColorPicker } from '../index';
import { render } from '../../common'

describe('ColorPicker 组件测试', () => {
  const renderColor = (comp) => {
    const wrapper = render(comp);
    return wrapper.find('.i-color')
  }

  it('create', () => {
    const wrapper = render(<ColorPicker />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('value', () => {
    expect(renderColor(<ColorPicker modelValue='rgb(92, 192, 131)' />).attributes('style')).toMatch('background: rgb(92, 192, 131);');
  });

  it('defaultValue', () => {
    expect(renderColor(<ColorPicker modelValue='rgb(92, 192, 131)' />).attributes('style')).toMatch('background: rgb(92, 192, 131)');
  });

  it('disabled', () => {
    const clickFn = vi.fn();
    const color = renderColor(<ColorPicker disabled onTrigger={clickFn} />)
    expect(color.classes()).toContain('i-color__disabled');
    color.trigger('click');
    expect(clickFn).toBeCalledTimes(0);
  });

  it('size', () => {
    expect(renderColor(<ColorPicker size="small" />).classes()).toContain('i-color--size-small');
  });
});

