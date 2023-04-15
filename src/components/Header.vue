<script setup lang="ts">
import { setModel } from '~/composables/resume'
defineProps<{ type: string }>()
const { availableLocales, locale } = useI18n()
const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <nav :style="{ background: '#1890ff' }" px-10 pl flex justify-between h-10 lh-10 class="font2 header" w="100%">
    <Logo />
    <div flex gap-2 items-center c="#fff">
      <template v-if="type !== 'default'">
        <i v-if="model" i-carbon-view @click="setModel" />
        <i v-else i-carbon-edit @click="setModel" />
      </template>
      <a href="/about" i-carbon-dicom-overlay />
      <!-- <ThemeSetting /> -->
      <span v-show="type !== 'default'" ml-2 cursor-pointer @click="toggleLocales">
        <span :style="{ color: locale === 'es' ? '#ccc' : '' }">中</span>
        /
        <span :style="{ color: locale === 'es' ? '' : '#ccc' }">en</span>
      </span>
      <a href="https://github.com/Jeffrey-mu/resume-vue" i-carbon-logo-github />
    </div>
  </nav>
</template>

<style scoped lang="scss">
.font2 {
  font-size: 14px;
}

.header {
  transform: all .3s;
  a,i {
    cursor: pointer;
    &:hover {
      transform: scale(1.2);
      opacity: .3;
      color: none;
    }
  }
}
</style>
