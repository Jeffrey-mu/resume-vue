<script setup lang="ts" name="SelfInfo">
import { WorkExperienceState as s } from "~/composables/resume";
enum Type {
  del,
  add,
}
const keys = (item: object) => Object.keys(item);
function setWorkExperienceState(type: Type, index: number) {
  if (type == Type.del) {
    s.value.splice(index, 1);
  } else {
    s.value.push({
      company: "",
      date: "",
      position: "",
      desc: [],
    });
  }
}
</script>

<template>
  <a-form
    :model="s"
    name="basic"
    :label-col="{ span: 5 }"
    :wrapper-col="{ span: 19 }"
    autocomplete="off"
  >
    <div v-for="(item, index) in s" :key="index">
      <a-form-item :label="el" name="" v-for="el in keys(item)" :key="el">
        <template v-if="el !== 'desc'">
          <a-input v-model:value="item[el]"></a-input>
        </template>
        <template v-else>
          <a-input v-for="_, descIndex in item[el]" v-model:value="item[el][descIndex]" :key="descIndex" mt-2></a-input>
        </template>
      </a-form-item>
      <a-button
        my-2
        danger
        float-right
        @click="setWorkExperienceState(Type.del, index)"
        >删除</a-button
      >
      <a-divider />
    </div>
    <Button block @click="setWorkExperienceState(Type.add, index)">添加</Button>
  </a-form>
</template>
