<script setup lang="ts">
import { setModel } from '~/composables/resume'
defineProps<{ type: string }>()
const { t, availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav :style="{ background: '#1890ff' }" px-10 pl flex justify-between h-10 lh-10 class="font2" w="100%">
    <Logo />
    <div flex gap-2>
      <span v-show="type !== 'default'" c="#fff" @click="setModel">{{ model ? t("header.preview") : t("header.edit")
      }}</span>

      <a href="/about" c="#fff" mt-3 i-carbon-dicom-overlay />
      <!-- <ThemeSetting /> -->
      <span v-show="type !== 'default'" ml-2 c="#fff" cursor-pointer @click="toggleLocales">
        <span :style="{ color: locale === 'es' ? '#ccc' : '' }">中</span>
        /
        <span :style="{ color: locale === 'es' ? '' : '#ccc' }">en</span>
      </span>
      <a href="https://github.com/Jeffrey-mu/resume-vue" lh-10><img
        mt-3 src="/self/github1.png" width="16"
        alt=""
      ></a>
    </div>
  </nav>
</template>

<style>
.font2 {
  font-size: 14px;
}
</style>
