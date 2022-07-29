import { App, Plugin } from 'vue'
import Carousel from './carousel'
import CarouselItem from './carousel-item'

export const CarouselPlugin: Plugin = {
  install(app: App) {
    app.component('i-carousel', Carousel)
    app.component('i-carousel-item', CarouselItem)
  }
}

export { Carousel, CarouselItem }
