<template>
  <div className="idesign-demo-block-row">
    <i-progress type="circle" :percentage="0" />
    <i-progress type="circle" :percentage="30" :width="100" />
    <i-progress type="circle" :percentage="60" :width="100" :strokeWidth="20" />
    <i-progress type="circle" :percentage="90" :width="100">
      <template #label>
        <div>🌛</div>
      </template>
    </i-progress>
  </div>
</template>
