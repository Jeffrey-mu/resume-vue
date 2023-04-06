<script setup lang="ts">
const proview = inject('proview')
const { t } = useI18n()
</script>

<template>
  <div mt-2 class="content template template_3" :class="{ proview }" m-2 flex>
    <div p-3 class="template_3__left" :style="{ background: currentColor }">
      <SelfProfile />
      <Divider :title="t('resume.setting.introduction')" :hide-line="true" />
      <SelfIntroduction />
      <Divider :title="t('resume.setting.skills')" :hide-line="true" />
      <PersonalSkills :hide-score="true" />
    </div>
    <div flex-1 p-3 class="template_3__right">
      <Divider :title="t('resume.setting.work')" />
      <WorkExperience />
      <Divider :title="t('resume.setting.project')" />
      <ProjectExperience />
      <Divider :title="t('resume.setting.openSourceProject')" />
      <OpenSourceProject />
      <Divider :title="t('resume.setting.education')" :hide-line="true" />
      <School />
      <Divider :title="t('resume.setting.thank')" />
      {{ t('resume.setting.thankText') }}
    </div>
  </div>
</template>

<style lang="scss">
@mixin proview {
  .template_3__left {
    padding: 15px;
    width: 250px;
    flex-shrink: 0;
    color: #ffffff;
    .iconfont {
      color: #ffffff !important;
    }
    h2 {
      color: #ffffff;
    }
  }

  .template_3__right {
    background: #ffffff;
    flex: 1;
  }

}

.template_3 {

  padding: 0;

  @include proview;

  @media screen and (max-width: 790px) {
    flex-direction: column;

    .template_3__left {
      width: 100%;
    }

    .template_3__right {
      width: 100%;
    }
  }
}

.proview {
  @media screen and (max-width: 790px) {
    flex-direction: row;

    @include proview;
  }
}
</style>
