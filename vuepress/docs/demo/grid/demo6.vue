<template>
  <h3>top</h3>
  <i-grid align="top">
    <i-grid-item :span="4">
      <div :style="{ height: '80px' }">GridItem1</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem2</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div :style="{ height: '60px' }">GridItem3</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem4</div>
    </i-grid-item>
  </i-grid>

  <h3>middle</h3>
  <i-grid align="middle">
    <i-grid-item :span="4">
      <div :style="{ height: '80px' }">GridItem1</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem2</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div :style="{ height: '60px' }">GridItem3</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem4</div>
    </i-grid-item>
  </i-grid>

  <h3>bottom</h3>
  <i-grid align="bottom">
    <i-grid-item :span="4">
      <div :style="{ height: '80px' }">GridItem1</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem2</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div :style="{ height: '60px' }">GridItem3</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem4</div>
    </i-grid-item>
  </i-grid>

  <h3>单项对齐设置</h3>
  <i-grid align="bottom">
    <i-grid-item :span="4">
      <div :style="{ height: '80px' }">GridItem1</div>
    </i-grid-item>
    <i-grid-item :span="4" align="top">
      <div>AlignTop2</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div :style="{ height: '60px' }">GridItem3</div>
    </i-grid-item>
    <i-grid-item :span="4">
      <div>GridItem4</div>
    </i-grid-item>
  </i-grid>
</template>
