<template>
  <div className="idesign-demo-block-column">
    <i-pagination :total="100" />
    <i-pagination
      :current="10"
      :total="999"
      :pageSize="20"
      @change="handleChange"
    />
  </div>
</template>

<script setup>
const handleChange = (val) => {
  console.log(val)
}
</script>
