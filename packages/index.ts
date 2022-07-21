import { App, Plugin } from 'vue'

import { ButtonPlugin } from './button'
import { IconPlugin } from './icon'
import { DividerPlugin } from './divider'
import { GridPlugin } from './grid'
import { LayoutPlugin } from './layout'

const IDesignPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    IconPlugin.install?.(app)
    DividerPlugin.install?.(app)
    GridPlugin.install?.(app)
    LayoutPlugin.install?.(app)
  }
}

export * from './button'
export * from './icon'
export * from './divider'
export * from './grid'
export * from './layout'

export default IDesignPlugin
