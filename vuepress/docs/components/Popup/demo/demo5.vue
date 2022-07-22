<template>
  <h4>默认显示</h4>
  <i-popup placement="right" :defaultVisible="true" content="提示内容">
    <i-button>悬浮提示</i-button>
  </i-popup>
  <h4>默认隐藏</h4>
  <i-popup placement="right" :defaultVisible="false" content="提示内容">
    <i-button>悬浮提示</i-button>
  </i-popup>
  <h4>固定显示</h4>
  <i-popup placement="right" :visible="true" content="提示内容">
    <i-button>悬浮提示</i-button>
  </i-popup>
  <h4>固定隐藏</h4>
  <i-popup placement="right" :visible="false" content="提示内容">
    <i-button>悬浮提示</i-button>
  </i-popup>
</template>
