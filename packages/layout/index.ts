import { App, Plugin } from 'vue'
import Layout from './layout.vue'
import LayoutAside from './layout-aside.vue'
import LayoutContent from './layout-content.vue'
import LayoutFooter from './layout-footer.vue'
import LayoutHeader from './layout-header.vue'

export const LayoutPlugin: Plugin = {
  install(app: App) {
    app.component('i-layout', Layout)
    app.component('i-layout-aside', LayoutAside)
    app.component('i-layout-content', LayoutContent)
    app.component('i-layout-footer', LayoutFooter)
    app.component('i-layout-header', LayoutHeader)
  }
}

export { Layout, LayoutAside, LayoutContent, LayoutFooter, LayoutHeader }
