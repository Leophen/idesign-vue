<template>
  <i-menu defaultActive="b">
    <i-menu-item value="a">菜单1</i-menu-item>
    <i-menu-item value="b">菜单2</i-menu-item>
    <i-menu-item value="c">菜单3</i-menu-item>
    <i-menu-item value="d">菜单4</i-menu-item>

    <template #prefixContent>
      <img src="/images/logo.svg" />
    </template>
    <template #suffixContent>
      <div>个人中心</div>
    </template>
  </i-menu>
</template>
