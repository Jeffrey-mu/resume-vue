<script setup lang="ts" name="operation">
import { setVisible } from "~/composables/resume";
import { getConfig, exportDataToLocal } from "~/utils";
import { print } from "~/utils";
interface BtnList {
  label: string;
  fn: Function;
}
const exportData = () => {
  exportDataToLocal(getConfig(), "config");
};
const BTN_LISt: BtnList[] = [
  {
    label: "进行配置",
    fn: setVisible,
  },
  {
    label: "保存简历",
    fn: exportData,
  },
  {
    label: "复制配置",
    fn: () => {},
  },
  {
    label: "导入配置",
    fn: () => {
      showImport.value = true;
    },
  },
  {
    label: "导出配置",
    fn: exportData,
  },
  {
    label: "PDF下载",
    fn: print,
  },
];
</script>
<template>
  <div v-show="model" w-40 flex="~ col" m-5 class="box_btn">
    <Button
      mb-3
      bg="#1890ff"
      c-white
      v-for="{ fn, label } in BTN_LISt"
      :key="label"
      @click="fn"
      >{{ label }}</Button
    >
  </div>
</template>
<style>
@media print {
  .box_btn {
    display: none !important;
  }
  nav {
    display: none !important;
  }
}
</style>
