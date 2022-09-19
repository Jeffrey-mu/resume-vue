<script setup lang="ts" name="PerjectSetting">
import { PerjectState as s } from '~/composables/resume'
const { t } = useI18n()
enum Type {
  del,
  add,
}
const keys = (item: object) => Object.keys(item)
function setPerjectState(type: Type, index: number) {
  if (type === Type.del) {
    s.value.splice(index, 1)
  }
  else {
    s.value.push({
      company: '',
      position: '',
      desc: [''],
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
          <template v-for="(_, descIndex) in item[el]" :key="descIndex">
            <div flex>
              <a-input v-model:value="item[el][descIndex]" mt-2 />
              <i c-red mx-2 cursor-pointer pt-2 @click="item[el].splice(descIndex, 1)">x</i>
            </div>
          </template>
          <Button mt-2 block @click="item[el].push('')">
            {{ t('resume.operation.add') }}
          </Button>
        </template>
      </a-form-item>
      <a-button
        my-2
        danger
        float-right
        @click="setPerjectState(Type.del, index)"
      >
        {{ t('resume.operation.del') }}
      </a-button>
      <a-divider />
    </div>
    <Button block @click="setPerjectState(Type.add, index)">
      {{ t('resume.operation.add') }}
    </Button>
  </a-form>
</template>
