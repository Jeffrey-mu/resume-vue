<script setup lang="ts" name="button">
const emit = defineEmits(['click'])
</script>

<template>
  <a-button mb-3 :style="{ background: currentColor }" c-white @click="emit('click')">
    <slot />
  </a-button>
</template>
