<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'resume',
  meta: [
    { name: 'description', content: 'Opinionated Vite Starter Template' },
    {
      name: 'keywords',
      content:
        'resume 简历 在线制作简历 下载简历 前端程序员简历 程序员简历 在线写简历 PDF',
    },
    {
      name: 'theme-color',
      content: computed(() => (isDark.value ? '#00aba9' : '#ffffff')),
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/svg+xml',
      href: computed(() =>
        preferredDark.value ? '/favicon-dark.svg' : '/favicon.svg',
      ),
    },
  ],
})
</script>

<template>
  <keep-alive>
    <RouterView />
  </keep-alive>
</template>

<style>
div,
p {
  font-size: 14px;
}
.small {
  font-size: 12px;
}
</style>
