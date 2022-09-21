import { vi } from 'vitest';
import { Dropdown } from '../index';
import { render } from '../../common'

const options = [
  {
    content: '操作一',
    value: 1
  },
  {
    content: '操作二',
    value: 2
  },
  {
    content: '操作三',
    value: 3
  }
]

describe('Dropdown 组件测试', () => {
  it('create', () => {
    const wrapper = render(
      <Dropdown options={options}>
        <button>更多</button>
      </Dropdown>
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it('onClick', () => {
    const clickFn = vi.fn();
    const wrapper = render(
      <Dropdown options={options} onClick={clickFn}>
        <button>更多</button>
      </Dropdown>
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it('onTrigger', () => {
    const triggerFn = vi.fn();
    const wrapper = render(
      <Dropdown options={options} onTrigger={triggerFn}>
        <button>更多</button>
      </Dropdown>
    );
    expect(wrapper.element).toMatchSnapshot();
  });
});
