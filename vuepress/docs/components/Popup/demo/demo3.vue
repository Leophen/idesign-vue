<template>
  <div className="idesign-demo-block-row">
    <i-popup content="提示内容">
      <i-button>悬浮提示</i-button>
    </i-popup>
    <i-popup content="提示内容" trigger="click">
      <i-button>点击提示</i-button>
    </i-popup>
    <i-popup content="提示内容" trigger="context-menu">
      <i-button>右击提示</i-button>
    </i-popup>
  </div>
</template>
