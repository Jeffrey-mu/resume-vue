<script setup lang="ts">
// https://github.com/vueuse/head
// you can use this to manipulate the document head in any components,
// they will be rendered correctly in the html results with vite-ssg
useHead({
  title: 'resume',
  meta: [
    { name: 'description', content: '在线制作简历 支持导出、导入、打印PDF' },
    {
      name: 'keywords',
      content:
        'resume, 简历, 在线制作简历, 下载简历, 程序员简历, 在线写简历, PDF',
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
    {
      rel: 'stylesheet',
      href: 'https://at.alicdn.com/t/c/font_3998763_yqc8jwqv97p.css?spm=a313x.7781069.1998910419.52&file=font_3998763_yqc8jwqv97p.css',
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
