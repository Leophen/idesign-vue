<template>
  <i-breadcrumb maxItemWidth="120px">
    <i-breadcrumb-item>页面1</i-breadcrumb-item>
    <i-breadcrumb-item>页面2222222222222222222222222222222</i-breadcrumb-item>
    <i-breadcrumb-item>页面3333333333333333333333333333333</i-breadcrumb-item>
  </i-breadcrumb>

  <br />

  <i-breadcrumb maxItemWidth="120px">
    <i-breadcrumb-item>页面1</i-breadcrumb-item>
    <i-breadcrumb-item maxWidth="80px">页面2222222222222222222222222222222</i-breadcrumb-item>
    <i-breadcrumb-item>页面3333333333333333333333333333333</i-breadcrumb-item>
  </i-breadcrumb>

  <br />

  <i-breadcrumb :maxItemWidth="120">
    <i-breadcrumb-item>页面1</i-breadcrumb-item>
    <i-breadcrumb-item maxWidth="80px">页面2222222222222222222222222222222</i-breadcrumb-item>
    <i-breadcrumb-item>页面3333333333333333333333333333333</i-breadcrumb-item>
  </i-breadcrumb>

  <br />

  <i-breadcrumb :maxItemWidth="120">
    <i-breadcrumb-item>页面1</i-breadcrumb-item>
    <i-breadcrumb-item :maxWidth="80">页面2222222222222222222222222222222</i-breadcrumb-item>
    <i-breadcrumb-item>页面3333333333333333333333333333333</i-breadcrumb-item>
  </i-breadcrumb>
</template>