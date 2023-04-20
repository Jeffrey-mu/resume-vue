<script setup lang="ts">
const proview = inject('proview')
const { t } = useI18n()
</script>

<template>
  <div mt-2 class="content template template_3" :class="{ proview }" m-2 flex>
    <div p-3 class="template_3__left" :style="{ background: currentColor }">
      <SelfProfile />
      <SelfIntroduction />
      <PersonalSkills :hide-score="true" />
    </div>
    <div flex-1 p-3 class="template_3__right">
      <WorkExperience />
      <ProjectExperience />
      <OpenSourceProject />
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
