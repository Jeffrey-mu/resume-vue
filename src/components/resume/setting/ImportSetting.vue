<template>
  <div>
    <a-modal v-model:visible="showImport" :title="t('resume.operation.import')" @ok="handleOk" :closable="false">
      <a-textarea v-model:value="value" :placeholder="t('resume.import.des')"></a-textarea>
    </a-modal>
  </div>
</template>
<script setup lang="ts">
import {showImport, ResumeStateModel} from '~/composables/resume'
import {importDataToLocal} from "~/utils"
const { t } = useI18n();
const value = ref<string>('')
const handleOk = (e: MouseEvent) => {
  showImport.value = false;
  try{
    const data: ResumeStateModel = JSON.parse((value.value))
  importDataToLocal(data)
  }catch(e) {
    console.error(e)
  }
};
</script>

