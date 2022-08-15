import { App, Plugin } from 'vue'
import Loading from './loading.vue'

export const LoadingPlugin: Plugin = {
  install(app: App) {
    app.component('i-loading', Loading)
  }
}

export { Loading }
