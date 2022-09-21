import { Breadcrumb, BreadcrumbItem } from '../index';
import { render } from '../../common'

describe('Breadcrumb 组件测试', () => {
  const renderItem = (breadcrumb) => {
    const wrapper = render(breadcrumb);
    return wrapper.find('.i-breadcrumb__item')
  }

  it('create', () => {
    const wrapper = render(
      <Breadcrumb>
        <BreadcrumbItem>item1</BreadcrumbItem>
        <BreadcrumbItem>item2</BreadcrumbItem>
        <BreadcrumbItem>item3</BreadcrumbItem>
      </Breadcrumb>
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it('breadcrumbItem children', () => {
    const el = (
      <Breadcrumb>
        <BreadcrumbItem>item</BreadcrumbItem>
      </Breadcrumb>
    );
    expect(renderItem(el).text()).toBe('item');
  });

  it('breadcrumbItem disabled', () => {
    const el = (
      <Breadcrumb>
        <BreadcrumbItem disabled>item</BreadcrumbItem>
      </Breadcrumb>
    );
    expect(renderItem(el).classes()).toContain('i-breadcrumb-is-disabled');
  });

  it('max width', () => {
    const wrapper = render(
      <Breadcrumb maxItemWidth="120px">
        <BreadcrumbItem>item</BreadcrumbItem>
      </Breadcrumb>
    );
    expect(wrapper.find('.i-breadcrumb__inner').attributes('style')).toMatch('max-width: 120px;');
  });

  it('separator', () => {
    const wrapper = render(
      <Breadcrumb
        v-slots={{
          separator: () => <span>👉</span>,
        }}
      >
        <BreadcrumbItem>item</BreadcrumbItem>
      </Breadcrumb>
    );
    expect(wrapper.find('.i-breadcrumb__separator').html()).toMatch('<span>👉</span>');
  });
});

