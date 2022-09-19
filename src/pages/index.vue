<script setup lang="ts">
import { importDataToLocal } from '~/utils'

onMounted(() => {
  const resumeState = localStorage.getItem('resume')
  resumeState && importDataToLocal(JSON.parse(resumeState))
})
</script>

<template>
  <Resume />
</template>

<route lang="yaml">
meta:
  layout: home
</route>
