import { Steps, StepsItem } from '../index';
import { render } from '../../common'

describe('Steps 组件测试', () => {
  it('create', () => {
    const wrapper = render(
      <Steps>
        <StepsItem
          v-slots={{
            title: () => '步骤1',
            description: () => '提示文字1'
          }}
        />
        <StepsItem
          v-slots={{
            title: () => '步骤2',
            description: () => '提示文字2'
          }}
        />
        <StepsItem
          v-slots={{
            title: () => '步骤3',
            description: () => '提示文字3'
          }}
        />
      </Steps>
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it('current', () => {
    const wrapper = render(
      <Steps current={2}>
        <StepsItem
          v-slots={{
            title: () => '步骤1',
            description: () => '提示文字1'
          }}
        />
        <StepsItem
          v-slots={{
            title: () => '步骤2',
            description: () => '提示文字2'
          }}
        />
        <StepsItem
          v-slots={{
            title: () => '步骤3',
            description: () => '提示文字3'
          }}
        />
      </Steps>
    );
    expect(wrapper.findAll('.i-steps-item')[0].classes()).toContain('i-steps-item__finish');
    expect(wrapper.findAll('.i-steps-item')[1].classes()).toContain('i-steps-item__current');
  });

  it('dot', () => {
    const wrapper = render(
      <Steps dot>
        <StepsItem
          v-slots={{
            title: () => '步骤1',
            description: () => '提示文字1'
          }}
        />
        <StepsItem
          v-slots={{
            title: () => '步骤2',
            description: () => '提示文字2'
          }}
        />
        <StepsItem
          v-slots={{
            title: () => '步骤3',
            description: () => '提示文字3'
          }}
        />
      </Steps>
    );
    expect(wrapper.classes()).toContain('i-steps__dot');
  });

  it('layout', () => {
    const wrapper = render(
      <Steps layout="vertical">
        <StepsItem
          v-slots={{
            title: () => '步骤1',
            description: () => '提示文字1'
          }}
        />
        <StepsItem
          v-slots={{
            title: () => '步骤2',
            description: () => '提示文字2'
          }}
        />
        <StepsItem
          v-slots={{
            title: () => '步骤3',
            description: () => '提示文字3'
          }}
        />
      </Steps>
    );
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.classes()).toContain('i-steps__layout-vertical');
  });

  it('reverse', () => {
    const wrapper = render(
      <Steps reverse>
        <StepsItem
          v-slots={{
            title: () => '步骤1',
            description: () => '提示文字1'
          }}
        />
        <StepsItem
          v-slots={{
            title: () => '步骤2',
            description: () => '提示文字2'
          }}
        />
        <StepsItem
          v-slots={{
            title: () => '步骤3',
            description: () => '提示文字3'
          }}
        />
      </Steps>
    );
    expect(wrapper.element).toMatchSnapshot();
    expect(wrapper.findAll('.i-steps-item')[0].find('.i-steps-item__description').text()).toBe('提示文字3');
  });
});

