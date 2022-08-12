import { App, Plugin } from 'vue'
import Notification from './notification'

export const NotificationPlugin: Plugin = {
  install: (app: App): void => {
    app.config.globalProperties.$notification = Notification;
  },
}

export { Notification }
