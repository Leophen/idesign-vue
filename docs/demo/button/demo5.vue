<template>
  <div className="idesign-demo-block-column">
    <!-- 方角 square -->
    <div className="idesign-demo-block-row">
      <i-button shape="square">填充按钮</i-button>
      <i-button variant="outline" shape="square"> 描边按钮 </i-button>
      <i-button variant="dashed" shape="square"> 虚框按钮 </i-button>
    </div>
    <!-- 小圆角 round（默认） -->
    <div className="idesign-demo-block-row">
      <i-button shape="round">填充按钮</i-button>
      <i-button variant="outline" shape="round"> 描边按钮 </i-button>
      <i-button variant="dashed" shape="round"> 虚框按钮 </i-button>
    </div>
    <!-- 大圆角 circle -->
    <div className="idesign-demo-block-row">
      <i-button shape="circle">填充按钮</i-button>
      <i-button variant="outline" shape="circle"> 描边按钮 </i-button>
      <i-button variant="dashed" shape="circle"> 虚框按钮 </i-button>
    </div>
  </div>
</template>
