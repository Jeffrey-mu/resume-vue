<script setup lang="ts">
</script>

<template>
  <div flex="~ 1 justify-center" pb-10 class="page" ma>
    <div v-for="item in templates" :key="item.id">
      <component :is="item.template" v-if="theme === item.id" />
    </div>
    <Operation />
  </div>
  <Drawer />
  <ImportSetting />
</template>

<style lang="scss">
.page {
  .company {
    font-size: 18px;
    font-weight: 600;
  }
}
</style>
