<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <a-drawer
    :visible="visible"
    class="custom-class"
    :title="t('resume.setting.drawer')"
    placement="right"
    @close="setVisible"
  >
    <a-drawer
      :visible="childrenDrawer"
      :title="activeName"
      width="320"
      @close="setChildrenDrawer"
    >
      <component :is="activeComponent" />
    </a-drawer>
    <Collapse />
  </a-drawer>
</template>
