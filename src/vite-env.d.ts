/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

declare module '@vue/runtime-dom' {
  interface SVGAttributes {
    stopColor?: string
    stopOpacity?: string
  }

  interface HTMLAttributes {
    className?: string
    referrerPolicy?: string
  }

  interface ImgHTMLAttributes {
    referrerPolicy?: string
  }
}
