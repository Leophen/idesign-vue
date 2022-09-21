import { Badge } from '../index';
import { render } from '../../common'

describe('Badge 组件测试', () => {
  function renderSup(badge) {
    const wrapper = render(badge);
    return wrapper.find('.i-badge__content');
  }

  it('count', () => {
    expect(renderSup(<Badge />).text()).toBe('0');
    expect(renderSup(<Badge count='new' />).text()).toBe('new');
  });

  it('max count', () => {
    expect(renderSup(<Badge count={100} />).text()).toBe('99+');
    expect(renderSup(<Badge count={10} maxCount={9} />).text()).toBe('9+');
  });

  it('color', () => {
    const wrapper = render(<Badge color="red" />);
    expect(wrapper.element).toMatchSnapshot();
  });

  it('dot', () => {
    expect(renderSup(<Badge dot />).classes()).toContain('i-badge--dot');
  })

  it('size', () => {
    expect(renderSup(<Badge size="small" />).classes()).toContain('i-badge__size-small');
  })

  it('shape', () => {
    expect(renderSup(<Badge shape="round" />).classes()).toContain('i-badge--round');
  })

  it('offset', () => {
    expect(renderSup(<Badge offset={[10, 10]} />).attributes('style')).toMatch('right: 10px; margin-top: 10px');
  })
});

