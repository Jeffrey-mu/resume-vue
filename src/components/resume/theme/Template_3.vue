<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
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
</template>

<style scoped>
</style>
