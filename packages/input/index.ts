import { App, Plugin } from 'vue'
import Input from './input'
import InputGroup from './input-group'

export const InputPlugin: Plugin = {
  install(app: App) {
    app.component('i-input', Input)
    app.component('i-input-group', InputGroup)
  }
}

export { Input, InputGroup }
