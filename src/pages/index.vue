<script setup lang="ts">
import { useResumeStore } from '~/store/resume'
import { importDataToLocal } from '~/utils'
const resume = useResumeStore()

onMounted(() => {
  resume.resumeState && importDataToLocal(resume.resumeState)
})
</script>

<template>
  <Resume />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
