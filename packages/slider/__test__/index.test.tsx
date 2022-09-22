import { Slider } from '../index';
import { render } from '../../common'

describe('Slider 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Slider />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('value', () => {
    const wrapper = render(<Slider modelValue={90} />);
    expect(wrapper.find('.i-slider__button').attributes('style')).toMatch('left: calc(90% - 0px)');
  });

  it('defaultValue', () => {
    const wrapper = render(<Slider defaultValue={90} />);
    expect(wrapper.find('.i-slider__button').attributes('style')).toMatch('left: calc(90% - 0px)');
  });

  it('disabled', () => {
    const wrapper = render(<Slider disabled />);
    expect(wrapper.classes()).toContain('i-slider__disabled');
  });

  it('range', () => {
    const wrapper = render(<Slider range defaultValue={[30, 90]} />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('vertical', () => {
    const wrapper = render(<Slider layout="vertical" />);
    expect(wrapper.element).toMatchSnapshot();
  });
});

