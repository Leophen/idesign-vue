import { App, Plugin } from 'vue'
import Textarea from './textarea'

export const TextareaPlugin: Plugin = {
  install(app: App) {
    app.component('i-textarea', Textarea)
  }
}

export { Textarea }
