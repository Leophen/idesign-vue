import { App, Plugin } from 'vue'
import './index.scss'

import { ButtonPlugin } from './button'
import { IconPlugin } from './icon'
import { DividerPlugin } from './divider'
import { GridPlugin } from './grid'
import { LayoutPlugin } from './layout'
import { ScrollbarPlugin } from './scrollbar'

import { DropdownPlugin } from './dropdown'
import { MenuPlugin } from './menu'
import { TabsPlugin } from './tabs'
import { BreadcrumbPlugin } from './breadcrumb'
import { PaginationPlugin } from './pagination'
import { BackTopPlugin } from './back-top'

import { SwitchPlugin } from './switch'
import { RadioPlugin } from './radio'
import { CheckboxPlugin } from './checkbox'
import { InputPlugin } from './input'
import { TextareaPlugin } from './textarea'
import { SelectPlugin } from './select'
import { TimePickerPlugin } from './time-picker'
import { DatePickerPlugin } from './date-picker'
import { ColorPickerPlugin } from './color-picker'
import { TablePlugin } from './table'
import { UploadPlugin } from './upload'
import { SliderPlugin } from './slider'
import { ProgressPlugin } from './progress'
import { StepsPlugin } from './steps'
import { RatePlugin } from './rate'

import { TagPlugin } from './tag'
import { EmptyPlugin } from './empty'
import { LoadingPlugin } from './loading'
import { AvatarPlugin } from './avatar'
import { BadgePlugin } from './badge'
import { ImagePlugin } from './image'
import { CarouselPlugin } from './carousel'
import { CollapsePlugin } from './collapse'

import { AlertPlugin } from './alert'
import { MessagePlugin } from './message'
import { NotificationPlugin } from './notification'
import { DialogPlugin } from './dialog'
import { DrawerPlugin } from './drawer'
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
    MenuPlugin.install?.(app)
    TabsPlugin.install?.(app)
    BreadcrumbPlugin.install?.(app)
    PaginationPlugin.install?.(app)
    BackTopPlugin.install?.(app)

    SwitchPlugin.install?.(app)
    RadioPlugin.install?.(app)
    CheckboxPlugin.install?.(app)
    InputPlugin.install?.(app)
    TextareaPlugin.install?.(app)
    SelectPlugin.install?.(app)
    TimePickerPlugin.install?.(app)
    DatePickerPlugin.install?.(app)
    ColorPickerPlugin.install?.(app)
    TablePlugin.install?.(app)
    UploadPlugin.install?.(app)
    SliderPlugin.install?.(app)
    ProgressPlugin.install?.(app)
    StepsPlugin.install?.(app)
    RatePlugin.install?.(app)

    TagPlugin.install?.(app)
    EmptyPlugin.install?.(app)
    LoadingPlugin.install?.(app)
    AvatarPlugin.install?.(app)
    BadgePlugin.install?.(app)
    ImagePlugin.install?.(app)
    CarouselPlugin.install?.(app)
    CollapsePlugin.install?.(app)

    AlertPlugin.install?.(app)
    MessagePlugin.install?.(app)
    NotificationPlugin.install?.(app)
    DialogPlugin.install?.(app)
    DrawerPlugin.install?.(app)
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
export * from './menu'
export * from './tabs'
export * from './breadcrumb'
export * from './pagination'
export * from './back-top'

export * from './switch'
export * from './radio'
export * from './checkbox'
export * from './input'
export * from './textarea'
export * from './select'
export * from './time-picker'
export * from './date-picker'
export * from './color-picker'
export * from './table'
export * from './upload'
export * from './slider'
export * from './progress'
export * from './steps'
export * from './rate'

export * from './tag'
export * from './empty'
export * from './loading'
export * from './avatar'
export * from './badge'
export * from './image'
export * from './carousel'
export * from './collapse'

export * from './alert'
export * from './message'
export * from './notification'
export * from './dialog'
export * from './drawer'
export * from './popup'

export * from './v-node'

export default IDesignPlugin
