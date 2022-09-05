<script setup lang="ts" name="HeadImg">
import { SelfProfileState as s } from '~/composables/resume'
const { t } = useI18n()
</script>

<template>
  <div mb-2>
    {{ t("header.faces") }}：<a-switch v-model:checked="s.showImg" bg="#1890ff" />
  </div>
  <div>
    {{ t("header.radius") }}：<a-switch
      v-model:checked="s.radius"
      bg="#1890ff"
      checked-value="50%"
      un-checked-value="0"
    />
  </div>
</template>
