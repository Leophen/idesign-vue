<template>
  <div className="idesign-demo-block-column">
    <i-alert type="info" closable>
      这是一条普通的消息提示
      <template #operation>
        <span>相关操作</span>
      </template>
    </i-alert>
    <i-alert type="success" closable>
      这是一条成功的消息提示
      <template #operation>
        <span>相关操作</span>
      </template>
    </i-alert>
    <i-alert type="warning" closable>
      这是一条警示消息
      <template #operation>
        <span>相关操作</span>
      </template>
    </i-alert>
    <i-alert type="error" closable>
      高危操作 / 出错信息提示
      <template #operation>
        <span>相关操作</span>
      </template>
    </i-alert>
  </div>
</template>
