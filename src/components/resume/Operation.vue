<script setup lang="ts" name="operation">
import { message } from 'ant-design-vue'
// import { setVisible } from '~/composables/resume'
import { clipboard, exportDataToLocal, print, saveResumeData } from '~/utils'
const { t } = useI18n()
const ThemeRef = ref()
interface BtnList {
  label: string
  fn: (() => void)
}
const exportData = () => {
  exportDataToLocal(getResumeData(), 'config')
}
const BTN_LISt = ref<BtnList[]>([
  {
    label: 'resume.operation.configuration',
    fn: setVisible,
  },
  {
    label: 'resume.operation.save',
    fn: () => {
      saveResumeData()
      message.success('配置已保存到本地！')
    },
  },
  {
    label: 'resume.operation.copy',
    fn: () => {
      clipboard(JSON.stringify(unref(getResumeData())))
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
    <Button mb-3 bg="#1890ff" c-white @click="ThemeRef.changeModal(true)">
      {{ t('settingTheme') }}
    </Button>
    <Button v-for="{ fn, label } in BTN_LISt" :key="label" mb-3 bg="#1890ff" c-white @click="fn()">
      {{ t(label) }}
    </Button>
    <SelectTheme ref="ThemeRef" />
  </div>
</template>

<style>
@media print {
  @page {
    size: A4;
    margin: 1cm;
  }

  body,
  body .template {
    box-shadow: none;
    padding: 0;
    margin: 0;
    padding-bottom: 30px;
    border: none;
    box-sizing: border-box;
  }
  .handle {
    display: none;
  }
  .box_btn {
    display: none !important;
  }

  nav {
    display: none !important;
  }
}
</style>
