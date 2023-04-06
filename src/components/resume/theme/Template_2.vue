<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div mt-2 p-5 class="content template_2" m-2 flex>
    <div p-3 class="template_2__left">
      <SelfProfile />
      <Divider :title="t('resume.setting.introduction')" :hide-line="true" />
      <SelfIntroduction />
      <Divider :title="t('resume.setting.skills')" :hide-line="true" />
      <PersonalSkills :hide-score="true" />
      <Divider :title="t('resume.setting.education')" :hide-line="true" />
      <School />
    </div>
    <div flex-1 p-3 class="template_2__right">
      <Divider :title="t('resume.setting.work')" :show-b-g="true" />
      <WorkExperience />
      <Divider :title="t('resume.setting.project')" :show-b-g="true" />
      <ProjectExperience />
      <Divider :title="t('resume.setting.openSourceProject')" />
      <OpenSourceProject />
      <Divider :title="t('resume.setting.thank')" :show-b-g="true" />
      {{ t('resume.setting.thankText') }}
    </div>
  </div>
</template>

<style scoped lang="scss">
.template_2 {

  padding: 0;

  .template_2__left {
    width: 250px;
    flex-shrink: 0;
  }

  .template_2__right {
    background: #f2f2f2;
    flex: 1;
  }

  @media screen and (max-width: 700px) {
    flex-direction: column;

    .template_2__left {
      width: 100%;
    }

    .template_2__right {
      width: 100%;
    }
  }
}
</style>
