<script setup lang="ts">
import { setModel } from "~/composables/resume";
const { t, availableLocales, locale } = useI18n();
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales;
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length];
};
</script>

<template>
  <nav bg="#1890ff" px-10 flex justify-between h-10 lh-10 class="font2">
    <span c="#fff">Resume</span>
    <div flex>
      <span c="#fff" @click="setModel">{{ model ? "预览" : "编辑" }}</span>
      <a href="https://github.com/Jeffrey-mu/resume-vue" lh-10
        ><img mt-3 mx-2 src="/self/github1.png" width="16" alt=""
      /></a>
    </div>
  </nav>
</template>
<style>
.font2 {
  font-size: 14px;
}
</style>
