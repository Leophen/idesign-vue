<template>
  <i-textarea placeholder="限制最小高度，minRows=2" :minRows="2" />
  <br />
  <i-textarea placeholder="限制最大高度，maxRows=6" :maxRows="6" />
  <br />
  <i-textarea
    placeholder="限制最小和最大高度，minRows=2 maxRows=6"
    :minRows="2"
    :maxRows="6"
  />
</template>
