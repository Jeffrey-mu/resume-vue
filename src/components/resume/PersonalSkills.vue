<script setup lang="ts" name="PersonalSkills">
withDefaults(defineProps<{ hideScore?: boolean }>(), { hideScore: false })
</script>

<template>
  <div width="100%" class="personal_skills">
    <div v-for="(item, index) in PersonalSkillsState" :key="index" class="personal_skills_item" flex="~" justify-start>
      <p flex-1 class="personal_skills_item_des">
        <Skeleton>
          {{ item.skill }}
        </Skeleton>
      </p>
      <a-rate v-show="!hideScore" v-model:value="item.level" flex />
    </div>
  </div>
</template>

<style lang="scss">
.template {
  .personal_skills_item {
    .personal_skills_item_des {
      width: 100%;
      word-wrap:break-word;
    }
  }
}
</style>
