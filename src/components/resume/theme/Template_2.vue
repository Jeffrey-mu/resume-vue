<script setup lang="ts">
const proview = inject('proview')
const [resume_list_template2] = useTemplate2RefsList()
provide('showBG', true)
provide('draggable_list', resume_list_template2)
const { t } = useI18n()
</script>

<template>
  <div mt-2 p-5 class="content template template_2" :class="{ proview }" m-2 flex>
    <div p-3 class="template_2__left template_2-left">
      <SelfProfile />
      <SelfIntroduction />
      <PersonalSkills :hide-score="true" />
      <School />
    </div>
    <div flex-1 p-3 class="template_2__right template_2-right">
      <ResumeDraggable />
      <Divider :title="t('resume.setting.thank')" :show-b-g="true" />
      {{ t('resume.setting.thankText') }}
    </div>
  </div>
</template>

<style scoped lang="scss">
@mixin proview {
  .template_2__left {
    width: 250px;
    flex-shrink: 0;
  }

  .template_2__right {
    background: #f2f2f2;
    flex: 1;
  }

}

.template_2 {

  padding: 0;

  @include proview;

  @media screen and (max-width: 790px) {
    flex-direction: column;

    .template_2__left {
      width: 100%;
    }

    .template_2__right {
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
