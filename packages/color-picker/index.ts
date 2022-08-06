import { App, Plugin } from 'vue'
import ColorPicker from './color-picker.vue'
import ColorPanel from './color-panel.vue'

export const ColorPickerPlugin: Plugin = {
  install(app: App) {
    app.component('i-color-picker', ColorPicker)
    app.component('i-color-panel', ColorPanel)
  }
}

export { ColorPicker, ColorPanel }
