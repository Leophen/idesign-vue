import { App, Plugin } from 'vue'
import Slider from './slider.vue'

export const SliderPlugin: Plugin = {
  install(app: App) {
    app.component('i-slider', Slider)
  }
}

export { Slider }
