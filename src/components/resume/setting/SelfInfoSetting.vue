<script setup lang="ts" name="SelfInfoSetting">
import { SelfProfileState as s, selfFilter } from '~/composables/resume'

const info = computed(() => {
  return Object.keys(s.value).filter(el => !selfFilter.includes(el))
})
</script>

<template>
  <a-form
    :model="s"
    name="basic"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 20 }"
    autocomplete="off"
  >
    <a-form-item label="name" name="name">
      <a-input v-model:value="s.name" />
    </a-form-item>
    <a-form-item v-for="item in info" :key="item" :label="item" :name="item">
      <a-input v-model:value="s[item]" />
    </a-form-item>
  </a-form>
</template>
