<script setup lang="ts">
import type { ResumeStateModel } from '~/composables/resume'
import { showImport } from '~/composables/resume'
const { t } = useI18n()
const value = ref<string>('')
const handleOk = (e: MouseEvent) => {
  showImport.value = false
  try {
    const data: ResumeStateModel = JSON.parse((value.value))
    importDataForLocal(data)
  }
  catch (e) {
    console.error(e)
  }
}
</script>

<template>
  <div>
    <a-modal v-model:visible="showImport" :title="t('resume.operation.import')" :closable="false" @ok="handleOk">
      <a-textarea v-model:value="value" :placeholder="t('resume.import.des')" />
    </a-modal>
  </div>
</template>

