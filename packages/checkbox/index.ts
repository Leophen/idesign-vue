import { App, Plugin } from 'vue'
import Checkbox from './checkbox'
import CheckboxGroup from './checkbox-group'

export const CheckboxPlugin: Plugin = {
  install(app: App) {
    app.component('i-checkbox', Checkbox)
    app.component('i-checkbox-group', CheckboxGroup)
  }
}

export { Checkbox, CheckboxGroup }
