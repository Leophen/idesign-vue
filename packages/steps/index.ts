import { App, Plugin } from 'vue'
import Steps from './steps'
import StepsItem from './steps-item'

export const StepsPlugin: Plugin = {
  install(app: App) {
    app.component('i-steps', Steps)
    app.component('i-steps-item', StepsItem)
  }
}

export { Steps, StepsItem }
