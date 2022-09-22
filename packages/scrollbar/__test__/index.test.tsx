import { Scrollbar } from '../index';
import { render } from '../../common'

describe('Scrollbar 组件测试', () => {
  it('create', () => {
    const wrapper = render(
      <Scrollbar height={60}>
        {Array(24).fill('item').map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </Scrollbar>
    );
    expect(wrapper.element).toMatchSnapshot();
  });
});

