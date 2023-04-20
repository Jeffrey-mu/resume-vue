<script setup lang="ts" name="InternshipExperience">
import { unref as _unref } from 'vue'
const { t } = useI18n()
</script>

<template>
  <Divider :title="t('resume.setting.InternshipExperience')" />
  <div class="internship_experience">
    <div v-for="(item, index) in InternshipExperience" :key="index" flex="~" justify-between>
      <div class="internship_experience_item">
        <div v-for="innerItem in Object.keys(item)" :key="innerItem">
          <EditablePanel :data="item" :data_key="innerItem" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.internship_experience {
.internship_experience_item {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  &>div {
  //  flex: 1;
  }
  &>div:last-child {
    margin-top: 10px;
    width: 100% !important;
  }
  &>div:not(:last-child) {
   color: v-bind(currentColor);
   font-weight: 600;
  }
}
}
</style>
