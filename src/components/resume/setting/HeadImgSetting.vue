<script setup lang="ts" name="HeadImg">
import { SelfProfileState as s } from "~/composables/resume";
</script>

<template>
  <div mb-2>
    显示头像：<a-switch v-model:checked="s.showImg" bg="#1890ff" />
  </div>
  <div>
    开启圆角：<a-switch
      v-model:checked="s.radius"
      bg="#1890ff"
      checkedValue="50%"
      unCheckedValue="0"
    />
  </div>
</template>
