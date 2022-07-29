import { App, Plugin } from 'vue'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

export const CollapsePlugin: Plugin = {
  install(app: App) {
    app.component('i-collapse', Collapse)
    app.component('i-collapse-item', CollapseItem)
  }
}

export { Collapse, CollapseItem }
