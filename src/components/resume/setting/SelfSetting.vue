<script setup lang="ts" name="SelfInfo">
import { selfIntroduce } from "~/composables/resume";
</script>

<template>
  <a-form
    :model="s"
    name="basic"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 20 }"
    autocomplete="off"
  >
    <a-form-item label="" name="">
      <a-textarea
        v-model:value="selfIntroduce"
        :rows="20"
        placeholder="输入个人介绍"
        allow-clear
      />
    </a-form-item>
  </a-form>
</template>
