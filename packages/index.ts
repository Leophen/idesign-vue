import { App, Plugin } from 'vue'
import './index.scss'

import { ButtonPlugin } from './button'
import { IconPlugin } from './icon'
import { DividerPlugin } from './divider'
import { GridPlugin } from './grid'
import { LayoutPlugin } from './layout'
import { ScrollbarPlugin } from './scrollbar'

import { DropdownPlugin } from './dropdown'

import { PopupPlugin } from './popup'

const IDesignPlugin: Plugin = {
  install(app: App) {
    ButtonPlugin.install?.(app)
    IconPlugin.install?.(app)
    DividerPlugin.install?.(app)
    GridPlugin.install?.(app)
    LayoutPlugin.install?.(app)
    ScrollbarPlugin.install?.(app)

    DropdownPlugin.install?.(app)

    PopupPlugin.install?.(app)
  }
}

export * from './button'
export * from './icon'
export * from './divider'
export * from './grid'
export * from './layout'
export * from './scrollbar'

export * from './dropdown'

export * from './popup'

export default IDesignPlugin
