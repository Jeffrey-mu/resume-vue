<script setup lang="ts">
</script>

<template>
  <div flex="~ 1 justify-center" pb-10 class="page" ma>
    <template v-for="item in templates" :key="item.id">
      <component :is="item.template" v-if="theme === item.id" />
    </template>
    <Operation />
  </div>
  <Drawer />
  <ImportSetting />
</template>

<style lang="scss">
.page {
  .template {
    width: 790px;
  }

  @media screen and (max-width: 790px) {
    .template {
      width: 95%;
      margin:10px auto;
    }
  }

  .company {
    font-size: 17px;
    font-weight: 600;
  }

  .work_experience__position {
    font-size: 12px;
  }
}
</style>
