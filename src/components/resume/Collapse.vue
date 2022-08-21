<script setup lang="ts">
import { activeKey } from "~/composables/resume";
</script>
<template>
  <a-collapse v-model:activeKey="activeKey" ghost accordion>
    <a-collapse-panel
      v-for="{ header, key, showArrow } in settingList"
      :key="key"
      :header="header"
      :showArrow="showArrow"
    >
      <Button @click="setChildrenDrawer" block>配置</Button>
    </a-collapse-panel>
  </a-collapse>
</template>
