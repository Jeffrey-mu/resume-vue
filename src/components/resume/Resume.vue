<script setup lang="ts">
const { t } = useI18n();
</script>

<template>
  <div flex="~ 1 justify-center" pb-10 class="page" ma>
    <div mt-2 p-5 class="content" m-2>
      <SelfProfile />
      <Divider :title="t('resume.setting.self')" />
      <School />
      <Divider :title="t('resume.setting.introduction')" />
      <SelfIntroduction />
      <Divider :title="t('resume.setting.skills')" />
      <PersonalSkills />
      <Divider :title="t('resume.setting.work')" />
      <WorkExperience />
      <Divider :title="t('resume.setting.project')" />
      <ProjectExperience />
    </div>
    <Operation />
  </div>
  <Drawer />
  <ImportSetting />
</template>

<style scoped>
.content {
  box-shadow: 1px 1px 6px 1px #ccc;
  overflow: auto;
}
</style>
