import { App, Plugin } from 'vue'
import Empty from './empty.vue'

export const EmptyPlugin: Plugin = {
  install(app: App) {
    app.component('i-empty', Empty)
  }
}

export { Empty }