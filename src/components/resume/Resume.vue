<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div flex="~ 1 justify-center" pb-10 class="page" ma>
    <div mt-2 p-5 class="content page" m-2>
      <SelfProfile />
      <Divider :title="t('resume.setting.introduction')" />
      <SelfIntroduction />
      <Divider :title="t('resume.setting.skills')" />
      <PersonalSkills />
      <Divider :title="t('resume.setting.work')" />
      <WorkExperience />
      <Divider :title="t('resume.setting.project')" />
      <ProjectExperience />
      <Divider :title="t('resume.setting.openSourceProject')" />
      <OpenSourceProject />
      <Divider :title="t('resume.setting.education')" />
      <School />
      <Divider :title="t('resume.setting.thank')" />
      {{ t('resume.setting.thankText') }}
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
