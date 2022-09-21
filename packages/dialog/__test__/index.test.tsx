import { Dialog } from '../index';
import { render } from '../../common'

describe('Dialog 组件测试', () => {
  it('create', () => {
    const wrapper = render(
      <Dialog header="对话框标题" visible={true}>
        <span>对话框内容</span>
      </Dialog>
    );
    expect(wrapper.element).toMatchSnapshot();
  });
});

