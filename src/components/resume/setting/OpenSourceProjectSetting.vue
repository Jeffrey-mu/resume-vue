<script setup lang="ts" name="PerjectSetting">
import { OpenSourceProjectState as s } from '~/composables/resume'
const { t } = useI18n()
enum Type {
  del,
  add,
}
const keys = (item: object) => Object.keys(item)
function setOpenSourceProjectState(type: Type, index: number) {
  if (type === Type.del) {
    s.value.splice(index, 1)
  }
  else {
    s.value.push({
      name: '',
      github: '',
      desc: '',
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
        <a-input v-model:value="item[el]" />
      </a-form-item>
      <div h-12>
        <a-button my-2 danger float-right @click="setOpenSourceProjectState(Type.del, index)">
          {{ t('resume.operation.del') }}
        </a-button>
      </div>
      <a-divider />
    </div>
    <Button block @click="setOpenSourceProjectState(Type.add, 0)">
      {{ t('resume.operation.add') }}
    </Button>
  </a-form>
</template>
