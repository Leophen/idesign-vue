<template>
  <h4>top</h4>
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

  <h4>middle</h4>
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

  <h4>bottom</h4>
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

  <h4>单项对齐设置</h4>
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
