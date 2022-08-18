<template>
  <div :style="{ width: '600px' }">
    <h4>max 设为 10</h4>
    <i-slider :defaultValue="5" :max="10" />
    <h4>min 设为 30</h4>
    <i-slider :defaultValue="60" :min="30" />
    <h4>同时设置</h4>
    <i-slider :defaultValue="100" :max="200" :min="50" />
  </div>
</template>
