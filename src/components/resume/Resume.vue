<script setup lang="ts">
</script>

<template>
  <div flex="~ 1 justify-center" pb-10 class="page" ma>
    <Template_1 v-if="theme === 1" />
    <Template_2 v-if="theme === 2" />
    <Template_3 v-if="theme === 3" />
    <Operation />
  </div>
  <Drawer />
  <ImportSetting />
</template>

<style>

</style>
