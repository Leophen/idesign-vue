import { Select,SelectItem } from '../index';
import { render } from '../../common'

describe('Select 组件测试', () => {
  it('create', () => {
    const wrapper = render(
      <Select>
        <SelectItem value="item1">选项一</SelectItem>
        <SelectItem value="item2">选项二</SelectItem>
        <SelectItem value="item3">选项三</SelectItem>
      </Select>
    );
    expect(wrapper.element).toMatchSnapshot();
  });

  it('size', () => {
    const wrapper = render(
      <Select size="small">
        <SelectItem value="item1">选项一</SelectItem>
        <SelectItem value="item2">选项二</SelectItem>
        <SelectItem value="item3">选项三</SelectItem>
      </Select>
    );
    expect(wrapper.find('.i-input').classes()).toContain('i-input--size-small');
  });

  it('disabled', () => {
    const wrapper = render(
      <Select disabled={true}>
        <SelectItem value="item1">选项一</SelectItem>
        <SelectItem value="item2">选项二</SelectItem>
        <SelectItem value="item3">选项三</SelectItem>
      </Select>
    );
    expect(wrapper.find('.i-input').classes()).toContain('i-input-is-disabled');
  });
});



