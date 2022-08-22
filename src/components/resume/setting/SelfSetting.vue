<script setup lang="ts" name="SelfInfo">
import { SelfIntroduce as s } from "~/composables/resume";
</script>

<template>
  <a-form
    :model="s"
    name="basic"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 20 }"
    autocomplete="off"
  >
    <a-form-item :label="index + 1" name="" v-for="item, index in s" :key="index">
     <a-textarea inline-block
        v-model:value="s[index]"
        :rows="4"
        placeholder="输入个人介绍"
        allow-clear
      />
    </a-form-item>
  </a-form>
</template>
