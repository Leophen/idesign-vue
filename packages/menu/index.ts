import { App, Plugin } from 'vue'
import Menu from './menu'
import MenuGroup from './menu-group'
import MenuItem from './menu-item'

export const MenuPlugin: Plugin = {
  install(app: App) {
    app.component('i-menu', Menu)
    app.component('i-menu-group', MenuGroup)
    app.component('i-menu-item', MenuItem)
  }
}

export { Menu, MenuGroup, MenuItem }
