import { Alert } from '../index';
import { render } from '../../common'

describe('Alert 组件测试', () => {
  it('type', () => {
    const props = {
      message: 'Alert 内容',
    };
    const wrapper = render(<Alert {...props} type="info" />);
    expect(wrapper.element).toMatchSnapshot();

    const wrapper2 = render(<Alert {...props} type="success" />);
    expect(wrapper2.element).toMatchSnapshot();

    const wrapper3 = render(<Alert {...props} type="warning" />);
    expect(wrapper3.element).toMatchSnapshot();

    const wrapper4 = render(<Alert {...props} type="error" />);
    expect(wrapper4.element).toMatchSnapshot();
  });

  it('closable', () => {
    const wrapper = render(<Alert message="这是一条消息提示" closable />);
    wrapper.find('.i-alert--close-btn').trigger('click');
    expect(wrapper.find('i-alert').exists()).toBe(false);
  })

  it('operation', () => {
    const operation = <span data-test="test">相关操作</span>;
    const wrapper = render(
      <Alert message="这是一条消息提示">
        {{
          default: () => operation,
        }}
      </Alert>
    );
    expect(wrapper.find('[data-test="test"]').text()).toBe('相关操作');
  })

  it('title', () => {
    const wrapper = render(<Alert title="消息提示标题" message="这是一条消息提示" />);
    expect(wrapper.find('.i-alert--title').text()).toBe('消息提示标题');
  })
});



