<script setup lang="ts" name="WorkExperienceSetting">
import { WorkExperienceState as s } from '~/composables/resume'
const { t } = useI18n()
enum Type {
  del,
  add,
}
const keys = (item: object) => Object.keys(item)
function setWorkExperienceState(type: Type, index: number) {
  if (type === Type.del) {
    s.value.splice(index, 1)
  }
  else {
    s.value.push({
      company: '',
      date: '',
      position: '',
      desc: [],
    })
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
      <a-form-item v-for="el in keys(item)" :key="el" :label="el" name="">
        <template v-if="el !== 'desc'">
          <a-input v-model:value="item[el]" />
        </template>
        <template v-else>
          <a-input
            v-for="(_, descIndex) in item[el]"
            :key="descIndex"
            v-model:value="item[el][descIndex]"
            mt-2
          />
        </template>
      </a-form-item>
      <a-button
        my-2
        danger
        float-right
        @click="setWorkExperienceState(Type.del, index)"
      >
        {{ t('resume.operation.del') }}
      </a-button>
      <a-divider />
    </div>
    <Button block @click="setWorkExperienceState(Type.add, 0)">
      {{ t('resume.operation.add') }}
    </Button>
  </a-form>
</template>
