import { Layout, LayoutAside, LayoutContent, LayoutFooter, LayoutHeader } from '../index';
import { render } from '../../common'

describe('Layout 组件测试', () => {
  it('create', () => {
    const wrapper = render(
      <Layout>
        <LayoutHeader>Header</LayoutHeader>
        <Layout>
          <LayoutAside>Aside</LayoutAside>
          <Layout>
            <LayoutContent>Content</LayoutContent>
            <LayoutFooter>Copyright @ 2019-2021 iDesign. All Rights Reserved</LayoutFooter>
          </Layout>
        </Layout>
      </Layout>
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it('width', () => {
    const wrapper = render(
      <Layout>
        <LayoutHeader>Header</LayoutHeader>
        <Layout>
          <LayoutAside width={100}>Aside</LayoutAside>
          <Layout>
            <LayoutContent>Content</LayoutContent>
            <LayoutFooter>Copyright @ 2019-2021 iDesign. All Rights Reserved</LayoutFooter>
          </Layout>
        </Layout>
      </Layout>
    );
    expect(wrapper.find('.i-layout--aside').attributes('style')).toMatch('width: 100px;');
  })
});

