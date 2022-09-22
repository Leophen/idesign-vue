import { Progress } from '../index';
import { render } from '../../common'

describe('Progress 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Progress percentage={60} />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('label', () => {
    const wrapper = render(
      <Progress
        v-slots={{
          label: () => "😄"
        }}
      />
    );
    expect(wrapper.find('.i-progress__info').text()).toBe('😄');
  });

  it('hide label', () => {
    const wrapper = render(<Progress labelTxt={false} />);
    expect(wrapper.find('.i-progress__info').exists()).toBe(false);
  });

  it('innerLabel', () => {
    const wrapper = render(<Progress innerLabel />);
    expect(wrapper.find('.i-progress-bar').classes()).toContain('i-progress-bar__has-label');
  });

  it('color backColor', () => {
    const wrapper = render(<Progress color="blue" backColor="red" />);
    expect(wrapper.find('.i-progress-bar').attributes('style')).toMatch('background: red');
    expect(wrapper.find('.i-progress-bar__inner').attributes('style')).toMatch('background: blue');
  });

  it('width', () => {
    const wrapper = render(<Progress width={300} />);
    expect(wrapper.find('.i-progress-bar').attributes('style')).toMatch('width: 300px');
  });

  it('strokeWidth', () => {
    const wrapper = render(<Progress strokeWidth={30} />);
    expect(wrapper.find('.i-progress-bar').attributes('style')).toMatch('height: 30px');
  });

  it('circle', () => {
    const wrapper = render(<Progress type="circle" percentage={60} width={100} strokeWidth={20} />);
    expect(wrapper.element).toMatchSnapshot();
  });
});

