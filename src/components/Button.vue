<script setup lang="ts" name="button">
import { hexToRgb } from '~/utils'
const emit = defineEmits(['click'])
</script>

<template>
  <a-button mb-3 :style="{ background: hexToRgb(currentColor, .9) }" c-white @click="emit('click')">
    <slot />
  </a-button>
</template>
