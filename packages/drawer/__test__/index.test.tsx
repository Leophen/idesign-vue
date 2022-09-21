import { Drawer } from '../index';
import { render } from '../../common'

describe('Drawer 组件测试', () => {
  it('create', () => {
    const wrapper = render(
      <Drawer header="抽屉标题" visible={true}>
        <span>抽屉内容</span>
      </Drawer>
    );
    expect(wrapper.element).toMatchSnapshot();
  });
});

