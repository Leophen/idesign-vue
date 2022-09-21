import { Carousel, CarouselItem } from '../index';
import { render } from '../../common'

describe('Carousel 组件测试', () => {
  it('create', () => {
    const el = (
      <Carousel defaultCurrent={1}>
        <CarouselItem>
          item1
        </CarouselItem>
        <CarouselItem>
          item2
        </CarouselItem>
        <CarouselItem>
          item3
        </CarouselItem>
      </Carousel>
    );
    const wrapper = render(el);
    expect(wrapper.element).toMatchSnapshot();
  });
});

