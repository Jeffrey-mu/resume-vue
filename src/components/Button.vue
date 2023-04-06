<script setup lang="ts" name="button">
const emit = defineEmits(['click'])
</script>

<template>
  <a-button mb-3 :style="{ background: '#1890ff' }" c-white @click="emit('click')">
    <slot />
  </a-button>
</template>
