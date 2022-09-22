import { Message } from '../index';
import { render } from '../../common'

describe('Message 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Message>消息提示</Message>);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('type', () => {
    const wrapper = render(<Message type="success">成功提示</Message>);
    expect(wrapper.find('.icon-TipCheckFill').exists()).toBe(true);
  });
});



