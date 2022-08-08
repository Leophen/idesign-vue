import { App, Plugin } from 'vue'
import TimePicker from './time-picker.vue'

export const TimePickerPlugin: Plugin = {
  install(app: App) {
    app.component('i-time-picker', TimePicker)
  }
}

export { TimePicker }
