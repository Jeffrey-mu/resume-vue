<script setup lang="ts" name="PersonalSkills">
</script>

<template>
  <div>
    <div
      v-for="(item, index) in PersonalSkillsState"
      :key="index"
      flex="~"
      justify-start
    >
      <img src="" alt="">
      <p flex-1>
        {{ item.skill }}
      </p>
      <a-rate v-model:value="item.level" flex />
    </div>
  </div>
</template>
