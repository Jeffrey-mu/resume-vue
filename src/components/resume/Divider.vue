<script setup lang="ts" name="Divider">
const { title } = defineProps<{ title: string }>()
</script>

<template>
  <div flex h-10 :style="{ color: currentColor }">
    <span text="17px" lh-10>
      {{ title }}
    </span>
    <div flex="~ 1 col" justify-center>
      <p border="~" h="1px" ma-3 />
    </div>
  </div>
</template>
