<script setup lang="ts" name="operation">
import {setVisible} from '~/composables/resume'
function print() {
  window.print();
}
const BTN_LISt = [
  {
    label: "进行配置",
    fn: setVisible,
  },
  {
    label: "保存简历",
    fn: null,
  },
  {
    label: "导出配置",
    fn: null,
  },
  {
    label: "PDF下载",
    fn: print,
  },
];
</script>
<template>
  <div w-40 flex="~ col" m-5 class="box_btn">
    <a-button mb-3 bg="#1890ff" c-white v-for="{fn, label} in BTN_LISt" :key="label" @click="fn">{{label}}</a-button>
  </div>
</template>
<style>
@media print {
  .box_btn {
    display: none !important;
  }
}
</style>
