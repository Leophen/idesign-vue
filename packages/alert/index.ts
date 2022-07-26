import { App, Plugin } from 'vue'
import Alert from './alert.vue'

export const AlertPlugin: Plugin = {
  install(app: App) {
    app.component('i-alert', Alert)
  }
}

export { Alert }
