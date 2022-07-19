import { App, Plugin } from 'vue'

import { ButtonPlugin } from './button'
import { IconPlugin } from './icon'

const IDesignPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    IconPlugin.install?.(app)
  }
}

export default IDesignPlugin

export * from './button'
export * from './icon'
