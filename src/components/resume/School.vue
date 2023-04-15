<script setup lang="ts" name="School">
const { t } = useI18n()
</script>

<template>
  <Divider :title="t('resume.setting.education')" />
  <div class="school">
    <div v-for="(item, index) in SchoolState" :key="index" flex="~" justify-between>
      <div>
        <Skeleton :data="item" data_key="schoolName" />
      </div>
      <div class="school-date" flex>
        <Skeleton :data="item" data_key="start" />
        ~
        <Skeleton :data="item" data_key="end" />
        <Skeleton />
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
