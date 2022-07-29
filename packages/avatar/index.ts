import { App, Plugin } from 'vue'
import Avatar from './avatar.vue'
import AvatarGroup from './avatar-group.vue'

export const AvatarPlugin: Plugin = {
  install(app: App) {
    app.component('i-avatar', Avatar)
    app.component('i-avatar-group', AvatarGroup)
  }
}

export { Avatar, AvatarGroup }
