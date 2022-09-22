import { Notification } from '../index';
import { render } from '../../common'

describe('Notification 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Notification>消息提示</Notification>);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('type', () => {
    const wrapper = render(<Notification type="success">成功提示</Notification>);
    expect(wrapper.find('.i-icon').classes()).toContain('icon-TipCheckFill');
  });

  it('title', () => {
    const wrapper = render(
      <Notification
        v-slots={{
          title: () => '提示标题'
        }}
      >
        消息提示
      </Notification>
    );
    expect(wrapper.find('.i-notification__title').exists()).toBe(true);
  });
});



