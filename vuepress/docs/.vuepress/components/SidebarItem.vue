<script setup lang="ts">
import AutoLink from '@theme/AutoLink.vue'
import DropdownTransition from '@theme/DropdownTransition.vue'
import { isActiveSidebarItem } from '@vuepress/theme-default/lib/client/utils/index.js'
import { useToggle } from '@vueuse/core'
import { computed, nextTick, onBeforeUnmount, toRefs } from 'vue'
import type { PropType } from 'vue'
import { useRoute, useRouter } from 'vue-router'

type SidebarItemConfig = {
  text: string
  link?: string
  children?: SidebarItemConfig[]
  collapsible?: boolean
}

const props = defineProps({
  item: {
    type: Object as PropType<SidebarItemConfig>,
    required: true,
  },
  depth: {
    type: Number,
    required: false,
    default: 0,
  },
})

const { item, depth } = toRefs(props)
const route = useRoute()
const router = useRouter()

const isActive = computed(() => isActiveSidebarItem(item.value, route))
const itemClass = computed(() => ({
  'sidebar-item': true,
  'sidebar-heading': depth.value === 0,
  'active': isActive.value,
  'collapsible': item.value.collapsible,
}))

// 非 collapsible 的分组默认全部展开，避免仅当前分类可见
const [isOpen, toggleIsOpen] = useToggle(
  item.value.collapsible ? isActive.value : true
)
const onClick = (e: Event): void => {
  if (item.value.collapsible) {
    e.preventDefault()
    toggleIsOpen()
  }
}

const unregisterRouterHook = router.afterEach(() => {
  nextTick(() => {
    isOpen.value = item.value.collapsible ? isActive.value : true
  })
})
onBeforeUnmount(() => {
  unregisterRouterHook()
})
</script>

<template>
  <li>
    <AutoLink v-if="item.link" :class="itemClass" :item="item" />
    <p
      v-else
      tabindex="0"
      :class="itemClass"
      @click="onClick"
      @keydown.enter="onClick"
    >
      {{ item.text }}
      <span
        v-if="item.collapsible"
        class="arrow"
        :class="isOpen ? 'down' : 'right'"
      />
    </p>

    <DropdownTransition v-if="item.children?.length">
      <ul v-show="isOpen" class="sidebar-item-children">
        <SidebarItem
          v-for="child in item.children"
          :key="`${depth}${child.text}${child.link}`"
          :item="child"
          :depth="depth + 1"
        />
      </ul>
    </DropdownTransition>
  </li>
</template>
