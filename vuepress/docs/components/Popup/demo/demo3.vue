<template>
  <div className="idesign-demo-block-row">
    <i-popup>
      <i-button>悬浮提示</i-button>
      <template #content>提示内容</template>
    </i-popup>
    <i-popup trigger="click">
      <i-button>点击提示</i-button>
      <template #content>提示内容</template>
    </i-popup>
    <i-popup trigger="context-menu">
      <i-button>右击提示</i-button>
      <template #content>提示内容</template>
    </i-popup>
  </div>
</template>
