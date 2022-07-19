import { App, Plugin } from 'vue'

import { ButtonPlugin } from './button'

const IDesignPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
  }
}

export default IDesignPlugin

export * from './button'
