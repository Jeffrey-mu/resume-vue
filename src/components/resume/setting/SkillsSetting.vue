<script setup lang="ts" name="SkillsSetting">
import { PersonalSkillsState as s, OperationType } from "~/composables/resume";
import { operationData } from "~/utils";
const setPersonalSkillsState = operationData(s);
</script>

<template>
  <a-form
    :model="s"
    name="basic"
    :label-col="{ span: 4 }"
    :wrapper-col="{ span: 20 }"
    autocomplete="off"
  >
    <div v-for="(item, index) in s" :key="index">
      <a-form-item label="技能" name="">
        <a-input v-model:value="item.skill" placeholder="输入个人介绍" />
        <div flex lh-4 mt-2 justify-around>
          熟练度：<a-rate inline-block flex v-model:value="item.level" />
          <a-button
            type="text"
            lh-4
            danger
            @click="setPersonalSkillsState(OperationType.del, index)"
            >DEL</a-button
          >
        </div>

        <a-divider />
      </a-form-item>
    </div>
    <Button block @click="setPersonalSkillsState(OperationType.add, index)"
      >ADD</Button
    >
  </a-form>
</template>
