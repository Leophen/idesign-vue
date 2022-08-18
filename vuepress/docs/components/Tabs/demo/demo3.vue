<template>
  <h4>全局禁用</h4>
  <i-tabs disabled>
    <i-tabs-item>选项卡1</i-tabs-item>
    <i-tabs-item>选项卡22</i-tabs-item>
    <i-tabs-item>选项卡333</i-tabs-item>
  </i-tabs>
  <h4>单项禁用</h4>
  <i-tabs>
    <i-tabs-item>选项卡1</i-tabs-item>
    <i-tabs-item disabled>选项卡22</i-tabs-item>
    <i-tabs-item>选项卡333</i-tabs-item>
  </i-tabs>
  <h4>卡片风格全局禁用</h4>
  <i-tabs theme="card" disabled>
    <i-tabs-item>选项卡1</i-tabs-item>
    <i-tabs-item>选项卡22</i-tabs-item>
    <i-tabs-item>选项卡333</i-tabs-item>
  </i-tabs>
  <h4>卡片风格单项禁用</h4>
  <i-tabs theme="card">
    <i-tabs-item>选项卡1</i-tabs-item>
    <i-tabs-item disabled>选项卡22</i-tabs-item>
    <i-tabs-item>选项卡333</i-tabs-item>
  </i-tabs>
</template>
