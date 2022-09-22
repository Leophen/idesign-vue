import { App, Plugin } from 'vue'
import NotificationConfig from './notification'
import Notification from './notification.vue'

export const NotificationPlugin: Plugin = {
  install: (app: App): void => {
    app.config.globalProperties.$notification = NotificationConfig;
  },
}

export { Notification }
