import { vi } from 'vitest';
import { Menu, MenuItem, MenuGroup } from '../index';
import { render } from '../../common'

describe('Menu 组件测试', () => {
  it('create', () => {
    const wrapper = render(
      <Menu>
        <MenuItem>菜单1</MenuItem>
        <MenuItem>菜单2</MenuItem>
        <MenuItem>菜单3</MenuItem>
      </Menu>
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it('active', () => {
    const wrapper = render(
      <Menu modelValue='1'>
        <MenuItem>菜单1</MenuItem>
        <MenuItem>菜单2</MenuItem>
        <MenuItem>菜单3</MenuItem>
      </Menu>
    );
    expect(wrapper.findAllComponents(MenuItem)[1].classes()).toContain('i-menu-item__active');
  });

  it('defaultActive', () => {
    const wrapper = render(
      <Menu defaultActive='1'>
        <MenuItem>菜单1</MenuItem>
        <MenuItem>菜单2</MenuItem>
        <MenuItem>菜单3</MenuItem>
      </Menu>
    );
    expect(wrapper.findAllComponents(MenuItem)[1].classes()).toContain('i-menu-item__active');
  });

  it('onChange', () => {
    const changeFn = vi.fn();
    const wrapper = render(
      <Menu onChange={changeFn}>
        <MenuItem>菜单1</MenuItem>
        <MenuItem>菜单2</MenuItem>
        <MenuItem>菜单3</MenuItem>
      </Menu>
    );
    wrapper.findAllComponents(MenuItem)[1].trigger('click');
    expect(changeFn).toHaveBeenCalled();
  });

  it('prefixContent suffixContent', () => {
    const prefix = <img src="https://picsum.photos/180/120" />
    const suffix = <div>个人中心</div>

    const wrapper = render(
      <Menu
        v-slots={{
          prefixContent: () => prefix,
          suffixContent: () => suffix,
        }}
      >
        <MenuItem>菜单1</MenuItem>
        <MenuItem>菜单2</MenuItem>
        <MenuItem>菜单3</MenuItem>
      </Menu>
    );
    expect(wrapper.find('.i-menu__logo').exists()).toBe(true);
    expect(wrapper.find('.i-menu__operations').exists()).toBe(true);
  });

  it('Menu Group', () => {
    const wrapper = render(
      <Menu>
        <MenuItem>菜单1</MenuItem>
        <MenuGroup title='菜单2'>
          <MenuItem>菜单2-1</MenuItem>
          <MenuGroup title='菜单2-2'>
            <MenuItem>菜单2-2-1</MenuItem>
            <MenuItem>菜单2-2-2</MenuItem>
            <MenuItem value='menu2-2-3'>菜单2-2-3</MenuItem>
          </MenuGroup>
          <MenuItem value='menu2-3'>菜单2-3</MenuItem>
        </MenuGroup>
        <MenuItem>菜单3</MenuItem>
      </Menu>
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it('Menu Group width & Direction', () => {
    const wrapper = render(
      <Menu width={200} direction="vertical">
        <MenuItem>菜单1</MenuItem>
        <MenuGroup title='菜单2'>
          <MenuItem>菜单2-1</MenuItem>
          <MenuGroup title='菜单2-2'>
            <MenuItem>菜单2-2-1</MenuItem>
            <MenuItem>菜单2-2-2</MenuItem>
            <MenuItem value='menu2-2-3'>菜单2-2-3</MenuItem>
          </MenuGroup>
          <MenuItem value='menu2-3'>菜单2-3</MenuItem>
        </MenuGroup>
        <MenuItem>菜单3</MenuItem>
      </Menu>
    );
    expect(wrapper.element).toMatchSnapshot();
  });
});

