import { App, Plugin } from 'vue'
import Progress from './progress.vue'

export const ProgressPlugin: Plugin = {
  install(app: App) {
    app.component('i-progress', Progress)
  }
}

export { Progress }
