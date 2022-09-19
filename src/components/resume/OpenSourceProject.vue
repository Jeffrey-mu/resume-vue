<script setup lang="ts" name="ProjectExperience">
import { OpenSourceProjectState as W } from '~/composables/resume'
</script>

<template>
  <div v-for="(item, index) in W" :key="index" mb-3>
    <div>
      <span c-blue mr-2><a :href="item.link">{{ item.name }}</a></span> <span>{{ item.desc }}</span> <span c-blue mr-2 float-right><a :href="item.github">{{ item.github.slice(19) }}</a> </span>
    </div>
  </div>
</template>
