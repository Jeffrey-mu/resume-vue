<template>
  <a-button mb-3 bg="#1890ff" c-white @click="emit('click')">
    <slot></slot>
  </a-button>
</template>
<script setup lang="ts" name="button">
const emit = defineEmits(["click"]);
</script>
