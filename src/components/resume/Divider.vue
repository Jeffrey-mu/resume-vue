<script setup lang="ts" name="Divider">
const { title } = defineProps<{ title: string }>();
</script>

<template>
  <div flex h-10 text="#1890ff">
    <span text="17px" lh-10>
      {{ title }}
    </span>
    <div flex="~ 1 col" justify-center>
      <p border-b h="1px" ma-3></p>
    </div>
  </div>
</template>
