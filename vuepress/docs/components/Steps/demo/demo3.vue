<template>
  <div className="idesign-demo-block-row">
    <i-steps layout="vertical" :current="2">
      <i-steps-item>
        <template #title>步骤1</template>
        <template #description>提示文字</template>
      </i-steps-item>
      <i-steps-item>
        <template #title>步骤2</template>
        <template #description>提示文字</template>
      </i-steps-item>
      <i-steps-item>
        <template #title>步骤3</template>
        <template #description>提示文字</template>
      </i-steps-item>
    </i-steps>
    <i-steps layout="vertical" dot :current="2">
      <i-steps-item>
        <template #title>步骤1</template>
        <template #description>提示文字</template>
      </i-steps-item>
      <i-steps-item>
        <template #title>步骤2</template>
        <template #description>提示文字</template>
      </i-steps-item>
      <i-steps-item>
        <template #title>步骤3</template>
        <template #description>提示文字</template>
      </i-steps-item>
    </i-steps>
  </div>
</template>
