import { App, Plugin } from 'vue'
import Rate from './rate.vue'

export const RatePlugin: Plugin = {
  install(app: App) {
    app.component('i-rate', Rate)
  }
}

export { Rate }
