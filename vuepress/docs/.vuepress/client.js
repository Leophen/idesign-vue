import { defineClientConfig, usePageFrontmatter } from '@vuepress/client'
import { computed, provide } from 'vue'
import { useRoute } from 'vue-router'
import {
  resolveSidebarItems,
  sidebarItemsSymbol,
} from '@vuepress/theme-default/lib/client/composables/useSidebarItems.js'
import { useThemeLocaleData } from '@vuepress/theme-default/lib/client/composables/useThemeData.js'

import iDesign from 'idesign-vue'
import 'idesign-vue/dist/style.css'

export default defineClientConfig({
  enhance({ app }) {
    app.use(iDesign)
  },
  setup() {
    // VuePress dev 模式下 theme 默认的 sidebarItems 未追踪 route.path，
    // 路由切换后侧栏可能一直为空；此处显式依赖 route 以修复左侧组件导航。
    const route = useRoute()
    const themeLocale = useThemeLocaleData()
    const frontmatter = usePageFrontmatter()
    const sidebarItems = computed(() => {
      void route.path
      return resolveSidebarItems(frontmatter.value, themeLocale.value)
    })
    provide(sidebarItemsSymbol, sidebarItems)
  },
})
