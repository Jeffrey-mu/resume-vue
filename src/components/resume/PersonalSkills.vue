<script setup lang="ts" name="PersonalSkills">
withDefaults(defineProps<{ hideScore?: boolean }>(), { hideScore: false })
const { t } = useI18n()
</script>

<template>
  <Divider :title="t('resume.setting.skills')" />
  <div width="100%" class="personal_skills">
    <div v-for="(item, index) in PersonalSkillsState" :key="index" class="personal_skills_item" flex="~" justify-start>
      <p flex-1 class="personal_skills_item_des">
        <EditablePanel :data="item" data_key="skill" />
      </p>
      <a-rate v-show="!hideScore" v-model:value="item.level" flex />
    </div>
  </div>
</template>

<style lang="scss">
.template {
  .personal_skills_item {
    .personal_skills_item_des {
      width: 100%;
      word-wrap:break-word;
    }
  }
  .personal_skills_item_des {
    &::before {
      content: ' ';
      width: 10px;
      height: 4px;
      padding-right: 10px;
      // background: rgb(0, 0, 0);
      display: block;
    }
  }
}
</style>
