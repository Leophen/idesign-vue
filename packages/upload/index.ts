import { App, Plugin } from 'vue'
import Upload from './upload.vue'

export const UploadPlugin: Plugin = {
  install(app: App) {
    app.component('i-upload', Upload)
  }
}

export { Upload }
