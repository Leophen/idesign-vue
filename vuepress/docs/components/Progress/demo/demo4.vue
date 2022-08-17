<template>
  <div className="i-design-demo-column">
    <i-progress :percentage="30">
      <template #label>😄</template>
    </i-progress>
    <i-progress :percentage="60">
      <template #label>
        <div>🌛</div>
      </template>
    </i-progress>
  </div>
</template>
