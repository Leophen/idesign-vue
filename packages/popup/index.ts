import { App, Plugin } from 'vue'
import Popup from './popup.vue'

export const PopupPlugin: Plugin = {
  install(app: App) {
    app.component('i-popup', Popup)
  }
}

export { Popup }
