<template>
  <div :style="{ width: '600px' }">
    <h4>step 设为 0.6</h4>
    <i-slider :defaultValue="60" :step="0.6" />
    <h4>step 设为 3</h4>
    <i-slider :defaultValue="33" :step="3" />
    <h4>step 设为 10</h4>
    <i-slider :defaultValue="50" :step="10" />
  </div>
</template>
