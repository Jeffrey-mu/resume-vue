<script setup lang="ts" name="template_1">
// const resume_list = ref(JSON.parse(JSON.stringify()))
const [resume_list_template1] = useTemplate1RefsList()
provide('draggable_list', resume_list_template1)
const { t } = useI18n()
</script>

<template>
  <div mt-2 p-5 class="content page template template_1" m-2>
    <ResumeDraggable />
    <div>
      <Divider :title="t('resume.setting.thank')" />
      {{ t('resume.setting.thankText') }}
    </div>
  </div>
</template>

<style scoped lang="scss">
</style>
