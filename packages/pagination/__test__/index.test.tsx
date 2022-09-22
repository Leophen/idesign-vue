import { Pagination } from '../index';
import { render } from '../../common'

describe('Pagination 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Pagination total={100} />);
    expect(wrapper.element).toMatchSnapshot();
  });
});

