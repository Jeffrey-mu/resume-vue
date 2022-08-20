<script setup lang="ts" name="PersonalSkills">
const value = ref<number>(2);
</script>
<template>
  <div>
    <div flex>
      <img src="" alt="" />
      <p></p>
      <a-rate flex v-model="value" />
    </div>
  </div>
</template>
