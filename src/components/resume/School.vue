<script setup lang="ts" name="School">
const { t } = useI18n()
</script>

<template>
  <Divider :title="t('resume.setting.education')" />
  <div class="school">
    <div v-for="(item, index) in SchoolState" :key="index" flex="~" justify-between>
      <div>
        <EditablePanel :data="item" data_key="schoolName" />
      </div>
      <div class="school-date" flex>
        <EditablePanel :data="item" data_key="start" />
        ~
        <EditablePanel :data="item" data_key="end" />
        <EditablePanel />
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.school {
  .school-date {
    font-size: 10px;
    color: #777;
    line-height: 25px;
  }
}
</style>
