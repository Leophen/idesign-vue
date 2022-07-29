import { App, Plugin } from 'vue'
import BackTop from './back-top.vue'

export const BackTopPlugin: Plugin = {
  install(app: App) {
    app.component('i-back-top', BackTop)
  }
}

export { BackTop }
