import { App, Plugin } from 'vue'
import Drawer from './drawer.vue'

export const DrawerPlugin: Plugin = {
  install(app: App) {
    app.component('i-drawer', Drawer)
  }
}

export { Drawer }