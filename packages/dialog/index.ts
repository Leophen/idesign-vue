import { App, Plugin } from 'vue'
import Dialog from './dialog.vue'

export const DialogPlugin: Plugin = {
  install(app: App) {
    app.component('i-dialog', Dialog)
  }
}

export { Dialog }