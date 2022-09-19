<script setup lang="ts" name="operation">
import { setVisible } from '~/composables/resume'
import { clipboard, exportDataToLocal, getConfig, print } from '~/utils'
const { t } = useI18n()
interface BtnList {
  label: string
  fn: (() => void)
}
const exportData = () => {
  exportDataToLocal(getConfig(), 'config')
}
const BTN_LISt = ref<BtnList[]>([
  {
    label: 'resume.operation.configuration',
    fn: setVisible,
  },
  {
    label: 'resume.operation.save',
    fn: exportData,
  },
  {
    label: 'resume.operation.copy',
    fn: () => {
      clipboard(JSON.stringify(unref(getConfig())))
    },
  },
  {
    label: 'resume.operation.import',
    fn: () => {
      showImport.value = true
    },
  },
  {
    label: 'resume.operation.export',
    fn: exportData,
  },
  {
    label: 'resume.operation.download',
    fn: print,
  },
])
</script>

<template>
  <div v-show="model" w-40 flex="~ col" m-5 class="box_btn">
    <Button
      v-for="{ fn, label } in BTN_LISt"
      :key="label"
      mb-3
      bg="#1890ff"
      c-white
      @click="fn"
    >
      {{ t(label) }}
    </Button>
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
