<template>
  <div className="idesign-demo-block-column">
    <i-progress :percentage="30" indeterminate />
    <i-progress :percentage="30" indeterminate :duration="1" />
  </div>
  <div className="idesign-demo-block-row" :style="{ marginTop: '20px' }">
    <i-progress type="circle" :width="100" indeterminate />
    <i-progress type="circle" :width="100" :percentage="30" indeterminate />
    <i-progress type="circle" :width="100" :duration="1" indeterminate />
  </div>
</template>
