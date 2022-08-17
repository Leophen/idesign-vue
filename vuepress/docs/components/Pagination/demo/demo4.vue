<template>
  <div className="idesign-demo-block-column">
    <i-pagination hideInput :total="100" />
    <i-pagination
      hideSelect
      hideInput
      :current="10"
      :total="999"
      :pageSize="20"
    />
  </div>
</template>
