<script setup lang="ts" name="PersonalSkills">
const value = ref<number>(2);
</script>
<template>
  <div>
    <div
      flex="~"
      justify-start
      v-for="(item, index) in PersonalSkillsState"
      :key="index"
    >
      <img src="" alt="" />
      <p flex-1>{{ item.skill }}</p>
      <a-rate flex v-model:value="item.level" />
    </div>
  </div>
</template>
