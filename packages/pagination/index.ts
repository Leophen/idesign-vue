import { App, Plugin } from 'vue'
import Pagination from './pagination.vue'

export const PaginationPlugin: Plugin = {
  install(app: App) {
    app.component('i-pagination', Pagination)
  }
}

export { Pagination }
