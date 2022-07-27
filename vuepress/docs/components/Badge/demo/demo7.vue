<template>
  <div className="idesign-demo-block-row">
    <i-badge :count="6">
      <i-button>按钮</i-button>
    </i-badge>
    <i-badge :count="6" :offset="[10, 10]">
      <i-button>按钮</i-button>
    </i-badge>
    <i-badge :count="6" :offset="[-10, 10]">
      <i-button>按钮</i-button>
    </i-badge>
  </div>
</template>
