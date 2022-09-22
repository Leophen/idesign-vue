import { vi } from 'vitest';
import { Tabs, TabsItem } from '../index';
import { render } from '../../common'

describe('Tabs 组件测试', () => {
  it('create', () => {
    const wrapper = render(
      <Tabs>
        <TabsItem>选项卡1</TabsItem>
        <TabsItem>选项卡2</TabsItem>
        <TabsItem>选项卡3</TabsItem>
      </Tabs>
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it('active', () => {
    const wrapper = render(
      <Tabs modelValue={1}>
        <TabsItem>选项卡1</TabsItem>
        <TabsItem>选项卡2</TabsItem>
        <TabsItem>选项卡3</TabsItem>
      </Tabs>
    );
    expect(wrapper.findAll('.i-tabs-item')[1].classes()).toContain('i-tabs-item__active');
  });

  it('defaultActive', () => {
    const wrapper = render(
      <Tabs defaultActive={1}>
        <TabsItem>选项卡1</TabsItem>
        <TabsItem>选项卡2</TabsItem>
        <TabsItem>选项卡3</TabsItem>
      </Tabs>
    );
    expect(wrapper.findAll('.i-tabs-item')[1].classes()).toContain('i-tabs-item__active');
  });

  it('onChange', () => {
    const changeFn = vi.fn();
    const wrapper = render(
      <Tabs onChange={changeFn}>
        <TabsItem>选项卡1</TabsItem>
        <TabsItem>选项卡2</TabsItem>
        <TabsItem>选项卡3</TabsItem>
      </Tabs>
    );
    wrapper.findAll('.i-tabs-item')[1].trigger('click');
    expect(changeFn).toHaveBeenCalled();
  });

  it('theme', () => {
    const wrapper = render(
      <Tabs theme="card">
        <TabsItem>选项卡1</TabsItem>
        <TabsItem>选项卡2</TabsItem>
        <TabsItem>选项卡3</TabsItem>
      </Tabs>
    );
    expect(wrapper.find('.i-tabs-item__card').exists()).toBe(true);
  });

  it('disabled', () => {
    const changeFn = vi.fn();
    const wrapper = render(
      <Tabs disabled>
        <TabsItem>选项卡1</TabsItem>
        <TabsItem data-testid='test-item'>选项卡2</TabsItem>
        <TabsItem>选项卡3</TabsItem>
      </Tabs>
    );
    wrapper.findAll('.i-tabs-item')[1].trigger('click');
    expect(changeFn).not.toHaveBeenCalled();
  });
});

