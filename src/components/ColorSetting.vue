
<script setup lang="ts">
import { currentColor } from '../composables/resume'
const { t } = useI18n()
function setData(e: Event) {
  console.log(e?.target?.value, '++++++')
  localStorage.setItem('currentColor', e?.target?.value || '' )
  }
</script>
<template>
    <a-popover :title="t('settingColor')">
      <template #content>
        <input type="color" v-model="currentColor" @change="setData" name="" id="">
      </template>
        <a i-carbon-color-palette mt-3 mx-2 c-white />

    </a-popover>
</template>
