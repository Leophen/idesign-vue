import { App, Plugin } from 'vue'
import Tabs from './tabs'
import TabsItem from './tabs-item'

export const TabsPlugin: Plugin = {
  install(app: App) {
    app.component('i-tabs', Tabs)
    app.component('i-tabs-item', TabsItem)
  }
}

export { Tabs, TabsItem }
