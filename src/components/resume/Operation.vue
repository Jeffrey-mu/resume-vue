<script setup lang="ts" name="operation">
function print() {
  window.print();
}
</script>
<template>
  <div w-40 flex="~ col" m-5 class="box_btn">
    <a-button mb-3 bg="#1890ff" c-white>进行配置</a-button>
    <a-button mb-3 bg="#1890ff" c-white>保存简历</a-button>
    <a-button mb-3 bg="#1890ff" c-white @click="print">PDF下载</a-button>
  </div>
</template>
<style>
@media print {
  .box_btn {
    display: none !important;
  }
}
</style>
