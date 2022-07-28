import { App, Plugin } from 'vue'
import './index.scss'

import { ButtonPlugin } from './button'
import { IconPlugin } from './icon'
import { DividerPlugin } from './divider'
import { GridPlugin } from './grid'
import { LayoutPlugin } from './layout'
import { ScrollbarPlugin } from './scrollbar'

import { DropdownPlugin } from './dropdown'
import { BreadcrumbPlugin } from './breadcrumb'
import { BackTopPlugin } from './back-top'

import { CheckboxPlugin } from './checkbox'

import { AvatarPlugin } from './avatar'
import { BadgePlugin } from './badge'
import { CarouselPlugin } from './carousel'

import { AlertPlugin } from './alert'
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
    BreadcrumbPlugin.install?.(app)
    BackTopPlugin.install?.(app)

    CheckboxPlugin.install?.(app)

    AvatarPlugin.install?.(app)
    BadgePlugin.install?.(app)
    CarouselPlugin.install?.(app)

    AlertPlugin.install?.(app)
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
export * from './breadcrumb'
export * from './back-top'

export * from './checkbox'

export * from './avatar'
export * from './badge'
export * from './carousel'

export * from './alert'
export * from './popup'

export default IDesignPlugin
