import { Empty } from '../index';
import { render } from '../../common'

describe('Empty 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Empty>暂无数据</Empty>);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('size', () => {
    const wrapper = render(<Empty size="small">暂无数据</Empty>);
    expect(wrapper.classes()).toContain('i-empty--size-small');
  })
});

