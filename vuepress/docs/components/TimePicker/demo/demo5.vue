<template>
  <h4>默认步长</h4>
  <i-time-picker :steps="[1, 1, 1]" />
  <h4>分秒步长设为 5</h4>
  <i-time-picker :steps="[1, 5, 5]" />
</template>
