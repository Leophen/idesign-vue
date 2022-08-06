import { App, Plugin } from 'vue'
import DatePicker from './date-picker.vue'

export const DatePickerPlugin: Plugin = {
  install(app: App) {
    app.component('i-date-picker', DatePicker)
  }
}

export { DatePicker }
