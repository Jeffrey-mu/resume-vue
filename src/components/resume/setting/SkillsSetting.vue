<script setup lang="ts" name="SelfInfo">
import { PersonalSkillsState as s } from "~/composables/resume";
enum Type {
  del,
  add,
}
function setPersonalSkillsState(type: Type, index: number) {
  if (type == Type.del) {
    s.value.splice(index, 1);
  } else {
    s.value.push({
      skill: "",
      level: 5,
    });
  }
}
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
        <div flex lh-4 mt-2>
          熟练度：<a-rate inline-block flex v-model:value="item.level" />
        </div>
        <a-button my-2 danger float-right @click="setPersonalSkillsState(Type.del, index)"
          >删除</a-button
        >
        <a-divider/>
      </a-form-item>
    </div>
    <Button block @click="setPersonalSkillsState(Type.add, index)">添加</Button>
  </a-form>
</template>
