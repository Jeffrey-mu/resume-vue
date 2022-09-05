<script setup lang="ts">
import { setModel } from "~/composables/resume";
defineProps<{type: string}>()
const { t, availableLocales, locale } = useI18n();
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<template>
  <nav
    bg="#1890ff"
    px-10
    flex
    justify-between
    h-10
    lh-10
    class="font2"
    w="100%"
  >
    <a href="/" c="#fff">{{t("title")}}</a>
    <div flex>
      <span v-show="type !== 'default'" c="#fff" @click="setModel">{{ model ? t("header.preview") : t("header.edit") }}</span>
      <a href="https://github.com/Jeffrey-mu/resume-vue" lh-10
        ><img mt-3 mx-2 src="/self/github1.png" width="16" alt=""
      /></a>
      <a href="/about" mt-3 mx-2 i-carbon-dicom-overlay></a>
      <span ml-2 v-show="type !== 'default'" c="#fff" @click="toggleLocales">{{t("language")}}</span>
    </div>
  </nav>
</template>
<style>
.font2 {
  font-size: 14px;
}
</style>
