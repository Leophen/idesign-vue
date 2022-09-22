import { App, Plugin } from 'vue'
import MessageConfig from './message'
import Message from './message.vue'

export const MessagePlugin: Plugin = {
  install: (app: App): void => {
    app.config.globalProperties.$message = MessageConfig;
  },
}

export { Message }
