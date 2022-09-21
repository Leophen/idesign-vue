import { Loading } from '../index';
import { render } from '../../common'

describe('Loading 组件测试', () => {
  it('create', () => {
    const wrapper = render(<Loading />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('info', () => {
    const wrapper = render(<Loading>加载中</Loading>);
    expect(wrapper.find('.i-loading-info').text()).toBe('加载中');
  })

  it('icon', () => {
    const wrapper = render(<Loading icon="RefreshRight" />);
    expect(wrapper.find('.icon-RefreshRight').exists()).toBe(true);
  })

  it('size', () => {
    const wrapper = render(<Loading size={16} />);
    expect(wrapper.find('.i-icon').attributes('style')).toMatch('font-size: 16px;');
  })

  it('color', () => {
    const wrapper = render(<Loading color='rgb(79, 115, 217)' />);
    expect(wrapper.find('.i-icon').attributes('style')).toMatch('color: rgb(79, 115, 217);');
  })

  it('spinner', () => {
    const wrapper = render(
      <Loading>
        {{
          spinner: () => '🌞',
        }}
      </Loading>
    );
    expect(wrapper.find('.i-loading-spinner').text()).toBe('🌞');
  })
});

