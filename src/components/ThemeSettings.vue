<script setup lang="ts">
import { currentColor } from '../composables/resume'
const ThemeRef = ref()
const { t } = useI18n()

function setData(e: Event) {
  localStorage.setItem('currentColor', e?.target?.value || '')
}
</script>

<template>
  <a-popover :title="t('settingTheme')">
    <template #content>
      <div>
        颜色：<input id="" v-model="currentColor" type="color" name="" @change="setData">
      </div>
      <div my-2>
        <h3>
          <Button @click="ThemeRef.changeModal(true)">
            选择主题
          </Button>
        </h3>
      </div>
    </template>
    <a i-carbon-color-palette mt-3 mx-2 c-white />
  </a-popover>
</template>

<style lang="scss">

</style>
