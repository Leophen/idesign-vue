<template>
  <i-grid>
    <i-grid-item :span="4">
      <div>GridItem1</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem2</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem3</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem4</div>
    </i-grid-item>
  </i-grid>

  <i-grid>
    <i-grid-item :span="4">
      <div>GridItem1</div>
    </i-grid-item>
    <i-grid-item :span="4" :offset="2">
      <div>GridItem2</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem3</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem4</div>
    </i-grid-item>
  </i-grid>

  <i-grid :gutter="16">
    <i-grid-item :span="4">
      <div>GridItem1</div>
    </i-grid-item>
    <i-grid-item :span="4" :offset="2">
      <div>GridItem2</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem3</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem4</div>
    </i-grid-item>
  </i-grid>
</template>
