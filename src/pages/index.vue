<script setup lang="ts">


</script>

<template>
  <div flex="~ 1 justify-center" class="page" w-300 ma>
    <div mt-2 flex-1 p-5 class="content">
      <SelfProfile />
      <School />
      <SelfIntroduction />
      <PersonalSkills />
      <WorkExperience />
      <ProjectExperience />
    </div>
    <div w-40 flex="~ col" m-5>
      <a-button mb-3 bg="#1890ff" c-white>进行配置</a-button>
      <a-button mb-3 bg="#1890ff" c-white>保存简历</a-button>
      <a-button mb-3 bg="#1890ff" c-white>PDF下载</a-button>
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>
<style scoped>
.content {
  box-shadow: 1px 1px 6px 1px #ccc;
}
</style>
