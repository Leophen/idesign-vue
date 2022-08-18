import { App, Plugin } from 'vue'
import Select from './select'
import SelectItem from './select-item'

export const SelectPlugin: Plugin = {
  install(app: App) {
    app.component('i-select', Select)
    app.component('i-select-item', SelectItem)
  }
}

export { Select, SelectItem }
