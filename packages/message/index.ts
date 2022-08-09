import { App, Plugin } from 'vue'
import Message from './message'

export const MessagePlugin: Plugin = {
  install(app: App) {
    app.component('i-message', Message)
  }
}

export { Message }
