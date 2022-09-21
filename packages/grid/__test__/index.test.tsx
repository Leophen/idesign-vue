import { Grid, GridItem } from '../index';
import { render } from '../../common'

describe('Grid 组件测试', () => {
  it('create', () => {
    const wrapper = render(
      <Grid>
        <GridItem span={8}>
          <div>GridItem1</div>
        </GridItem>
        <GridItem span={8}>
          <div>GridItem2</div>
        </GridItem>
        <GridItem span={8}>
          <div>GridItem3</div>
        </GridItem>
      </Grid>
    );
    expect(wrapper.element).toMatchSnapshot();
  });
});

