<template>
  <i-textarea placeholder="高度自适应，autoSize = true" autoSize />
  <br />
  <i-textarea
    placeholder="高度自适应 + 限制高度，minRows=2 maxRows=6"
    autoSize
    :minRows="2"
    :maxRows="6"
  />
</template>
