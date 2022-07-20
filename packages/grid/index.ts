import { App, Plugin } from 'vue'
import Grid from './grid.vue'
import GridItem from './grid-item.vue'

export const GridPlugin: Plugin = {
  install(app: App) {
    app.component('i-grid', Grid)
    app.component('i-grid-item', GridItem)
  }
}

export { Grid, GridItem }
