<template>
  <div className="idesign-demo-block-column">
    <i-alert type="info" title="消息提示标题" closable>
      这是一条普通的消息提示
      <template #operation>
        <span>相关操作</span>
      </template>
    </i-alert>
    <i-alert type="success" title="消息提示标题" closable>
      这是一条成功的消息提示
      <template #operation>
        <span>相关操作</span>
      </template>
    </i-alert>
    <i-alert type="warning" title="消息提示标题" closable>
      这是一条警示消息
      <template #operation>
        <span>相关操作</span>
      </template>
    </i-alert>
    <i-alert type="error" title="消息提示标题" closable>
      高危操作 / 出错信息提示
      <template #operation>
        <span>相关操作</span>
      </template>
    </i-alert>
  </div>
</template>
