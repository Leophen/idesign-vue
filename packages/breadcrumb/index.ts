import { App, Plugin } from 'vue'
import Breadcrumb from './breadcrumb'
import BreadcrumbItem from './breadcrumb-item'

export const BreadcrumbPlugin: Plugin = {
  install(app: App) {
    app.component('i-breadcrumb', Breadcrumb)
    app.component('i-breadcrumb-item', BreadcrumbItem)
  }
}

export { Breadcrumb, BreadcrumbItem }
