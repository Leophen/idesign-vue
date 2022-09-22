import { vi } from 'vitest';
import { Popup } from '../index';
import { render } from '../../common'

describe('Popup 组件测试', () => {
  it('create', () => {
    const wrapper = render(
      <Popup content="提示内容">
        <button>悬浮提示</button>
      </Popup>
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it('trigger', () => {
    const clickFn = vi.fn();
    const wrapper = render(
      <Popup content="提示内容" trigger="click" onTrigger={clickFn}>
        <button data-testid='trigger'>点击提示</button>
      </Popup>
    );

    wrapper.find('[data-testid="trigger"]').trigger('click');
    expect(clickFn).toBeCalledTimes(1);
  });

  it('disabled', () => {
    const clickFn = vi.fn();
    const wrapper = render(
      <Popup content="提示内容" trigger="click" onTrigger={clickFn} disabled>
        <button data-testid='trigger'>点击提示</button>
      </Popup>
    );

    wrapper.find('[data-testid="trigger"]').trigger('click');
    expect(clickFn).toBeCalledTimes(0);
  });
});

