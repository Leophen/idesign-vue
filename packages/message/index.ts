import { App, Plugin } from 'vue'
import Message from './message'

export const MessagePlugin: Plugin = {
  install: (app: App): void => {
    app.config.globalProperties.$message = Message;
  },
}

export { Message }
