import { App, Plugin } from 'vue'
import Image from './image.vue'

export const ImagePlugin: Plugin = {
  install(app: App) {
    app.component('i-image', Image)
  }
}

export { Image }
