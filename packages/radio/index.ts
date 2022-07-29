import { App, Plugin } from 'vue'
import Radio from './radio'
import RadioGroup from './radio-group'

export const RadioPlugin: Plugin = {
  install(app: App) {
    app.component('i-radio', Radio)
    app.component('i-radio-group', RadioGroup)
  }
}

export { Radio, RadioGroup }
