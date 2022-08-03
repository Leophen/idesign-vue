<template>
  <div class="idesign-demo-block-popup">
    <i-popup placement="top">
      <i-button class="Top">top</i-button>
      <template #content>气泡提示内容 top</template>
    </i-popup>
    <i-popup placement="top-start">
      <i-button class="TopLeft">top-start</i-button>
      <template #content>气泡提示内容 top-start</template>
    </i-popup>
    <i-popup placement="top-end">
      <i-button class="TopRight">top-end</i-button>
      <template #content>气泡提示内容 top-end</template>
    </i-popup>
    <i-popup placement="bottom">
      <i-button class="Bottom">bottom</i-button>
      <template #content>气泡提示内容 bottom</template>
    </i-popup>
    <i-popup placement="bottom-start">
      <i-button class="BottomLeft">bottom-start</i-button>
      <template #content>气泡提示内容 bottom-start</template>
    </i-popup>
    <i-popup placement="bottom-end">
      <i-button class="BottomRight">bottom-end</i-button>
      <template #content>气泡提示内容 bottom-end</template>
    </i-popup>
    <i-popup placement="left">
      <i-button class="Left">left</i-button>
      <template #content>气泡提示内容 left</template>
    </i-popup>
    <i-popup placement="left-start">
      <i-button class="LeftTop">left-start</i-button>
      <template #content>气泡提示内容 left-start</template>
    </i-popup>
    <i-popup placement="left-end">
      <i-button class="LeftBottom">left-end</i-button>
      <template #content>气泡提示内容 left-end</template>
    </i-popup>
    <i-popup content="气泡提示内容 right" placement="right">
      <i-button class="Right">right</i-button>
      <template #content>气泡提示内容 right</template>
    </i-popup>
    <i-popup placement="right-start">
      <i-button class="RightTop">right-start</i-button>
      <template #content>气泡提示内容 right-start</template>
    </i-popup>
    <i-popup placement="right-end">
      <i-button class="RightBottom">right-end</i-button>
      <template #content>气泡提示内容 right-end</template>
    </i-popup>
  </div>
</template>
