<script setup lang="ts">
import { currentColor } from '../composables/resume'
const [theme, setTheme] = useTheme()
const { t } = useI18n()
function setData(e: Event) {
  localStorage.setItem('currentColor', e?.target?.value || '')
}
</script>

<template>
  <a-popover :title="t('settingTheme')">
    <template #content>
      颜色：<input id="" v-model="currentColor" type="color" name="" @change="setData">

      <div my-2>
        <h3>选择主题</h3>

        <div v-for="item in 3" :key="item" :style=" { color: item == theme ? 'red' : '' } " @click="setTheme(item)">
          主题{{ item }}
        </div>
      </div>
    </template>
    <a i-carbon-color-palette mt-3 mx-2 c-white />
  </a-popover>
</template>
