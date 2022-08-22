<script setup lang="ts" name="SelfIntroduction"></script>
<template>
  <a-form
    :model="s"
    name="basic"
    :wrapper-col="{ span: 20 }"
    autocomplete="off"
  >
    <a-form-item
      ma-0
      :label="index + 1"
      name=""
      v-for="(item, index) in SelfIntroduce"
      :key="index"
    >
      <div v-html="SelfIntroduce[index]"></div>
    </a-form-item>
  </a-form>
</template>
