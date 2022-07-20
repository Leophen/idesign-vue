import { App, Plugin } from 'vue'

import { ButtonPlugin } from './button'
import { IconPlugin } from './icon'
import { DividerPlugin } from './divider'

const IDesignPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    IconPlugin.install?.(app)
    DividerPlugin.install?.(app)
  }
}

export * from './button'
export * from './icon'
export * from './divider'

export default IDesignPlugin
