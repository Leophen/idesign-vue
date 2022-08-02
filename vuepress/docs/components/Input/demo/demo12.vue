<template>
  <h4>输入框 + 输入框</h4>
  <i-input-group>
    <i-input />
    <i-input />
  </i-input-group>
  <br />
  <i-input-group>
    <i-grid>
      <i-grid-item :width="120">
        <i-input />
      </i-grid-item>
      <i-grid-item>
        <i-input />
      </i-grid-item>
    </i-grid>
  </i-input-group>
  <br />
  <i-input-group>
    <i-grid>
      <i-grid-item :span="4">
        <i-input />
      </i-grid-item>
      <i-grid-item :span="8">
        <i-input />
      </i-grid-item>
      <i-grid-item :span="12">
        <i-input />
      </i-grid-item>
    </i-grid>
  </i-input-group>

  <h4>输入框 + 按钮</h4>
  <i-input-group>
    <i-input />
    <i-button :style="{ marginLeft: '10px' }">搜索</i-button>
  </i-input-group>

  <h4>输入框 + 前后缀</h4>
  <i-input-group>
    <i-input />
    <template #prefixContent>http://</template>
  </i-input-group>
  <br />
  <i-input-group>
    <i-input />
    <template #prefixContent>http://</template>
    <template #suffixContent>.com</template>
  </i-input-group>
  <br />
  <i-input-group @clickPrefix="handleClick" @clickSuffix="handleClick">
    <i-input />
    <template #prefixContent>
      <i-icon name="ShoppingCart" />
    </template>
    <template #suffixContent>
      <i-icon name="Search" />
    </template>
  </i-input-group>
</template>

<script setup>
const handleClick = (e) => {
  console.log(e)
}
</script>
