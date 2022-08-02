<template>
  <i-input prefixIcon="Search" />
  <br />
  <i-input suffixIcon="Calendar" />
  <br />
  <i-input clearable suffixIcon="Search" />
  <br />
  <i-input
    prefixIcon="Search"
    suffixIcon="Calendar"
    @clickPrefixIcon="clickIcon"
    @clickSuffixIcon="clickIcon"
  />
</template>

<script setup>
const clickIcon = (e) => {
  console.log(e)
}
</script>
