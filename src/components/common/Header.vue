<script setup lang="ts">
import { setModel } from '~/composables/resume'
defineProps<{ type: string }>()
// const { availableLocales, locale } = useI18n()
// const toggleLocales = () => {
// change to some real logic
//   const locales = availableLocales
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
// }
</script>

<template>
  <nav :style="{ background: '#ffffff' }" px-4 pl flex justify-between mb-10 h-15 lh-15 class="font2 nav_header" w="100%">
    <Logo :color="currentColor" />
    <div flex gap-2 items-center c="#11111">
      <template v-if="type !== 'default'">
        <i v-if="model" i-carbon-view title="预览" @click="setModel" />
        <i v-else i-carbon-edit title="编辑" @click="setModel" />
      </template>
      <a href="/about" i-carbon-dicom-overlay title="关于" />
      <!-- <ThemeSetting /> -->
      <!-- <span v-show="type !== 'default'" ml-2 cursor-pointer @click="toggleLocales">
          <span :style="{ color: locale === 'es' ? '#ccc' : '' }">中</span>
          /
          <span :style="{ color: locale === 'es' ? '' : '#ccc' }">en</span>
        </span> -->
      <a href="https://github.com/Jeffrey-mu/resume-vue" i-carbon-logo-github title="github" />
    </div>
  </nav>
</template>

<style scoped lang="scss">
.font2 {}

.nav_header {
  transform: all .3s;

  a,
  i {
    cursor: pointer;
    font-size: 20px;

    &:hover {
      transform: scale(1.1);
      color: blueviolet;
      color: none;
    }
  }
}

.nav_header {
  position: sticky;
  top: 0;
  z-index: 999999999999;
  box-shadow: 0 2px 8px #f0f1f2;
}
</style>
