<script setup lang="ts" name="ProjectExperience">
import { OpenSourceProjectState as W } from '~/composables/resume'
const { t } = useI18n()
</script>

<template>
  <Divider :title="t('resume.setting.openSourceProject')" />
  <div v-for="(item, index) in W" :key="index" mb-3 :text="currentColor">
    <div flex justify-between>
      <Skeleton>
        <span c-blue mr-2><a :href="item.link" :style="{ color: currentColor }">{{ item.name }}</a></span>
      </Skeleton>
      <Skeleton :data="item" data_key="desc" />
      <Skeleton>
        <span c-blue mr-2 float-right><a :href="item.github" :style="{ color: currentColor }">{{ item.github.slice(19) }}</a> </span>
      </Skeleton>
    </div>
  </div>
</template>
