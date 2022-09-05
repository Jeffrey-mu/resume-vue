<script setup lang="ts">
import { activeKey } from '~/composables/resume'
const { t } = useI18n()
</script>

<template>
  <a-collapse v-model:activeKey="activeKey" ghost accordion>
    <a-collapse-panel
      v-for="{ header, key, showArrow } in settingList"
      :key="key"
      :header="t(header)"
      :show-arrow="showArrow"
    >
      <Button block @click="setChildrenDrawer">
        {{ t("resume.setting.name") }}
      </Button>
    </a-collapse-panel>
  </a-collapse>
</template>
