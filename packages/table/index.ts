import { App, Plugin } from 'vue'
import Table from './table.vue'
import ColumnGroup from './column-group'

export const TablePlugin: Plugin = {
  install(app: App) {
    app.component('i-table', Table)
  }
}

export { Table }
