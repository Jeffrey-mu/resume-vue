<script setup lang="ts" name="SelfIntroduction">
const { t } = useI18n()
</script>

<template>
  <div>
    <Divider :title="t('resume.setting.introduction')" />
    <div v-for="(_, index) in SelfIntroduce" :key="index" flex>
      <Skeleton :data_key="index" :data="SelfIntroduce" />
    </div>
  </div>
</template>
