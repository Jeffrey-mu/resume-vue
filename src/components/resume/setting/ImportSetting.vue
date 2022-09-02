<template>
  <div>
    <a-modal v-model:visible="showImport" title="导入配置" @ok="handleOk" :closable="false">
      <a-textarea v-model:value="value" placeholder="将json文件内容复制到此处"></a-textarea>
    </a-modal>
  </div>
</template>
<script setup lang="ts">
import {showImport, ResumeStateModel} from '~/composables/resume'
import {importDataToLocal} from "~/utils"
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

