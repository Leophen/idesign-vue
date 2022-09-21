import { Collapse, CollapseItem } from '../index';
import { render } from '../../common'

describe('Collapse 组件测试', () => {
  it('create', () => {
    const wrapper = render(
      <Collapse>
        <CollapseItem title="折叠标题1">
          折叠内容 1
        </CollapseItem>
        <CollapseItem title="折叠标题2">
          折叠内容 2
        </CollapseItem>
        <CollapseItem title="折叠标题3">
          折叠内容 3
        </CollapseItem>
      </Collapse>,
    );
    expect(wrapper.element).toMatchSnapshot();
  });
});

