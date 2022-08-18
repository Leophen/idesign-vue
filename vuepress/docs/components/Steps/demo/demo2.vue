<template>
  <h4>不设置 current</h4>
  <i-steps dot>
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
  <h4>设置 current</h4>
  <i-steps dot :current="2">
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
</template>
